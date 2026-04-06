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
  const isLastNameValid = () => {
    if (form.lastname.trim() === "") return "First name cannot be empty...";
    if (!/^[A-Z][a-z]+$/.test(form.lastname))
      return "Last name cannot contain special characters or numbers.";
  };
  const isUsernameValid = () => {
    if (form.username.trim() === "") return "First name cannot be empty...";
    if (!/^[a-z0-9-_.]+$/.test(form.username))
      return "Username can only contain lowercase letters and digits only.";
  };

  const isHavingError = () => {
    return (
      isFirstNameValid(form.firstname) || isLastNameValid() || isUsernameValid()
    );
  };

  const handleFirstNameBlur = () => {
    isFirstNameValid();
  };
  const handleLastNameBlur = () => {
    isLastNameValid();
  };
  const handleUserNameBlur = () => {
    isUsernameValid();
  };

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Logo />
        <h1 className="font-semibold text-2xl text-[#202124] ">Join Us! 😎</h1>
        <p className="text-lg text-[#8E8E8E]">
          Please provide all current information accurately.
        </p>

        <TextField
          value={form.firstname}
          onChange={(e) => {
            setErrors({
              ...errors,
              firstname: isFirstNameValid(e.target.value),
            });
            setForm({ ...form, firstname: e.target.value });
          }}
          error={errors.firstname}
          onBlur={handleFirstNameBlur(form.firstname)}
          required={true}
          label="First name"
          placeholder="John..."
        />
        <TextField
          value={form.lastname}
          onChange={(e) => {
            setForm({ ...form, lastname: e.target.value });
          }}
          error={isLastNameValid()}
          onBlur={handleLastNameBlur(form.lastname)}
          required={true}
          label="Last name"
          placeholder="Doe..."
        />
        <TextField
          value={form.username}
          onChange={(e) => {
            setForm({ ...form, username: e.target.value });
          }}
          error={isUsernameValid()}
          onBlur={handleUserNameBlur(form.username)}
          required={true}
          label="Username"
          placeholder="john_doe123..."
        />
      </div>
      <div className="flex gap-4 my-10">
        <Button
          className="text-base"
          onClick={handleNextStep}
          disabled={isHavingError()}
        >
          Continue 1/3 <img src="./chevron_right.svg" alt="" />
        </Button>
      </div>
    </div>
  );
};
