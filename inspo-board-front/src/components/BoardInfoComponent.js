import PropTypes from "prop-types";

const BoardInfo = (props) => {
  const boardInfoString = props.selectedBoard;

  return <div>{boardInfoString}</div>;
};

BoardInfo.propTypes = {
  selectedBoard: PropTypes.string.isRequired,
};

export default BoardInfo;
