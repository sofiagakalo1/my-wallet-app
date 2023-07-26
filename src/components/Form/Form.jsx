import { useState } from "react";
// import { ethers } from "ethers";
import { toast } from 'react-toastify';
import PropTypes from "prop-types";
import { Main, FormWrapper, Input, Button } from "./Form.styles";

const Form = ({ onFormSubmit }) => {
  const [receiverAddress, setReceiverAddress] = useState("");
  const [tokenAmount, setTokenAmount] = useState("");

  const isValidEthereumAddress = (address) => {
    const regex = /^(0x)?[0-9a-fA-F]{40}$/;
    if (!regex.test(address)) {
      return false;
    }
    // const cleanAddress = address.replace("0x", "");
    // const hash = ethers.keccak256(cleanAddress.toLowerCase());
    // for (let i = 0; i < 40; i++) {
    //   const char = cleanAddress[i];
    //   const hashDigit = parseInt(hash[i], 16);
    //   if (
    //     (char >= "0" && char <= "9" && hashDigit >= 8) ||
    //     (char >= "a" && char <= "f" && hashDigit >= 8)
    //   ) {
    //     return false;
    //   }
    // }

    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!tokenAmount || isNaN(parseFloat(tokenAmount))) {
      toast.error(`Invalid token amount:${tokenAmount}`);
      return;
    }
    if (!isValidEthereumAddress(receiverAddress)) {
      toast.error(`Address should start with "0x" and have 40 hexadecimal characters (0-9, A-F). It should be 42 characters long in total, including "0x". For example: "0x1a5B9d19C4adBf8C37A59521F2821AaC8E1c11bA".`);
      return;
    }
    onFormSubmit(receiverAddress, tokenAmount);
    setReceiverAddress("");
    setTokenAmount("");
  };

  return (
    <Main>
      <FormWrapper onSubmit={handleSubmit}>
        <Input
          value={receiverAddress}
          onChange={(e) => setReceiverAddress(e.target.value)}
          placeholder="Receiver's address..."
        />
        <Input
          value={tokenAmount}
          onChange={(e) => setTokenAmount(e.target.value)}
          placeholder="Token amount..."
        />
        <Button type="submit">Send</Button>
      </FormWrapper>
    </Main>
  );
};

Form.propTypes = {
  onFormSubmit: PropTypes.func.isRequired,
};

export default Form;
