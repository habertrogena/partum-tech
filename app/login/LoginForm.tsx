"use client";

import React, { useState } from "react";

import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Link from "next/link";
import { AiOutlineGoogle } from "react-icons/ai";
import { Button, Heading, Input } from "../components";

export function LoginForm() {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);
    console.log(data);
  };
  
  return (
    <>
      <Heading title="Login  Form" />
      <Button
        outlined
        onClick={() => {}}
        label="Continue With Google"
        icon={AiOutlineGoogle}
      />
      <hr className="bg-slate-300 w-full h-px" />

      <Input
        id="email"
        label="Email"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id="password"
        label="Password"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
        type="password"
      />
      <Button
        label={isLoading ? "loarding" : "Login"}
        onClick={handleSubmit(onSubmit)}
      />
      <p className="text-sm">
        Dont have an account?
        <Link className="underline" href="/register">
          Sign Up
        </Link>
      </p>
    </>
  );
}
