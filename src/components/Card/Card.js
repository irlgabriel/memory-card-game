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
  function clickHandler(e) {
    console.log(card)
    if (clickedCards.includes(card)) {
      if (highScore < currentScore) {
        setHighScore(currentScore);
        setClicked([])
        console.log("clicked on clicked, should reset!");
      }
      setCurrentScore(0);
    } else {
      console.log("clicked on unclicked");
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
