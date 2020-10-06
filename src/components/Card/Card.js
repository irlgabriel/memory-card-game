import React from "react";
import { CardContainer, ImgContainer, Img, Header } from "./Card.components";
export default function Card({ card }) {
  function clickHandler() {}
  return (
    <CardContainer onClick={clickHandler}>
      <Header>{card.title}</Header>
      <ImgContainer>
        <Img src={card.img} />
      </ImgContainer>
    </CardContainer>
  );
}
