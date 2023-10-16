"use client";
import Button from "@/components/Button";
import Container from "@/components/Container";
import Step1 from "@/components/provider/Step-1";
import Step2 from "@/components/provider/Step-2";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";

export type ProviderFormValues = {
  name: string;
  desc: string;
  expiration: string;
  probability: number;
  return: number;
  cost: number;
  subscriptionFee: number;
  sharing: number;
  weighted: number;
  currency: string;

  shortCallPrice: number;
  longCallPrice: number;
  shortPutPrice: number;
  longPutPrice: number;

  shortCallPortion: number;
  longCallPortion: number;
  shortPutPortion: number;
  longPutPortion: number;
};

const ProviderPage = () => {
  const [step, setStep] = useState<1 | 2>(1);
  const methods = useForm<ProviderFormValues>({
    defaultValues: {
      name: "",
      desc: "",
      expiration: "2023-09-13",
      probability: 0,
      return: 2,
      cost: 0,
      subscriptionFee: 100,
      sharing: 5,
      weighted: 100,
      currency: "BTC",
    },
  });

  const back = () => {
    if (step === 2) {
      setStep(1);
      return;
    }
  };

  const onSubmit = (data: ProviderFormValues) => {
    if (step === 1) {
      setStep(2);
      return;
    }
    console.log(data);
  };

  const buttonTitle = step === 1 ? "Next" : "Confirm";

  return (
    <Container>
      <FormProvider {...methods}>
        <form className="space-y-12" onSubmit={methods.handleSubmit(onSubmit)}>
          <div className="text-center">
            <h2 className="text-xl font-bold leading-7">Customized Strategy</h2>
            <p className="mt-1 text-xl leading-6 text-indigo-500">
              Design your own structured financial product
            </p>
          </div>
          {step === 1 && <Step1 />}
          {step === 2 && <Step2 />}
          <div className="text-center space-x-4">
            {step === 2 && (
              <Button type="button" className="!text-black !bg-gray-100" onClick={back}>
                Previous
              </Button>
            )}
            <Button type="submit">{buttonTitle}</Button>
          </div>
        </form>
      </FormProvider>
    </Container>
  );
};

export default ProviderPage;
