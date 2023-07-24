import { Main, FormWrapper, Input, Button } from "./Form.styles";

const Form = () => {
  return (
    <Main>
      <FormWrapper>
        <Input placeholder="wallet's address..." />
        <Input placeholder="the amount..." />
        <Button>Submit</Button>
      </FormWrapper>
    </Main>
  );
};

export default Form;
