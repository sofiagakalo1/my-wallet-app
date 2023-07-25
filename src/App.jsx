import { useState } from "react";
import { ethers } from "ethers";

import Header from "./components/Header/Header";
import Form from "./components/Form/Form";
import Footer from "./components/Footer/Footer";

function App() {
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

        const weiAmount = await provider.getBalance(address);

        const etherAmount = ethers.formatUnits(weiAmount, 18);
        const formattedBalance = parseFloat(etherAmount).toFixed(3);
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

  const sendEthereum = async (receiverAddress, tokenAmount) => {
    try {
      await window.ethereum.request({
        method: "eth_sendTransaction",
        params: [
          {
            from: walletAddress,
            to: receiverAddress,
            value: ethers.parseEther(tokenAmount),
          },
        ],
      });
    } catch (error) {
      console.error("Error sending Ethereum:", error);
    }
  };

  return (
    <>
      <Header
        loading={loading}
        walletAddress={walletAddress}
        walletBalance={walletBalance}
        connectWallet={connectWallet}
      />
      <Form onFormSubmit={sendEthereum} />
      <Footer />
    </>
  );
}

export default App;
