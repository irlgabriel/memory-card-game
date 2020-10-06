import React, { useState, useEffect } from "react";
import { CardContainer, ImgContainer, Img, Header } from "./Card.components";
export default function Card({ card, setCurrentScore, highScore, currentScore, setHighScore }) {
  const [clicked, setClicked] = useState(false)
  function clickHandler() {
    if(clicked) {
      if(highScore < currentScore) {
        setHighScore(currentScore)
        setClicked(false)
        console.log('clicked on clicked, should reset!')
      }
      setCurrentScore(0);
    } else {
      console.log('clicked on unclicked')
      setClicked(true);
      setCurrentScore(currentScore += 1)
    }
  }
  useEffect(() => {
    setClicked(false);
  }, [highScore])
  return (
    <CardContainer onClick={clickHandler}>
      <Header>{card.title}</Header>
      <ImgContainer>
        <Img src={card.img} />
      </ImgContainer>
    </CardContainer>
  );
}
