"use client";
import { useEffect, useState } from "react";
import { FirstStep } from "./components/FirstStep";
import { SecondStep } from "./components/SecondStep";
import { ThirdStep } from "./components/ThirdStep";
import { FourthStep } from "./components/FourthStep";

export default function Home() {
  const [step, setStep] = useState(0);

  const [form, setForm] = useState(null);
  const [errors, setErrors] = useState({
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  });

  useEffect(() => {
    if (form !== null) {
      localStorage.setItem("form", JSON.stringify(form));
    } else {
      const storedForm = JSON.parse(localStorage.getItem("form"));
      if (storedForm) {
        setForm(storedForm);
      } else {
        setForm({
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
      }
    }
  }, [form]);

  const steps = [FirstStep, SecondStep, ThirdStep, FourthStep];
  const StepForm = steps[step];

  const handleNextStep = () => {
    setStep(step + 1);
  };
  const handlePrevStep = () => {
    setStep(step - 1);
  };

  if (!form) return null;
  return (
    <div className="w-full h-screen flex pt-[182px] items-center bg-[#f4f4f4] font-sans flex-col">
      {step === 3 ? (
        <div className="w-120 h-fit bg-white rounded-lg p-8 shadow-xl">
          <FourthStep />
        </div>
      ) : (
        <div className="w-120 min-h-[655px] bg-white rounded-lg p-8 shadow-xl">
          <StepForm
            errors={errors}
            setErrors={setErrors}
            form={form}
            setForm={setForm}
            handleNextStep={handleNextStep}
            handlePrevStep={handlePrevStep}
          />
        </div>
      )}
    </div>
  );
}
