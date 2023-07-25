import PropTypes from "prop-types";
import {
  Container,
  LogoWrapper,
  LogoSpan,
  Img,
  ConnectButton,
  DataList,
} from "./Header.styles";
import Logo from "../../../public/wallet.svg";
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
      <LogoWrapper>
        <LogoSpan>My wallet</LogoSpan>
        <Img src={Logo} alt="Logo" />
      </LogoWrapper>
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
