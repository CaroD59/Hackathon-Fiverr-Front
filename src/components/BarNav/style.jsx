import styled from 'styled-components';

const SBarNav = styled.div`
  .BarNa {
    height: 10vh;
    background-color: #003912;
    color: white;
    margin-bottom: 5vh;
  }

  ul {
    padding-top: 27px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    text-decoration: none;
    margin: 0px;
  }

  li {
    display: inline-flex;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
      Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
      'Segoe UI Symbol';
    color: white;
  }
`;

export default SBarNav;
