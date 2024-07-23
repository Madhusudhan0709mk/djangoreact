import React, { useState } from 'react';
import useAxios from '../utils/useAxios';

const PostForm = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const api = useAxios();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await api.post('/posts/', { title, content });
            if (response.status === 201) {
                setTitle('');
                setContent('');
                alert('Post created successfully');
            }
        } catch (error) {
            if (error.response) {
                console.error('Response data:', error.response.data);
                console.error('Response status:', error.response.status);
                console.error('Response headers:', error.response.headers);
                alert(`Error: ${error.response.data.detail || 'Unknown error'}`);
            } else if (error.request) {
                console.error('Request data:', error.request);
                alert('No response received from server');
            } else {
                console.error('Error message:', error.message);
                alert('Error creating post');
            }
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Title</label>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Content</label>
                <textarea
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    required
                />
            </div>
            <button type="submit">Create Post</button>
        </form>
    );
};

export default PostForm;
