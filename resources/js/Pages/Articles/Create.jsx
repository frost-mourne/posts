import React from 'react';
import { useForm, Link } from '@inertiajs/react';

export default function Create() {
    const { data, setData, post, processing, errors } = useForm({
        title: '',
        content: '',
    });

    const submit = (e) => {
        e.preventDefault();
        post('/articles');
    };

    return (
        <div className="p-8 max-w-2xl mx-auto">
            <Link href="/" className="text-blue-500 hover:underline">← Назад к списку</Link>
            <h1 className="text-2xl font-bold my-6">Написать новую статью</h1>

            <form onSubmit={submit} className="space-y-4">
                <div>
                    <label className="block mb-1">Заголовок</label>
                    <input 
                        type="text" 
                        className="w-full border p-2 rounded"
                        value={data.title}
                        onChange={e => setData('title', e.target.value)}
                    />
                    {errors.title && <div className="text-red-500 text-sm">{errors.title}</div>}
                </div>

                <div>
                    <label className="block mb-1">Текст статьи</label>
                    <textarea 
                        className="w-full border p-2 rounded h-40"
                        value={data.content}
                        onChange={e => setData('content', e.target.value)}
                    />
                    {errors.content && <div className="text-red-500 text-sm">{errors.content}</div>}
                </div>

                <button 
                    disabled={processing}
                    className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
                >
                    Опубликовать
                </button>
            </form>
        </div>
    );
}
