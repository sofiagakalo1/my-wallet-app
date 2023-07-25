import { useState } from "react";
import PropTypes from "prop-types";
import { Main, FormWrapper, Input, Button } from "./Form.styles";

const Form = ({ onFormSubmit }) => {
  const [receiverAddress, setReceiverAddress] = useState("");
  const [tokenAmount, setTokenAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!tokenAmount || isNaN(parseFloat(tokenAmount))) {
      console.error('Invalid token amount:', tokenAmount);
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
