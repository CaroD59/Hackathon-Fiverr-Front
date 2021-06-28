import styled from 'styled-components';

const SCards = styled.div`
  .cards {
    margin-left: 40px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }
  .card {
    background-color: #ff80ae;
    color: white;
    width: 25vw;
    height: 60vh;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }
  .card1 {
    background-color: #d0e500;
    color: white;
    width: 25vw;
    height: 60vh;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }

  .card2 {
    background-color: #ff7640;
    color: white;
    width: 25vw;
    height: 60vh;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }

  h1 {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
      Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
      'Segoe UI Symbol';
    font-size: 21px;
  }

  img {
    width: 70%;
    height: 55%;
    border-radius: 10px;
  }
`;
export default SCards;
