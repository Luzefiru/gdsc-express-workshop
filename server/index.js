const express = require('express');
const cors = require('cors');
const app = express();
const postRouter = require('./routes/post.routes');

app.use(cors());
app.use(express.json());

app.use('/post', postRouter);

app.get('/', (req, res) => {
  res.send('<h1>Hello Sam :)</h1>');
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log('Server is now running on http://localhost:3000/');
});
