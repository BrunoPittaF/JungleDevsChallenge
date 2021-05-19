import LogoFooter from "../../images/svg/LogoFooter.svg";
import Icon from "../../images/svg/Icon.svg";
import Facebook from "../../images/svg/Facebook.svg";
import Twitter from "../../images/svg/Twitter.svg";
import Instagram from "../../images/svg/Instagram.svg";

import { Container, Retangle, FooterPage } from "./style";

function Footer() {
  return (
    <Container>
      <h2>Become a nanny share host</h2>
      <p>Takes less than 5 minutes to get started</p>
      <Retangle>
        <img src={Icon} alt="" />
        <div className="wrapper">
          <p className="titleRetangle">Create Your Nanny Share</p>
          <p>Takes less than 5 minutes</p>
        </div>
      </Retangle>

      <a href="#asda">Or browse local nanny-shares</a>

      <FooterPage>
        <img src={LogoFooter} alt="" />

        <ul className="footer-list">
          <li>
            <h5>Share Your Nanny</h5>
          </li>
          <li>
            <h5>Our Story</h5>
          </li>
          <li>
            <h5>Blog</h5>
          </li>
          <li>
            <h5>Terms & Privacy</h5>
          </li>
        </ul>

        <div className="icons">
          <img src={Facebook} alt="" />
          <img src={Twitter} alt="" />
          <img src={Instagram} alt="" />
        </div>
      </FooterPage>

      <span>Copyright © 2017 Hapu PTY Limited All rights reserved</span>
    </Container>
  );
}

export default Footer;
