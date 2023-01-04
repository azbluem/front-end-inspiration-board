import PropTypes from "prop-types";
import Card from '../components/CardComponent.js'

const CardContainer = (props) => {
  const cardList = props.cardList;
  const cardRenders = cardList.map((card)=>{
    return <div><Card key={card.id} id={card.id} message={card.message}/></div>
  })

  return (<div>
    <h2>Messages</h2>
    <div>{cardRenders}</div>
  </div>);
};

CardContainer.propTypes = {
  cardList : PropTypes.arrayOf(PropTypes.object).isRequired
};

export default CardContainer;
