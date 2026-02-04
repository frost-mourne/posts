<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ArticleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void {
        \App\Models\Article::create([
            'title' => 'Первая статья',
            'content' => 'Содержимое первой тестовой статьи.'
        ]);
        \App\Models\Article::create([
            'title' => 'Вторая статья',
            'content' => 'Содержимое второй тестовой статьи.'
        ]);
        \App\Models\Article::create([
            'title' => 'Еще одна статья',
            'content' => 'Содержимое еще одной тестовой статьи.'
        ]);
    }
    
}
