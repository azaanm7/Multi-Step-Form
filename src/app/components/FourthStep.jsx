import { useState } from "react";
import { Logo } from "./Logo";
import { TextField } from "./TextField";
import { Button } from "./Button";
import { ImageField } from "./ImageField";

export const FourthStep = () => {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Logo />
        <h1 className="font-semibold text-2xl text-[#202124]">
          You're All Set 🔥
        </h1>
        <p className="text-lg text-[#8E8E8E]">
          We have received your submission. Thank you!
        </p>
      </div>
    </div>
  );
};
