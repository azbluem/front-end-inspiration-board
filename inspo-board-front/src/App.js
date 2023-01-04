import BoardList from BoardListComponent.js;
import BoardInfo from BoardInfoComponent.js;
import NewBoardForm from NewBoardFormComponent.js;
import CardContainer from CardContainerComponent.js;
import NewCardForm from NewCardFormComponent.js;

import "./App.css";

function App() {
  return (
    <div>
      <div className="header">
        <header>Inspiration Board</header>
      </div>
      <div className="board-list"><BoardList></BoardList></div>
      <div className="board-info"><BoardInfo></BoardInfo></div>
      <div className="new-board-form"><NewBoardForm></NewBoardForm></div>
      <div className="card-container"><CardContainer></CardContainer></div>
      <div className="new-card-form"><NewCardForm></NewCardForm></div>
    </div>
  );
}

export default App;
