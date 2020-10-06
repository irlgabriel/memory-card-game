import styled from "styled-components";

export const CardContainer = styled.div`
  padding: 1rem;
  margin: 0.75rem;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  background: pink;
  min-height: 250px;
  width: 200px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.02);
  }
`;

export const ImgContainer = styled.div`
  max-width: 200px;
  height: 250px;
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
`;

export const Header = styled.h3`
  text-align: center;
  margin-bottom: 0.5rem;
`;
