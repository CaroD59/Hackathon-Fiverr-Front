import styled from 'styled-components';

const ProjectStyle = styled.div`
  .BlocTitle {
    display: flex;
    justify-content: center;
    .Title {
      text-align: center;
      border-radius: 8px;
      width: 20vw;
      border: solid 1px #c2bcb2;
      h2 {
        color: #615959;
      }
    }
  }
  a {
    text-decoration: none;
  }
  .Projects {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    .Project {
      padding: 20px;
      margin: 0;
      background-color: white;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      border-radius: 8px;
      border: solid 1px #c2bcb2;
      width: 390px;
      margin-top: 20px;
      margin-left: 20px;
      margin-right: 20px;
      margin-bottom: 100px;
      :hover {
        transform: scale(1.02);
        cursor: pointer;
        box-shadow: 10px 11px 20px -16px rgba(0, 0, 0, 0.75);
        -webkit-box-shadow: 10px 11px 20px -16px rgba(0, 0, 0, 0.75);
        -moz-box-shadow: 10px 11px 20px -16px rgba(0, 0, 0, 0.75);
      }
      .ImageSize {
        border-radius: 8px;
        background-size: cover;
        max-width: 100%;
      }
      .Name {
        text-align: center;
        font-weight: bold;
        color: grey;
      }
      .Description {
        margin-top: 10px;
        margin-bottom: 20px;
        color: grey;
        font-style: italic;
        text-align: justify;
      }
    }
  }
`;

export default ProjectStyle;
