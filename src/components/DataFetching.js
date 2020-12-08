import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DataFetching = () => {

    const url = 'https://jsonplaceholder.typicode.com/posts'
    const [ posts, setPosts ] = useState([]);

    useEffect(() => {
        axios({
            url: url,
            method: 'GET'
        })
        .then(response => setPosts(response.data))
        .catch(error => console.log('Requests failure: ', error.message))
    }, [])

    return (
        <div>
            <ul>{posts.map(post => <li key={post.id}>{post.title}</li>)}</ul>
        </div>
    );

};

export default DataFetching;
