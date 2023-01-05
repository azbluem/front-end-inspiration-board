import PropTypes from "prop-types";
import Card from '../components/CardComponent.js'

const CardContainer = (props) => {
  const cardList = props.cardList;
  const deleteCard = props.deleteCard
  const cardRenders = cardList.map((card)=>{
    return <div key={card.id}><Card id={card.id} message={card.message} likes={card.likes} deleteCard={deleteCard}/></div>
  })

  return (<div>
    <h2>Messages</h2>
    <div>{cardRenders}</div>
  </div>);
};

CardContainer.propTypes = {
  cardList : PropTypes.arrayOf(PropTypes.object).isRequired,
  deleteCard: PropTypes.func.isRequired
};

export default CardContainer;
