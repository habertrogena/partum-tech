import React from "react";

import { LoginForm } from "./LoginForm";
import { Container, FormWrapper } from "../components";


export  default function Login() {
  return (
    <Container>
      <FormWrapper>
        <LoginForm />
      </FormWrapper>
    </Container>
  );
}
