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

  return { getPosts, createPost };
})();

export default PostService;
