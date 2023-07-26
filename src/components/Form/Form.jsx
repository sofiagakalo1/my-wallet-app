import { useState } from "react";
import PropTypes from "prop-types";
import {
  isValidEthereumAddress,
  isValidTokenAmount,
} from "../../utils/formatFunctions";
import Loader from "../Loader/Loader";
import { Main, FormWrapper, Input, Button } from "./Form.styles";

const Form = ({ onFormSubmit, loading }) => {
  const [receiverAddress, setReceiverAddress] = useState("");
  const [tokenAmount, setTokenAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isValidTokenAmount(tokenAmount)) {
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
        <Button type="submit">{loading ? <Loader /> : "Send"}</Button>
      </FormWrapper>
    </Main>
  );
};

Form.propTypes = {
  onFormSubmit: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default Form;
