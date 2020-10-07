import styled from "styled-components";

export const Container = styled.div`
  max-width: 1300px;
  padding: 2rem;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  background-image: url('https://images.pexels.com/photos/4009401/pexels-photo-4009401.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260');
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
`;

export const Header = styled.header`
  min-height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid lightblue;
  background-color: rgba(0,0,0,1);
  color: white;
`;

export const ScoreBoard = styled.section`
  padding: 0.75rem;
  font-size: 1.5rem;
  border-radius: 4px;
  background-color: transparent;
`;

export const Score = styled.p`
  margin-bottom: 4px;
`;
