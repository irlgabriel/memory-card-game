import styled from "styled-components";

export const Container = styled.div`
  max-width: 1300px;
  padding: 2rem;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
`;

export const Header = styled.header`
  height: 80px;
  display: flex;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid black;
  background-color: rgba(140, 0, 30, 0.2);
`;

export const ScoreBoard = styled.section`
  padding: 0.75rem;
  border: 1px solid black;
  border-radius: 4px;
  background-color: transparent;
`;

export const Score = styled.p`
  margin-bottom: 4px;
`;
