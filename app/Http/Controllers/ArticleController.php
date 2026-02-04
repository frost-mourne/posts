<?php

namespace App\Http\Controllers;

use App\Models\Article;
use Illuminate\Http\Request;

class ArticleController extends Controller
{
    
    public function index() {
        return \App\Models\Article::latest()->get();
    }
    
    public function show($id) {
        return \App\Models\Article::with('comments')->findOrFail($id);
    }
    
    public function store(Request $request) {
        return \App\Models\Article::create($request->validate([
            'title' => 'required',
            'content' => 'required',
        ]));
    }
    
    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Article $article)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Article $article)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Article $article)
    {
        //
    }
}
