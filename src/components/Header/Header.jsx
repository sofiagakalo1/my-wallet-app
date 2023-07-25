import PropTypes from "prop-types";
import { Container, Img, ConnectButton, DataList } from "./Header.styles";
import Logo from "../../assets/logo.svg";
import Loader from "../Loader/Loader";

const Header = ({ loading, walletAddress, walletBalance, connectWallet }) => {
  let buttonLabel;
  if (loading) {
    buttonLabel = <Loader />;
  } else if (walletAddress && walletBalance) {
    buttonLabel = (
      <DataList>
        <li>{walletBalance}</li>
        <li>{walletAddress}</li>
      </DataList>
    );
  } else {
    buttonLabel = "Connect wallet";
  }

  return (
    <Container>
      <Img src={Logo} alt="Logo" />
      <ConnectButton onClick={() => connectWallet()}>
        {buttonLabel}
      </ConnectButton>
    </Container>
  );
};

Header.propTypes = {
  loading: PropTypes.bool.isRequired,
  walletAddress: PropTypes.string,
  walletBalance: PropTypes.string,
  connectWallet: PropTypes.func.isRequired,
};

export default Header;
