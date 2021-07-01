import styled from 'styled-components';

const SComments = styled.div`
  .CommentPart {
    border-radius: 30px;
    margin-bottom: 20px;
    padding: 30px;
    color: black;
    background-color: #003912;
    width: 50%;
    margin-left: auto;
    margin-right: auto;
    h1,
    h2 {
      color: white;
      width: 20vw;
      padding: 15px;
      padding-left: 15px;
      border-width: 0px 0px 3px 2px;
      border-style: solid;
      border-color: white;
      border-radius: 30px;
    }
    .Message {
      margin-top: 20px;
      color: white;
      .Author {
        font-weight: bold;
      }
      .Msg {
        margin-top: 5px;
      }
    }
    .Inputs {
      .AuthorInput {
        margin-bottom: 20px;
        input {
          border-radius: 10px;
          width: 10vw;
          height: 3vh;
        }
      }
      .ContentInput {
        margin-bottom: 20px;
        textarea {
          width: 50vw;
          height: 10vh;
          border-radius: 10px;
          border: none;
          font-family: arial;
          font-size: 15px;
        }
        textarea::placeholder {
          color: grey;
          font-family: arial;
          text-align: center;
        }
        input::placeholder {
          color: grey;
          text-align: center;
        }
      }
      .Submit {
        input {
          border-radius: 10px;
          width: 5vw;
          height: 4vh;
          cursor: pointer;
          font-weight: bold;
        }
      }
    }
  }
`;

export default SComments;
