import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Index() {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        axios.get('/api/articles').then(res => setArticles(res.data));
    }, []);

    return (
        <div>
            {articles.map(article => (
                <div key={article.id}>
                    <h1>{article.title}</h1>
                    <p>{article.content.substring(0, 100)}...</p>
                </div>
            ))}
        </div>
    );
}