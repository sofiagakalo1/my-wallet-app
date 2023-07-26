import { useState } from "react";
import { ethers } from "ethers";
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Header from "./components/Header/Header";
import Form from "./components/Form/Form";
import Footer from "./components/Footer/Footer";

function App() {
  const [walletAddress, setWalletAddress] = useState();
  const [fullWalletAddress, setFullWalletAddress] = useState();
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
        setFullWalletAddress(address);

        const weiAmount = await provider.getBalance(address);

        const etherAmount = ethers.formatUnits(weiAmount, 18);
        const formattedBalance = parseFloat(etherAmount).toFixed(3);
        setWalletBalance(formattedBalance);
      } catch (error) {
        toast.error("User denied account access or other error occurred");
      } finally {
        setLoading(false);
      }
    } else {
      toast.error("MetaMask not detected");
    }
  };

  const sendEthereum = async (receiverAddress, tokenAmount) => {
    const weiValue = ethers.parseEther(tokenAmount);
    const hexValue = weiValue.toString(16);

    window.ethereum
      .request({
        method: "eth_sendTransaction",
        params: [
          {
            from: fullWalletAddress,
            to: receiverAddress,
            value: hexValue,
          },
        ],
      })
      .then((result) => {
        console.log("result", result);
      })
      .catch((error) => {
        toast.error(error.message);
      });
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
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </>
  );
}

export default App;
