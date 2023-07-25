import { useState } from "react";
import { ethers } from "ethers";
import { Container, Img, ConnectButton, DataList } from "./Header.styles";
import Logo from "../../assets/logo.svg";
import Loader from "../Loader/Loader";

const Header = () => {
  const [walletAddress, setWalletAddress] = useState();
  const [walletBalance, setWalletBalance] = useState();
  const [loading, setLoading] = useState(false);

  const formatAddress = (address) => {
    const start = address.slice(0, 4);
    const end = address.slice(-4);
    return `${start}...${end}`;
  };

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        setLoading(true);

        await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        const provider = new ethers.BrowserProvider(window.ethereum);
        const [address] = await provider.send("eth_requestAccounts", []);
        const formattedAddress = formatAddress(address);
        setWalletAddress(formattedAddress);
        // console.log("Wallet Address:", address);
        const weiAmount = await provider.getBalance(address);
        // console.log("Balance (Wei):", weiAmount.toString());
        const etherAmount = ethers.formatUnits(weiAmount, 18);
        const formattedBalance = parseFloat(etherAmount).toFixed(3);
        // console.log("Balance (Ether):", formattedBalance);
        setWalletBalance(formattedBalance);
      } catch (error) {
        console.error(
          "User denied account access or other error occurred:",
          error
        );
      } finally {
        setLoading(false);
      }
    } else {
      console.error("MetaMask not detected");
    }
  };

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
      <ConnectButton onClick={connectWallet}>{buttonLabel}</ConnectButton>
    </Container>
  );
};

export default Header;
