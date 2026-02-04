import React from 'react';
import { Head, useForm } from '@inertiajs/react';

export default function Show({ article }) {
    // Форма для отправки комментария
    const { data, setData, post, processing, reset } = useForm({
        author_name: '',
        content: '',
    });

    const submit = (e) => {
        e.preventDefault();
        // Отправляем на роут, который создадим в следующем шаге
        post(`/articles/${article.id}/comments`, {
            onSuccess: () => reset(),
        });
    };

    return (
        <div className="p-8 max-w-2xl mx-auto">
            <Head title={article.title} />
            <h1 className="text-3xl font-bold mb-4">{article.title}</h1>
            <p className="text-gray-700 mb-8">{article.content}</p>

            <hr className="mb-8" />

            <h3 className="text-xl font-semibold mb-4">Комментарии</h3>
            {article.comments.map(comment => (
                <div key={comment.id} className="mb-4 p-4 bg-gray-100 rounded">
                    <strong>{comment.author_name}:</strong>
                    <p>{comment.content}</p>
                </div>
            ))}

            <form onSubmit={submit} className="mt-8 space-y-4">
                <input 
                    type="text" 
                    placeholder="Ваше имя" 
                    className="w-full border p-2 rounded"
                    value={data.author_name}
                    onChange={e => setData('author_name', e.target.value)}
                    required
                />
                <textarea 
                    placeholder="Комментарий" 
                    className="w-full border p-2 rounded"
                    value={data.content}
                    onChange={e => setData('content', e.target.value)}
                    required
                />
                <button 
                    disabled={processing}
                    className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                    Добавить комментарий
                </button>
            </form>
        </div>
    );
}
