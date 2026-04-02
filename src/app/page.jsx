"use client";
import { useState } from "react";
import { FirstStep } from "./components/FirstStep";
import { SecondStep } from "./components/SecondStep";

export default function Home() {
  const [step, setStep] = useState(0);
  const steps = [FirstStep, SecondStep];

  const handleNextStep = () => {
    setStep(step + 1);
  };
  const handlePrevStep = () => {
    setStep(step - 1);
  };

  const StepForm = steps[step];
  return (
    <div className="w-full h-screen flex justify-center items-center bg-[#f4f4f4]">
      <StepForm
        handleNextStep={handleNextStep}
        handlePrevStep={handlePrevStep}
      />
    </div>
  );
}
