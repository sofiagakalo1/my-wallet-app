import { useState } from "react";
import { ethers } from "ethers";
import { toast } from "react-toastify";
import PropTypes from "prop-types";
import { Main, FormWrapper, Input, Button } from "./Form.styles";

const Form = ({ onFormSubmit }) => {
  const [receiverAddress, setReceiverAddress] = useState("");
  const [tokenAmount, setTokenAmount] = useState("");

  const isValidEthereumAddress = (address) => {
    const regex = /^(0x)?[0-9a-fA-F]{40}$/;
    if (!regex.test(address)) {
      toast.error(
        `Address should start with "0x" and have 40 hexadecimal characters (0-9, A-F). It should be 42 characters long in total, including "0x". For example: "0x1a5B9d19C4adBf8C37A59521F2821AaC8E1c11bA".`
      );
      return false;
    }

    try {
      const checksumAddress = ethers.getAddress(address);
      return checksumAddress === address;
    } catch (error) {
      toast.error("Wrong address!");
      return false;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!tokenAmount || isNaN(parseFloat(tokenAmount))) {
      toast.error(`Invalid token amount: ${tokenAmount}`);
      return;
    }
    if (!isValidEthereumAddress(receiverAddress)) {
      return;
    }
    onFormSubmit(receiverAddress, tokenAmount);
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
