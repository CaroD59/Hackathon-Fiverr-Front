import StyledFooter from './style';

function Footer() {
  return (
    <StyledFooter>
      <div className="contact">
        <div className="bloc">
          <h1>CONTACT US</h1>
        </div>
      </div>
      <div className="infos">
        <a
          href="https://fr.fiverr.com/support/articles/360010393757-Conditions-dutilisation-des-services-sponsorises?segment=seller"
          target="_blank"
          rel="noreferrer"
          className="link"
        >
          General Conditions of Use
        </a>
        <a
          href="https://fr.fiverr.com/privacy-policy"
          target="_blank"
          rel="noreferrer"
          className="link"
        >
          Personal Data Charter
        </a>
        <h3>©2021 The Walking Dev ALL RIGHTS RESERVED</h3>
      </div>
    </StyledFooter>
  );
}
export default Footer;
