import {
  ContainerHeader,
  NavigationHeader,
  Register,
  Wrapper,
  Content,
} from "./style";
import logo from "../../images/svg/Badge.svg";
import PlayButton from "../../images/svg/PlayButton.svg";
import imageHeader from "../../images/imageHeader.png";

function Header() {
  return (
    <ContainerHeader>
      <header>
        <NavigationHeader>
          <img src={logo} alt="Smile Icon" title="Logo React Challenger 001" />

          <li>
            <h5>
              <a href="#a">Create Your Nanny Share</a>
            </h5>
          </li>

          <li>
            <h5>
              <a href="#b">Browse Shares</a>
            </h5>
          </li>

          <li>
            <h5>
              <a href="#c">Our Story</a>
            </h5>
          </li>
        </NavigationHeader>

        <Register>
          <button>Become a Nanny Share Host</button>

          <h5>Sign In</h5>
        </Register>
      </header>

      <Content>
        <Wrapper>
          <h1>Easily create or join a local nanny share with Hapu</h1>

          <p>
            Hapu is Airbnb for nanny share. Share your home, nanny and costs and
            create new flexible, affordable solutions in childcare.
          </p>

          <div className="playDiv">
            <img
              src={PlayButton}
              alt="Play button Icon"
              title="Icon Button for play action"
            />
            <a href="#a">See hapu in action (27 seconds)</a>
          </div>
        </Wrapper>

        <picture>
          <source media="(min-width: 1024px)" srcSet={imageHeader} />
          <img
            src={imageHeader}
            alt="Nanny Share Manage Congratulations"
            title="Contact Success"
          />
        </picture>
      </Content>
    </ContainerHeader>
  );
}

export default Header;
