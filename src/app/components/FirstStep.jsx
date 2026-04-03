import { useState } from "react";
import { Logo } from "./Logo";
import { TextField } from "./TextField";
import { Button } from "./Button";

export const FirstStep = ({ handleNextStep, form, setForm }) => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [username, setUsername] = useState("");
  const [errors, setErrors] = useState({
    firstnameError: "",
    lastnameError: "",
    usernameError: "",
  });

  const isFirstNameValid = () => {
    if (form.firstname.trim === "") return "First name cannot be empty...";
    if (!/^[A-Z][a-z]+$/.test(form.firstname))
      return setErrors({
        ...errors,
        firstnameError:
          "First name cannot contain special characters or numbers.",
      });
    return "";
  };
  const isLastNameValid = () => {
    if (form.lastname.trim === "")
      return setErrors({
        ...errors,
        lastnameError: "First name cannot be empty...",
      });
    if (!/^[A-Z][a-z]+$/.test(form.lastname))
      return setErrors({
        ...errors,
        lastnameError:
          "Last name cannot contain special characters or numbers.",
      });
  };
  const isUsernameValid = () => {
    if (form.username.trim === "")
      return setErrors("First name cannot be empty...");
    if (!/^[a-z0-9-_.]+$/.test(form.username))
      return setErrors({
        ...errors,
        usernameError:
          "Username can only contain lowercase letters and digits only.",
      });
  };

  const isHavingError = () => {
    return isFirstNameValid() || isLastNameValid() || isUsernameValid();
  };

  const handleFirsNameBlur = () => {
    isFirstNameValid();
  };
  const handleLastNameBlur = () => {
    isLastNameValid();
  };
  const handleUserNameBlur = () => {
    isUsernameValid();
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
          value={firstname}
          onChange={(e) => {
            setFirstname(e.target.value);
          }}
          error={errors.isFirstNameValid}
          required={true}
          label="First name"
          placeholder="John..."
        />
        <TextField
          value={lastname}
          onChange={(e) => {
            setLastname(e.target.value);
          }}
          // error={isLastNameValid()}
          required={true}
          label="Last name"
          placeholder="Doe..."
        />
        <TextField
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          // error={isUsernameValid()}
          required={true}
          label="Username"
          placeholder="john_doe123..."
        />
      </div>
      <div className="flex gap-4 my-10">
        <Button onClick={handleNextStep} disabled={isHavingError()}>
          Continue 1/3
        </Button>
      </div>
    </div>
  );
};
