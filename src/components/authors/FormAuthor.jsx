import styled from "styled-components";
import { useForm } from "react-hook-form";
import { addAuthor } from "../../services/indexedDB";
import { AuthorsBooksContext } from "../../contexts/AuthorsBooksContext";
import { useContext, useState } from "react";
import SubmitButton from "../common/SubmitButton";
import FormMessageSuccess from "../common/FormMessageSuccess";
import FormMessageError from "../common/FormMessageError";

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  font-family: "Open Sans", sans-serif;
  font-size: 16px;
  font-weight: 500;
  font-style: normal;
  color: #333;
  background-color: #fff;
  height: 40px;
  border: 1px solid #aaa;
  border-radius: 3px;
  padding: 0px 10px;
  margin-top: 15px;
  transition: all 0.3s;
  &:focus {
    background-color: #ddd;
  }
`;

const InputError = styled.p`
  font-family: "Open Sans", sans-serif;
  font-size: 14px;
  font-weight: 500;
  font-style: normal;
  color: #ff0000;
  margin: 5px 0px 0px;
`;

const FormAuthor = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();

  const { addAuthorToState } = useContext(AuthorsBooksContext);
  const [submitSuccess, setSubmitSuccess] = useState("");
  const [submitError, setSubmitError] = useState("");

  const onSubmit = async (data) => {
    setSubmitSuccess("");
    setSubmitError("");

    try {
      const newAuthor = await addAuthor(data);

      setSubmitSuccess("Autor cadastrado com sucesso!");
      addAuthorToState(newAuthor);
      reset();
    } catch (error) {
      setSubmitError(error);
    }
  };

  const handleClick = () => {
    setSubmitSuccess("");
    setSubmitError("");
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Input
        {...register("name", { required: "Campo obrigatório" })}
        placeholder="Nome"
        type="text"
      />
      {errors.name && <InputError>{errors.name.message}</InputError>}

      <Input {...register("email")} placeholder="E-mail" type="email" />

      <SubmitButton onClick={handleClick} />

      {submitSuccess && <FormMessageSuccess title={submitSuccess} />}
      {submitError && <FormMessageError title={submitError} />}
    </Form>
  );
};

export default FormAuthor;
