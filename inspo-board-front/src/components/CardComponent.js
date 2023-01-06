import PropTypes from "prop-types";

const Card = ({ id, message, likes, deleteCard }) => {
  return (
    <div>
      <h4>{message}</h4>
      <span>{likes}💕</span>
      <button
        onClick={() => {
          deleteCard(id);
        }}
      >
        DELETE
      </button>
    </div>
  );
};

Card.propTypes = {
  id: PropTypes.number.isRequired,
  message: PropTypes.string.isRequired,
  likes: PropTypes.number.isRequired,
  deleteCard: PropTypes.func.isRequired,
};

export default Card;
