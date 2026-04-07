"use client";
import { useState } from "react";
import { FirstStep } from "./components/FirstStep";
import { SecondStep } from "./components/SecondStep";
import { ThirdStep } from "./components/ThirdStep";
import { FourthStep } from "./components/FourthStep";

export default function Home() {
  const [step, setStep] = useState(1);

  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
    birthday: "",
    image: "",
  });
  const [errors, setErrors] = useState({
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  });
  const steps = [FirstStep, SecondStep, ThirdStep, FourthStep];
  const StepForm = steps[step];

  const handleNextStep = () => {
    setStep(step + 1);
  };
  const handlePrevStep = () => {
    setStep(step - 1);
  };

  return (
    <div className="w-full h-screen flex justify-center items-center bg-[#f4f4f4] font-sans flex-col">
      <div className="w-120 min-h-[655px] bg-white rounded-lg p-8 ">
        <StepForm
          errors={errors}
          setErrors={setErrors}
          form={form}
          setForm={setForm}
          handleNextStep={handleNextStep}
          handlePrevStep={handlePrevStep}
        />
      </div>
    </div>
  );
}
