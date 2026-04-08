import { useState } from "react";
import { Logo } from "./Logo";
import { TextField } from "./TextField";
import { Button } from "./Button";

export const SecondStep = ({
  handleNextStep,
  handlePrevStep,
  form,
  setForm,
  errors,
  setErrors,
}) => {
  const isEmailValid = (value) => {
    if (!value || value.trim() === "") return "Email address is required";
    if (!/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(value))
      return "Please provide a valid email address.";
    return "";
  };
  const isPhoneNumberValid = (value) => {
    if (value.trim() === "") return "Phone number is required.";
    if (value.length !== 8) return "Phone number must be exactly 8 digits";
    if (!/^[0-9]+$/.test(value))
      return "Phone number must contain only digits.";
    return "";
  };
  const isPasswordValid = (value) => {
    if (!value || value.trim() === "") return "Password is required.";
    if (value.length < 8) return "Password must be at least 8 characters long.";
    if (!/[a-zA-Z]/.test(value))
      return "Password must include at least one letter.";
    if (!/[0-9]/.test(value))
      return "Password must include at least one number.";

    if (!/[!@#$%^&*]/.test(value))
      return "Password must include at least one special character.";
    return "";
  };

  const isConfirmPasswordValid = (value) => {
    if (!value || value.trim() === "") return "Please confirm your password.";
    if (value !== form.password)
      return "Passwords do not match. Please try again.";
    return "";
  };

  const handleNextClick = () => {
    const emailErr = isEmailValid(form.email) || "";
    const phoneErr = isPhoneNumberValid(form.phoneNumber) || "";
    const passErr = isPasswordValid(form.password) || "";
    const confirmpassErr = isConfirmPasswordValid(form.confirmPassword) || "";

    setErrors({
      email: emailErr,
      phoneNumber: phoneErr,
      password: passErr,
      confirmPassword: confirmpassErr,
    });
    if (!emailErr && !phoneErr && !passErr && !confirmpassErr) {
      handleNextStep();
    }
  };
  return (
    <div className="flex flex-col h-full">
      <div className="space-y-4 flex flex-col h-full justify-between">
        <div className="space-y-2">
          <Logo />
          <h1 className="font-semibold text-2xl text-[#202124]">Join Us! 😎</h1>
          <p className="text-lg text-[#8E8E8E]">
            Please provide all current information accurately.
          </p>

          <TextField
            value={form.email}
            onChange={(e) => {
              setForm({ ...form, email: e.target.value });
              setErrors({ ...errors, email: isEmailValid(e.target.value) });
            }}
            error={form.email ? isEmailValid(form.email) : ""}
            required={true}
            label="Email"
            placeholder="john.doe@gmail.com"
          />
          <TextField
            value={form.phoneNumber}
            onChange={(e) => {
              const val = setForm({ ...form, phoneNumber: e.target.value });
              setErrors({
                ...errors,
                phoneNumber: isPhoneNumberValid(e.target.value),
              });
            }}
            error={errors.phoneNumber}
            required={true}
            label="Phone number"
            placeholder="88888888"
          />
          <TextField
            value={form.password}
            onChange={(e) => {
              setForm({ ...form, password: e.target.value });
              setErrors({
                ...errors,
                password: isPasswordValid(e.target.value),
              });
            }}
            error={errors.password}
            required={true}
            label="Password"
            type="password"
            placeholder="********"
          />
          <TextField
            value={form.confirmPassword}
            onChange={(e) => {
              setForm({ ...form, confirmPassword: e.target.value });
              setErrors({
                ...errors,
                confirmPassword: isConfirmPasswordValid(e.target.value),
              });
            }}
            error={errors.confirmPassword}
            required={true}
            label="Confirm password"
            type="password"
            placeholder="********"
          />
        </div>
        <div className="flex gap-2">
          <Button
            onClick={handlePrevStep}
            className="w-32 h-11 py-2.5 px-3 flex items-center justify-center gap-1 border border-[#CBD5E1] bg-white text-black"
          >
            <img src="./chevron_left.svg" alt="" className="w-6 h-6" /> Back
          </Button>
          <Button
            onClick={handleNextClick}
            className="w-70 h-11 py-2.5 px-3 flex items-center justify-center gap-1 bg-[#202124] text-white"
          >
            Continue 2/3{" "}
            <img src="./chevron_right.svg" alt="" className="w-6 h-6" />
          </Button>
        </div>
      </div>
    </div>
  );
};
