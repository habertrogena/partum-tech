import React from "react";
import { Container, FormWrapper } from "../components";
import { RegisterForm } from "./RegisterForm";

export  default function Register() {
  return (
    <Container>
      <FormWrapper>
        <RegisterForm />
      </FormWrapper>
    </Container>
  );
}
