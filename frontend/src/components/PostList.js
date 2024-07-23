// PostList.js

import React, { useState, useEffect, useContext } from 'react';
import useAxios from '../utils/useAxios';
import AuthContext from '../context/AuthContext';

const PostList = () => {
    const [posts, setPosts] = useState([]);
    const api = useAxios();
    // eslint-disable-next-line
    const { user } = useContext(AuthContext);

    useEffect(() => {
        const fetchPosts = async () => {
            const response = await api.get('/posts/');
            setPosts(response.data);
        };

        fetchPosts();
    }, [api]);

    return (
        <div>
            <h1>Posts</h1>
            {posts.map(post => (
                <div key={post.id}>
                    <h2>{post.title}</h2>
                    <p>{post.content}</p>
                    <p>By: {post.user.username}</p>
                </div>
            ))}
        </div>
    );
};

export default PostList;
