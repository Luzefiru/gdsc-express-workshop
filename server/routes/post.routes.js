const router = require('express').Router();
const postController = require('../controllers/post.controller');

router.get('/', async (req, res) => {
  const posts = await postController.getPosts();
  res.status(200).json(posts);
});

router.post('/', async (req, res) => {
  const { title, content } = req.body;

  const newPost = await postController.createPost({ title, content });

  res.status(201).json(newPost);
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;

  await postController.deletePost({ id: Number(id) });

  res.status(204).end();
});

router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;

  try {
    const updatedPost = await postController.updatePost({
      id: Number(id),
      title,
      content,
    });
    return res.status(200).json(updatedPost);
  } catch (e) {
    return res.status(404).json({ error: e.message });
  }
});

module.exports = router;
