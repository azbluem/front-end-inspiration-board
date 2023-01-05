import PropTypes from "prop-types";
import { useState } from "react";

const INITIAL_BOARD_DATA = {
  'title':"",
  'owner':""
}

const NewBoardForm = ({addBoard}) => {
  const [boardFormData,setBoardFormData] = useState(INITIAL_BOARD_DATA)

  const handleFormChange = (e) => {
    const newBoardData = {
      ...boardFormData,
      [e.target.name] : e.target.value
    }
    setBoardFormData(newBoardData);
  }

  const submitBoardForm = (e) => {
    e.preventDefault();
    addBoard(boardFormData);
    setBoardFormData(INITIAL_BOARD_DATA);
  }

  return <div>
    <form onSubmit={submitBoardForm}>
      <label htmlFor='title'>Title: </label>
      <input type='text' id='title' name='title' value={boardFormData.title} onChange={handleFormChange}></input>
      <br></br>
      <label htmlFor='owner'>Owner: </label>
      <input type='text' id='owner' name='owner' value={boardFormData.owner} onChange={handleFormChange}></input>
      <br></br>
      <p>Preview: {boardFormData.title} - {boardFormData.owner}</p>
      <br></br>
      <input type='submit' value='Add Board'></input>

    </form>

  </div>;
};

NewBoardForm.propTypes = {};

export default NewBoardForm;
