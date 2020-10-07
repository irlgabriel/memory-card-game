import styled from "styled-components";

export const CardContainer = styled.div`
  padding: 1rem;
  margin: 0.75rem;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 250px;
  width: 200px;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.02);
  }
  
  @media screen and (max-width: 960px) {
    min-height: 500px;
    width: 350px;
  }
  @media screen and (max-width: 768px) {
    min-height: 700px;
    width: 500px;
  }
`;

export const ImgContainer = styled.div`
  max-width: 200px;
  height: 250px;
  transition: all 0.3s ease;

  @media screen and (max-width: 960px) {
    height: 500px;
    max-width: 350px;
  }
  @media screen and (max-width: 768px) {
    height: 700px;
    max-width: 500px;
  }
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
`;

export const Header = styled.h3`
  text-align: center;
  margin-bottom: 0.5rem;
`;
