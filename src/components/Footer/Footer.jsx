import GithubLogo from "../../assets/github.png";
import { FooterWrapper, Button } from "./Footer.styles.js";

const Footer = () => {
  return (
    <FooterWrapper>
      <p>Repository &#8594;</p>
      <Button href="https://github.com/sofiagakalo1/my-wallet-app">
        <img src={GithubLogo} alt="Github logo" />
      </Button>
    </FooterWrapper>
  );
};

export default Footer;
