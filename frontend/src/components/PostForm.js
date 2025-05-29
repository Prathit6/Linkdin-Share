import React, { useState } from 'react';
import axios from 'axios';

const PostForm = () => {
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const response = await axios.post('/api/linkedin/post', { content });
      if (response.status === 200) {
        setSuccess(true);
        setContent('');
      }
    } catch (err) {
      setError('Failed to publish post. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Post to LinkedIn</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="What's on your mind?"
          required
        />
        <button type="submit" disabled={loading}>
          {loading ? 'Publishing...' : 'Publish Post'}
        </button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {success && <p style={{ color: 'green' }}>Post published successfully!</p>}
    </div>
  );
};

export default PostForm;