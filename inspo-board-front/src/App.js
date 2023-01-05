import BoardList from "./components/BoardListComponent";
import BoardInfo from "./components/BoardInfoComponent";
import NewBoardForm from "./components/NewBoardFormComponent";
import CardContainer from "./components/CardContainerComponent";
import NewCardForm from "./components/NewCardFormComponent";
import axios from "axios";
import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [boardList, setBoardList] = useState([]);
  const [selectedBoard, setSelectedBoard] = useState('Select a board from the board list');
  const [cards, setCards] = useState([])

  const URL = "http://127.0.0.1:5000/board";

  const getAllBoards = () => {
    axios
      .get(URL)
      .then((response) => {
        const boardData = response.data.map((board) => {
          return {
            ...board,
          };
        });
        setBoardList(boardData);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(getAllBoards, []);

  const selectBoard = (boardId)=> {
    // console.log('select board clicked')
    let chosenBoard ;
    for (const board of boardList) {
      if (board.id === boardId) {
        chosenBoard = board ;
        break

      }
    } setSelectedBoard(`${chosenBoard.title} - ${chosenBoard.owner}`)
    renderCards(chosenBoard.cards)
  }

  const renderCards = (cards) => {
    const cardList = cards.sort((a,b)=>(a.id>b.id)?-1:1)
    const range = Math.min(9,cardList.length)
    const returnCards = []
    for (let i=0;i<range;i++) {
      returnCards.push(cardList[i])
    }
    setCards(returnCards)
  }

  const deleteCard = (cardId) => {
    axios.delete(`${URL}/${selectedBoard.id}/${cardId}`)
    .then(()=>{
      const newCardList = []
      for (const card of cards) {
        if (cardId!==card.id) {
          newCardList.push(card)
        }
      }
      setCards(newCardList)
    })
    .catch((error)=>(console.log(error)))
  }

  return (
    <div>
      <div className="header">
        <header>Inspiration Board</header>
      </div>
      <div className="board-list">
        <BoardList boardList={boardList} selectBoard={selectBoard}></BoardList>
      </div>
      <div className="board-info">
        <BoardInfo selectedBoard ={selectedBoard}></BoardInfo>
      </div>
      <div className="new-board-form">
        <NewBoardForm></NewBoardForm>
      </div>
      <div className="card-container">
        <CardContainer cardList ={cards} deleteCard={deleteCard}></CardContainer>
      </div>
      <div className="new-card-form">
        <NewCardForm></NewCardForm>
      </div>
    </div>
  );
}

export default App;
