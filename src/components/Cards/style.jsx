import styled from 'styled-components';

const SCards = styled.div`
  background-color: #f0f4ff;
  .cards {
    margin-left: 40px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }
  .card {
    /* background-color: #ff80ae; */
    background-color: white;
    -webkit-box-shadow: 5px 3px 5px 6px rgba(183, 183, 183, 0.4);
    box-shadow: 5px 3px 5px 6px rgba(183, 183, 183, 0.4);
    color: white;
    width: 22vw;
    height: 70vh;
    border-radius: 21px;
    color: #ff80ae;
    font-size: 18px;
    font-weight: 700;
    color: #404145;
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    cursor: pointer;
  }

  .tech {
    font-weight: 100;
    color: #62646a;
  }

  .icon {
    width: 50px;
  }

  h1 {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
      Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
      'Segoe UI Symbol';
    font-size: 21px;
    color: #62646a;
    font-weight: 400;
  }

  img {
    width: 43%;
    border-radius: 90px;
    margin-top: 23px;
  }
`;
export default SCards;
