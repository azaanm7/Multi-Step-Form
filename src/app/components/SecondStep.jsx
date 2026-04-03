import { useState } from "react";
import { Logo } from "./Logo";
import { TextField } from "./TextField";
import { Button } from "./Button";

export const SecondStep = ({ handleNextStep, handlePrevStep }) => {
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const isEmailValid = () => {
    if (email === "") return "Email address is required";
    if (!/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(email))
      return "Please provide a valid email address.";
  };
  const isPhoneNumberValid = () => {
    if (phoneNumber === "") return "Phone number is required.";
    if (!/^[0-9]+$/.test(phoneNumber))
      return "Phone number is must contain only digits.";
    if (!/^[A-Za-z-]+$/.test(phoneNumber))
      return "Phone number must contain only digits.";
  };
  const isPasswordValid = () => {
    if (password === "") return "Password is required.";
    if (password.length < 8)
      return "Password must be at least 8 characters long for your security.";
    if (!/^[a-z0-9-_.]+$/.test(password))
      return "Password should include at least one letter and one number.";
  };

  const isConfirmPasswordValid = () => {
    if (confirmPassword === "") return "Please confirm your password.";
    if (!/^[a-z0-9-_.]+$/.test(confirmPassword))
      return "Passwords do not match. Please try again.";
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
    <div className="w-120 min-h-[655px] bg-white rounded-lg p-8 ">
      <div className="space-y-2">
        <Logo />
        <h1 className="font-semibold text-2xl text-[#202124]">Join Us! 😎</h1>
        <p className="text-lg text-[#8E8E8E]">
          Please provide all current information accurately.
        </p>

        <TextField
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          error={isEmailValid()}
          required={true}
          label="Email"
          placeholder="john.doe@gmail.com"
        />
        <TextField
          value={phoneNumber}
          onChange={(e) => {
            setPhoneNumber(e.target.value);
          }}
          error={isPhoneNumberValid()}
          required={true}
          label="Phone number"
          placeholder="88888888"
        />
        <TextField
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          error={isPasswordValid()}
          required={true}
          label="Password"
          placeholder="@John123*"
        />
        <TextField
          value={confirmPassword}
          onChange={(e) => {
            setConfirmPassword(e.target.value);
          }}
          error={isConfirmPasswordValid()}
          required={true}
          label="Confirm password"
          placeholder="@John123*"
        />
      </div>
      <div className="flex gap-4 my-10">
        <Button onClick={handlePrevStep}>Back</Button>
        <Button onClick={handleNextStep} disabled={isHavingError()}>
          Continue 1/3
        </Button>
      </div>
    </div>
  );
};
