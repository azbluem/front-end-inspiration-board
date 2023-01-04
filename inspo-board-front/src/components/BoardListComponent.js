import PropTypes from "prop-types";

const BoardList = (props) => {
  const boardData = props.boardList;
  const boardTitleList = [];

  for (const board of boardData) {
    boardTitleList.push(<li key={board.id}>{board.title}</li>);
  }

  return (
    <div>
      <h2>Boards</h2>
      <ol>{boardTitleList}</ol>
    </div>
  );
};

BoardList.propTypes = {
  boardList: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default BoardList;
