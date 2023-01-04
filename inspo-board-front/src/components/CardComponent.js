import PropTypes from "prop-types";

const Card = ({id,message,likes,deleteCard}) => {
  
  return <div>{message}</div>;
};

Card.propTypes = {
  id:PropTypes.number.isRequired,
  message:PropTypes.string.isRequired,
  // likes:PropTypes.number.isRequired,
  // deleteCard:PropTypes.func.isRequired
};

export default Card;