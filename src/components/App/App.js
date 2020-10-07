import React, { useState, useEffect } from "react";
import { Header, Container, ScoreBoard, Score } from "./App.components";
import { GlobalStyle, Root } from "../../globalStyles";
import Card from "../Card/Card";
import { Cards } from "../Card/Data";

function App() {
  const [shuffledCards, setShuffled] = useState(Cards);
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [clickedCards, setClicked] = useState([]);

  function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  }

  useEffect(() => {
    let newCards = shuffledCards;
    shuffleArray(newCards);
    setShuffled(newCards);
  }, [currentScore]);

  useEffect(() => {}, [highScore]);

  return (
    <Root>
      <GlobalStyle />
      <Header>
        <ScoreBoard>
          <Score>Current Score: {currentScore}</Score>
          <Score>High Score: {highScore}</Score>
        </ScoreBoard>
      </Header>
      <Container>
        {shuffledCards.map((card) => (
          <Card
            key={card.title}
            currentScore={currentScore}
            setCurrentScore={setCurrentScore}
            highScore={highScore}
            setHighScore={setHighScore}
            clickedCards={clickedCards}
            setClicked={setClicked}
            card={card}
          />
        ))}
      </Container>
    </Root>
  );
}

export default App;
