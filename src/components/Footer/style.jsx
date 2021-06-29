import styled from 'styled-components';

const StyledFooter = styled.div`
  .contact {
    display: flex;
    background-size: cover;
    font-size: 1vw;
  }

  .bloc {
    background-color: #003912;
    width: 100vw;
    height: 7vh;

    .Link {
      text-decoration: none;
      color: #000000;
    }
  }

  .bloc h1 {
    text-align: left;
    margin-left: 30px;
    font-weight: bold;
    font-size: 35px;
    color: #f5f7f7;
  }

  .infos {
    text-align: center;
    justify-content: space-around;
    background-color: #003912;
    color: white;
    font-size: 1.4vh;
  }

  .link {
    color: #f5f7f7;
    margin-right: 7%;
  }

  h3 {
    display: inline;
  }

  @media (max-width: 700px) {
    .bloc h1 {
      font-size: x-small;
    }
    .bloc p {
      font-size: x-small;
    }
    .infos {
      font-size: 1.1vh;
    }
    .link {
      margin-right: 10%;
    }

    .bloc {
      font-size: y-small;
    }
    .contact {
      font-size: y-small;
    }
  }
`;

export default StyledFooter;
