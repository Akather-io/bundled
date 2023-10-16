import { useFormContext } from "react-hook-form";
import JudgmentGroup from "../JudgmentGroup";
import { ProviderFormValues } from "@/app/provider/page";

const Step1 = () => {
  const { register } = useFormContext<ProviderFormValues>();
  return (
    <div className="space-y-3">
      <div>
        <label htmlFor="general-information" className="block text-xl font-bold text-white">
          General Information
        </label>
        <div className="mt-2">
          <div className="flex rounded-md bg-white/5 ring-1 ring-inset ring-white/10 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500">
            <input
              type="text"
              className="flex-1 border-0 bg-transparent py-2.5 pl-2 text-white focus:ring-0 !text-xl sm:text-sm sm:leading-6"
              placeholder="Type name (Ex: The FOMO Strategy,...)"
              {...register("name")}
            />
          </div>
        </div>
        <div className="mt-2">
          <textarea
            id="desc"
            disabled
            rows={3}
            className="block disabled:cursor-not-allowed !text-xl w-full rounded-md border-0 bg-white/5 py-2.5 pl-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
            defaultValue={""}
            placeholder="Type description... "
            {...register("desc")}
          />
        </div>
      </div>
      <div className="md:w-2/6">
        <label htmlFor="expiration" className="block text-xl font-bold text-white">
          Choose your product Expiration
        </label>
        <div className="mt-2">
          <div className="flex rounded-md bg-white/5 ring-1 ring-inset ring-white/10 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500">
            <input
              type="date"
              lang="en"
              id="expiration"
              className="flex-1 border-0 !text-xl bg-transparent py-2.5 pl-2 text-white focus:ring-0 sm:text-sm sm:leading-6 w-16"
              {...register("expiration")}
            />
          </div>
        </div>
      </div>
      <div className="space-y-3 py-5">
        <label htmlFor="general-information" className="block text-xl font-bold text-white mb-5">
          Self judgment
        </label>
        <JudgmentGroup name="probability" />
        <JudgmentGroup name="return" />
        <JudgmentGroup name="cost" />
      </div>
      <div className="space-y-3 py-5">
        <label htmlFor="general-information" className="block text-xl font-bold text-white mb-5">
          Subscription fee:
        </label>
        <div className="flex items-center">
          <div className="flex w-1/5 text-xl">Subscription fee:</div>
          <div className="flex rounded-md bg-white/5 ring-1 ring-inset ring-white/10 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500">
            <input
              type="text"
              className="flex-1 w-32 h-14 text-center border-0 bg-transparent py-2.5 pl-2 text-white focus:ring-0 sm:text-sm sm:leading-6 !text-xl"
              placeholder="Type subscription fee"
              {...register("subscriptionFee")}
            />
          </div>
          <div className="ml-4 text-[#FDFDFD] text-xl">USDT</div>
        </div>
        <div className="flex items-center">
          <div className="flex w-1/5 text-xl">Subscription fee:</div>
          <div className="flex rounded-md bg-white/5 ring-1 ring-inset ring-white/10 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500">
            <input
              type="text"
              className="flex-1 w-32 h-14 text-center border-0 bg-transparent py-2.5 pl-2 text-white focus:ring-0 sm:text-sm sm:leading-6 !text-xl"
              placeholder="Type sharing percentage"
              {...register("sharing")}
            />
          </div>
          <div className="ml-4 text-[#FDFDFD] text-xl">%</div>
        </div>
      </div>
    </div>
  );
};

export default Step1;
