const postController = (() => {
  let currentId = 5;

  let posts = [
    {
      id: 1,
      title: "SpaceX's Ambitious Mars Plan",
      content:
        "Elon Musk announces plans for SpaceX's ambitious mission to establish a sustainable human colony on Mars within the next decade. The project aims to pioneer interplanetary travel and make life multiplanetary.",
    },
    {
      id: 2,
      title: 'The Rise of Decentralized Finance (DeFi)',
      content:
        'Decentralized finance (DeFi) disrupts traditional financial systems by offering innovative solutions using blockchain technology. Its rise sparks debates on financial inclusivity and the future of banking.',
    },
    {
      id: 3,
      title: 'Advancements in AI-Assisted Healthcare',
      content:
        'Recent developments in AI-assisted healthcare have shown promising results in diagnosing complex diseases more accurately and suggesting personalized treatment plans based on individual patient data. This innovation is poised to revolutionize the healthcare industry.',
    },
    {
      id: 4,
      title: 'Renewable Energy Breakthrough',
      content:
        'Scientists have achieved a major breakthrough in renewable energy by leveraging nanotechnology to enhance solar panel efficiency. This innovation promises to make solar power more accessible and cost-effective, potentially transforming global energy production.',
    },
    {
      id: 5,
      title: 'Exploration of Martian Moons Reveals New Insights',
      content:
        "Recent observations and analysis from missions exploring Martian moons have unveiled intriguing geological features and compositional data, shedding light on the planet's early history and providing valuable insights into the solar system's formation.",
    },
  ]; // Database :)

  const getPosts = async () => {
    return posts;
  };

  const createPost = async ({ title, content }) => {
    const newPost = { id: ++currentId, title, content };
    posts.push(newPost);
    return newPost;
  };

  const deletePost = async ({ id }) => {
    posts = posts.filter((p) => p.id !== id);
  };

  const updatePost = async ({ id, title, content }) => {
    const isExists = posts.some((p) => p.id === id);

    if (!isExists) {
      throw new Error(`Post with id: ${id} does not exist!`);
    }

    // initialize updatedPost
    const updatedPost = { id, title, content };
    // filter out post id to update
    posts = posts.filter((p) => p.id !== id);
    // insert it back into posts
    posts.push(updatedPost);

    posts = posts.sort((a, b) => {
      if (a.id === b.id) {
        return 0;
      }

      return a.id > b.id ? 1 : -1;
    });

    return updatedPost;
  };

  return { getPosts, createPost, deletePost, updatePost };
})();

module.exports = postController;
