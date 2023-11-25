import propTypes from 'prop-types';

function Post({ id, title, content }) {
  return (
    <div
      data-id={id}
      className="card outline outline-1 outline-neutral w-full min-h-[15rem] bg-base-100 shadow-lg"
    >
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{content}</p>
      </div>
    </div>
  );
}

Post.propTypes = {
  id: propTypes.number.isRequired,
  title: propTypes.string.isRequired,
  content: propTypes.string.isRequired,
};

export default Post;
