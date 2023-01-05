import PropTypes from "prop-types";
import { useState } from "react";

const INITIAL_CARD_DATA = {
  'message':""
}

const NewCardForm = ({addCard}) => {
  const [cardFormData,setCardFormData] = useState(INITIAL_CARD_DATA)

  const handleFormChange = (e) => {
    const newCardData = {
      ...cardFormData,
      [e.target.name] : e.target.value
    }
    setCardFormData(newCardData);
  }

  const submitCardForm = (e) => {
    e.preventDefault();
    addCard(cardFormData);
    setCardFormData(INITIAL_CARD_DATA);
  }

  return <div>
    <form onSubmit={submitCardForm}>
      <label htmlFor='message'>Message: </label>
      <input type='text' id='message' name='message' value={cardFormData.title} onChange={handleFormChange}></input>
      <br></br>
      <p>Preview: {cardFormData.message}</p>
      <br></br>
      <input type='submit' value='Add Card'></input>
      </form></div>}

NewCardForm.propTypes = {
  addCard:PropTypes.func.isRequired
};

export default NewCardForm;
