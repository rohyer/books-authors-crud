import styled from "styled-components";
import { useForm } from "react-hook-form";
import { addAuthor } from "../services/indexedDB";
import { useState } from "react";

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

const MessageSuccess = styled.p`
  font-family: "Open Sans", sans-serif;
  font-size: 16px;
  font-weight: 500;
  font-style: normal;
  text-align: center;
  color: #00aa00;
  margin: 10px 0px 0px;
`;

const MessageError = styled.p`
  font-family: "Open Sans", sans-serif;
  font-size: 16px;
  font-weight: 500;
  font-style: normal;
  text-align: center;
  color: #ff0000;
  margin: 10px 0px 0px;
`;

const SubmitButton = styled.button`
  font-family: "Montserrat", sans-serif;
  font-size: 12px;
  font-weight: 600;
  font-style: normal;
  color: #fff;
  background-color: #0073d0cc;
  margin-top: 15px;
  transition: all 0.3s;
  &:hover {
    background-color: #0073d0ff;
  }
`;

const FormAuthor = ({ onAddData }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();

  const [submitSuccess, setSubmitSuccess] = useState("");
  const [submitError, setSubmitError] = useState("");

  const onSubmit = async (data) => {
    setSubmitSuccess("");
    setSubmitError("");

    try {
      const newAuthor = await addAuthor(data);

      setSubmitSuccess("Autor cadastrado com sucesso!");
      onAddData(newAuthor);
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

      <SubmitButton
        onClick={handleClick}
        type="submit"
        style={{ padding: "10px 20px", fontSize: "16px" }}
      >
        Cadastrar
      </SubmitButton>

      {submitSuccess && <MessageSuccess>{submitSuccess}</MessageSuccess>}
      {submitError && <MessageError>{submitError}</MessageError>}
    </Form>
  );
};

export default FormAuthor;
