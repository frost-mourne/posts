import { useEffect, useState } from 'react';
import { Link } from '@inertiajs/react';

import axios from 'axios';

export default function Welcome() {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        axios.get('/api/articles').then(response => {
            setArticles(response.data);
        });
    }, []);

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Блог</h1>
            <Link 
            href="/articles/create" 
            className="inline-block bg-blue-600 text-white px-4 py-2 rounded mb-6"
        >
            + Добавить статью
        </Link>
            {articles.map(article => (
                <Link key={article.id} href={`/articles/${article.id}`}>
                <div key={article.id} className="mb-4 border-b pb-2">
                    <h2 className="text-xl text-blue-600">{article.title}</h2>
                    <p>{article.content}</p>
                </div>
                </Link>
            ))}
        </div>
    );
}
