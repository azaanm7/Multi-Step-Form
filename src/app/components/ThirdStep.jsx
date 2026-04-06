import { useState } from "react";
import { Logo } from "./Logo";
import { TextField } from "./TextField";
import { Button } from "./Button";
import { ImageField } from "./ImageField";

export const ThirdStep = ({
  handleNextStep,
  handlePrevStep,
  form,
  setForm,
}) => {
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
          label="Birthday"
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
          label="Profile Image"
        />
      </div>

      <div className="flex gap-4 my-10">
        <Button onClick={handlePrevStep}>Back</Button>
        <Button onClick={handleNextStep}>Continue 1/3</Button>
      </div>
    </div>
  );
};
