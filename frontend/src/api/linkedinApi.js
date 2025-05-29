import axios from 'axios';

const API_URL = 'http://localhost:5000/api/linkedin';

export const publishPost = async (postContent) => {
  try {
    const response = await axios.post(`${API_URL}/publish`, { content: postContent });
    return response.data;
  } catch (error) {
    throw new Error('Error publishing post: ' + error.message);
  }
};