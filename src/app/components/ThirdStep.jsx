import { useState } from "react";
import { Logo } from "./Logo";
import { TextField } from "./TextField";
import { Button } from "./Button";
import { ImageField } from "./ImageField";

export const ThirdStep = ({ handlePrevStep }) => {
  return (
    <div className="space-y-4">
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
            }
          }}
          onCancel={() => {
            setForm({ ...form, image: "" });
          }}
          required={true}
          label="Profile image"
        />
      </div>

      <div className="flex gap-2 my-10">
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
  );
};
