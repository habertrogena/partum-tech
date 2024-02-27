"use client";
import React from "react";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
interface InputProps {
  id: string;
  label: string;
  type?: string;
  disabled?: boolean;
  required?: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
}
export function Input({
  errors,
  id,
  label,
  register,
  disabled,
  required,
  type,
}: InputProps) {
  return (
    <div className="w-full relative">
      <input
        autoComplete="off"
        id={id}
        placeholder=""
        type={type}
        disabled={disabled}
        {...register(id, { required })}
        className={`peer w-full p-4 pt-6 outline-none bg-white font-light border-2 rounded-md transition disabled:opacity-70 disabled:cursor-not-allowed ${
          errors[id] ? "border-rose-500" : "border-slate-300"
        } ${errors[id] ? "focus:border-rose-500" : "focus:border-slate-300"}`}
      />
      <label
        className={`absolute cursor-text text-md duration-150 transform -translate-y-3 top-5 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-show:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 ${
          errors[id] ? "text-rose-500" : "text-slate-400"
        }`}
        htmlFor={id}
      >
        {label}
      </label>
    </div>
  );
}
