import { Main, FormWrapper, Input, Button } from "./Form.styles";

const Form = () => {
  return (
    <Main>
      <FormWrapper>
        <Input placeholder="Enter the wallet's address..." />
        <Input placeholder="Enter the amount..." />
        <Button>Submit</Button>
      </FormWrapper>
    </Main>
  );
};

export default Form;
