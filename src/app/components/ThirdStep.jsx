import { useState } from "react";
import { Logo } from "./Logo";
import { TextField } from "./TextField";
import { Button } from "./Button";
import { ImageField } from "./ImageField";

export const ThirdStep = ({
  handlePrevStep,
  handleNextStep,
  form,
  setForm,
  errors,
  setErrors,
}) => {
  const isBirthdayValid = (value) => {
    if (!value) return "Please select a date.";
    return "";
  };

  const isImageValid = (value) => {
    if (!value) return "Image cannot be blank.";
    return "";
  };

  const handleNextClick = () => {
    const birthErr = isBirthdayValid(form.birthday);
    const imageErr = isImageValid(form.image);

    setErrors({
      ...errors,
      birthday: birthErr,
      image: imageErr,
    });
    if (!birthErr && !imageErr) {
      handleNextStep();
    }
  };
  return (
    <div className="flex flex-col h-full">
      <div className="flex flex-col h-full justify-between">
        <div className="space-y-2">
          <Logo />
          <h1 className="font-semibold text-2xl text-[#202124]">Join Us! 😎</h1>
          <p className="text-lg text-[#8E8E8E]">
            Please provide all current information accurately.
          </p>

          <TextField
            value={form.birthday}
            onChange={(e) => {
              setForm({ ...form, birthday: e.target.value });
            }}
            error={errors.birthday}
            required={true}
            label="Date of birth"
            type="date"
          />
          <ImageField
            value={form.image}
            onChange={(e) => {
              const file = e.target.files[0];
              if (file) {
                const imageValue = URL.createObjectURL(file);
                setForm({ ...form, image: imageValue });
                setErrors({ ...errors, image: isImageValid(imageValue) });
              }
            }}
            onCancel={() => {
              setForm({ ...form, image: "" });
              setErrors({ ...errors, image: isImageValid("") });
            }}
            error={errors.image}
            required={true}
            label="Profile image"
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
            Continue 3/3{" "}
            <img src="./chevron_right.svg" alt="" className="w-6 h-6" />
          </Button>
        </div>
      </div>
    </div>
  );
};
