import { useState } from "react";
import { Logo } from "./Logo";
import { TextField } from "./TextField";
import { Button } from "./Button";

export const FirstStep = ({
  handleNextStep,
  form,
  setForm,
  errors,
  setErrors,
}) => {
  const isFirstNameValid = (value) => {
    if (value === "") return "First name cannot be empty...";
    if (!/^[A-Z][a-z]+$/.test(value))
      return "First name cannot contain special characters or numbers.";
  };
  const isLastNameValid = (value) => {
    if (value === "") return "First name cannot be empty...";
    if (!/^[A-Z][a-z]+$/.test(form.lastname))
      return "Last name cannot contain special characters or numbers.";
  };
  const isUsernameValid = (value) => {
    if (value === "") return "First name cannot be empty...";
    if (!/^[a-z0-9-_.]+$/.test(form.username))
      return "Username can only contain lowercase letters and digits only.";
  };

  const isHavingError = () => {
    return (
      isFirstNameValid(form.firstname) || isLastNameValid() || isUsernameValid()
    );
  };

  return (
    <div className="flex flex-col  h-full">
      <div className="space-y-4 flex flex-col h-full justify-between">
        <div className=" space-y-2">
          <Logo />
          <h1 className="font-semibold text-2xl text-[#202124] ">
            Join Us! 😎
          </h1>
          <p className="text-lg text-[#8E8E8E]">
            Please provide all current information accurately.
          </p>

          <TextField
            value={form.firstname}
            onChange={(e) => {
              setForm({ ...form, firstname: e.target.value });
              setErrors({
                ...errors,
                firstname: isFirstNameValid(e.target.value),
              });
            }}
            error={errors.firstname}
            required={true}
            label="First name"
            placeholder="John..."
          />
          <TextField
            value={form.lastname}
            onChange={(e) => {
              setForm({ ...form, lastname: e.target.value });
              setErrors({
                ...errors,
                lastname: isLastNameValid(e.target.value),
              });
            }}
            error={isLastNameValid()}
            required={true}
            label="Last name"
            placeholder="Doe..."
          />
          <TextField
            value={form.username}
            onChange={(e) => {
              setForm({ ...form, username: e.target.value });
              setErrors({
                ...errors,
                username: isUsernameValid(e.target.value),
              });
            }}
            error={isUsernameValid()}
            required={true}
            label="Username"
            placeholder="john_doe123..."
          />
        </div>

        <Button
          onClick={handleNextStep}
          disabled={isHavingError()}
          className="w-full h-11 py-2.5 px-3 flex items-center justify-center gap-1 bg-[#202124] text-white"
        >
          Continue 2/3{" "}
          <img src="./chevron_right.svg" alt="" className="w-6 h-6" />
        </Button>
      </div>
    </div>
  );
};
