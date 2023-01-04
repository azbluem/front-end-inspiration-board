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

  return (
    <div>
      <div className="header">
        <header>Inspiration Board</header>
      </div>
      <div className="board-list">
        <BoardList boardList={boardList}></BoardList>
      </div>
      <div className="board-info">
        <BoardInfo></BoardInfo>
      </div>
      <div className="new-board-form">
        <NewBoardForm></NewBoardForm>
      </div>
      <div className="card-container">
        <CardContainer></CardContainer>
      </div>
      <div className="new-card-form">
        <NewCardForm></NewCardForm>
      </div>
    </div>
  );
}

export default App;
