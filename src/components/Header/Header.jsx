import { Container, Img, Button } from "./Header.styles";
import Logo from "../../assets/logo.svg";
const Header = () => {
  return (
    <Container>
      <Img src={Logo} alt="Logo" />
      <Button>Connect wallet</Button>
    </Container>
  );
};

export default Header;
