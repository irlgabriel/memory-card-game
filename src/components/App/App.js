import React, { useState, useEffect } from "react";
import { Header, Container, ScoreBoard, Score } from "./App.components";
import { GlobalStyle, Root } from "../../globalStyles";
import Card from "../Card/Card";
import { Cards } from "../Card/Data";

function App() {
  const [cards, setCards] = useState(Cards);
  const [shuffledCards, setShuffled] = useState(Cards);
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  return (
    <Root>
      <GlobalStyle />
      <Header>
        <ScoreBoard>
          <Score>Current Score: {currentScore}</Score>
          <Score>HighScore: {highScore}</Score>
        </ScoreBoard>
      </Header>
      <Container>
        {shuffledCards.map((card) => (
          <Card card={card}  />
        ))}
      </Container>
    </Root>
  );
}

export default App;
