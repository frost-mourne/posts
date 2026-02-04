<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Article extends Model
{
    // Разрешаем массовое заполнение полей (нужно для создания через API)
    protected $fillable = ['title', 'content'];

    /**
     * Связь: у одной статьи много комментариев
     */
    public function comments(): HasMany
    {
        return $this->hasMany(Comment::class);
    }
}
