import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DataFetching2 = () => {

    const url = 'https://jsonplaceholder.typicode.com/posts';

    const [ post, setPost ] = useState({});
    const [ id, setId ] = useState(1);

    useEffect(() => {
        axios.get(`${url}/${id}`)
        .then(response => setPost(response.data))
        .catch(error => console.log('Response failure: ', error.message))
    }, [id])

    return (
        <div>
            <input type="text" value={id} onChange={event => setId(event.target.value)} />
            <div>{post.title}</div>
        </div>
    )
};

export default DataFetching2;