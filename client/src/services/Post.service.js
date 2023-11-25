import axios from 'axios';
const baseUrl = 'http://localhost:3000/post';

const PostService = (() => {
  const getPosts = async () => {
    const { data } = await axios.get(baseUrl);
    return data;
  };

  const createPost = async ({ title, content }) => {
    const { data } = await axios.post(baseUrl, { title, content });
    return data;
  };

  const deletePost = async (id) => {
    await axios.delete(`${baseUrl}/${id}`);
    return;
  };

  return { getPosts, createPost, deletePost };
})();

export default PostService;
