<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Models\Article;

Route::get('/articles/create', function () {
    return Inertia::render('Articles/Create');
})->name('articles.create');

// Сохранение статьи
Route::post('/articles', function (Request $request) {
    $validated = $request->validate([
        'title' => 'required|string|max:255',
        'content' => 'required|string',
    ]);

    \App\Models\Article::create($validated);

    return redirect('/')->with('success', 'Статья успешно создана!');
});


Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::get('/articles/{id}', function ($id) {
    return Inertia::render('Articles/Show', [
        'article' => Article::with('comments')->findOrFail($id)
    ]);
})->name('articles.show');

// Сохранение комментария
Route::post('/articles/{id}/comments', function (Request $request, $id) {
    $article = Article::findOrFail($id);
    $article->comments()->create($request->validate([
        'author_name' => 'required|string|max:255',
        'content' => 'required|string',
    ]));
    return back(); // Возвращаемся на ту же страницу
});


require __DIR__.'/auth.php';
