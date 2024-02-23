import React from "react";
import { Container } from "../components";
import { CartClient } from "./CartClient";

export default function Cart() {
  return (
    <div className="pt-8">
      <Container>
        <CartClient />
      </Container>
    </div>
  );
}
