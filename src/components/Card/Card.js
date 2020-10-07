import React, { useState, useEffect } from "react";
import { CardContainer, ImgContainer, Img, Header } from "./Card.components";
export default function Card({
  card,
  setCurrentScore,
  highScore,
  currentScore,
  setHighScore,
  clickedCards,
  setClicked,
}) {
  function clickHandler() {
    console.log(card)
    if (clickedCards.includes(card)) {
      if (highScore < currentScore) {
        setHighScore(currentScore);
        setClicked([])
      } else {
        setClicked([])
      }
      setCurrentScore(0);
    } else {
      setClicked([...clickedCards, card])
      setCurrentScore((currentScore += 1));
    }
  }


  return (
    <CardContainer onClick={clickHandler}>
      <Header>{card.title}</Header>
      <ImgContainer>
        <Img src={card.img} />
      </ImgContainer>
    </CardContainer>
  );
}
