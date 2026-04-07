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
  const isEmailValid = () => {
    if (form.email === "") return "Email address is required";
    if (!/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(form.email))
      return "Please provide a valid email address.";
  };
  const isPhoneNumberValid = () => {
    if (form.phoneNumber.trim() === "") return "Phone number is required.";
    if (form.phoneNumber.length !== 8) {
      return "Phone number must be exactly 8 digits";
    }
    if (!/^[0-9]+$/.test(form.phoneNumber)) {
      return "Phone number must contain only digits.";
    }
  };
  const isPasswordValid = () => {
    if (form.password.trim() === "") return "Password is required.";
    if (form.password.length < 8)
      return "Password must be at least 8 characters long.";
    if (!/[a-zA-Z]/.test(form.password))
      return "Password must include at least one letter.";
    if (!/[0-9]/.test(form.password)) {
      return "Password must include at least one number.";
    }
    if (!/[!@#$%^&*]/.test(form.password)) {
      return "Password must include at least one special character.";
    }
  };

  const isConfirmPasswordValid = () => {
    if (form.confirmPassword.trim() === "")
      return "Please confirm your password.";
    if (form.confirmPassword !== form.password) {
      return "Passwords do not match. Please try again.";
    }
    return "";
  };

  const isHavingError = () => {
    return (
      isEmailValid() ||
      isPhoneNumberValid() ||
      isPasswordValid() ||
      isConfirmPasswordValid()
    );
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
            error={isEmailValid()}
            required={true}
            label="Email"
            placeholder="john.doe@gmail.com"
          />
          <TextField
            value={form.phoneNumber}
            onChange={(e) => {
              setForm({ ...form, phoneNumber: e.target.value });
              setErrors({
                ...errors,
                phoneNumber: isPhoneNumberValid(e.target.value),
              });
            }}
            error={isPhoneNumberValid()}
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
            error={isPasswordValid()}
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
            error={isConfirmPasswordValid()}
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
            onClick={handleNextStep}
            disabled={isHavingError()}
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
