import { useFormContext } from "react-hook-form";

import { ProviderFormValues } from "@/app/provider/page";

const Step2 = () => {
  const { register } = useFormContext<ProviderFormValues>();
  return (
    <div className="space-y-3">
      <div>
        <label className="block text-xl font-bold text-white">
          Structured financial product component
        </label>
        <div className="mt-4 flex gap-x-4">
          <div className="w-1/5">
            <label className="block text-xl font-bold text-white border-l-[6px] border-[#655BFF] pl-2.5">
              Add crypto currency
            </label>
            <div className="mt-4">
              <select
                id="country"
                name="country"
                autoComplete="country-name"
                className="block w-32 !text-xl h-14 bg-white/5 rounded-md border-0 py-2.5 pl-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus-within:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
              >
                <option>BTC</option>
              </select>
            </div>
          </div>
          <div className="w-1/5">
            <label className="block text-xl font-bold text-white border-l-[6px] border-[#655BFF] pl-2.5">
              Weighted <span className="font-medium">(all sections)</span>
            </label>
            <div className="mt-4">
              <div className="flex rounded-md bg-white/5 ring-1 ring-inset ring-white/10 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500">
                <input
                  type="text"
                  className="flex-1 w-24 h-14 text-center border-0 bg-transparent py-2.5 pl-2 text-white focus:ring-0 sm:text-sm sm:leading-6 !text-xl"
                  placeholder="Ex: 100%"
                  {...register("weighted")}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <table className="w-full">
          <thead className="font-bold border-b border-[#AAA5FD]">
            <tr>
              <th></th>
              <th className="py-6">Strike price</th>
              <th>
                Options price
                <br />
                <span className="font-medium">(premium)</span>
              </th>
              <th>Portion</th>
            </tr>
          </thead>
          <tbody className="">
            <tr>
              <td className="text-xl font-bold py-6">Long Call</td>
              <td className="">
                <div className="flex rounded-md bg-white/5 ring-1 ring-inset ring-white/10 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500">
                  <input
                    type="text"
                    className="flex-1 w-12 h-14 text-center border-0 bg-transparent py-2.5 pl-2 text-white focus:ring-0 sm:text-sm sm:leading-6 !text-xl"
                    placeholder="Type subscription fee"
                    {...register("subscriptionFee")}
                  />
                </div>
              </td>
              <td />
              <td>
                <div className="flex rounded-md bg-white/5 ring-1 ring-inset ring-white/10 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500">
                  <input
                    type="text"
                    className="flex-1 w-12 h-14 text-center border-0 bg-transparent py-2.5 pl-2 text-white focus:ring-0 sm:text-sm sm:leading-6 !text-xl"
                    placeholder="Type subscription fee"
                    {...register("subscriptionFee")}
                  />
                </div>
              </td>
            </tr>
            <tr>
              <td className="text-xl font-bold py-6">Short Call</td>
              <td>
                <div className="flex rounded-md bg-white/5 ring-1 ring-inset ring-white/10 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500">
                  <input
                    type="text"
                    className="flex-1 w-12 h-14 text-center border-0 bg-transparent py-2.5 pl-2 text-white focus:ring-0 sm:text-sm sm:leading-6 !text-xl"
                    placeholder="Type subscription fee"
                    {...register("subscriptionFee")}
                  />
                </div>
              </td>
              <td />
              <td>
                <div className="flex rounded-md bg-white/5 ring-1 ring-inset ring-white/10 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500">
                  <input
                    type="text"
                    className="flex-1 w-12 h-14 text-center border-0 bg-transparent py-2.5 pl-2 text-white focus:ring-0 sm:text-sm sm:leading-6 !text-xl"
                    placeholder="Type subscription fee"
                    {...register("subscriptionFee")}
                  />
                </div>
              </td>
            </tr>
            <tr>
              <td className="text-xl font-bold py-6">Long Put</td>
              <td>
                <div className="flex rounded-md bg-white/5 ring-1 ring-inset ring-white/10 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500">
                  <input
                    type="text"
                    className="flex-1 w-12 h-14 text-center border-0 bg-transparent py-2.5 pl-2 text-white focus:ring-0 sm:text-sm sm:leading-6 !text-xl"
                    placeholder="Type subscription fee"
                    {...register("subscriptionFee")}
                  />
                </div>
              </td>
              <td />
              <td>
                <div className="flex rounded-md bg-white/5 ring-1 ring-inset ring-white/10 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500">
                  <input
                    type="text"
                    className="flex-1 w-12 h-14 text-center border-0 bg-transparent py-2.5 pl-2 text-white focus:ring-0 sm:text-sm sm:leading-6 !text-xl"
                    placeholder="Type subscription fee"
                    {...register("subscriptionFee")}
                  />
                </div>
              </td>
            </tr>
            <tr>
              <td className="text-xl font-bold py-6">Short Put</td>
              <td>
                <div className="flex rounded-md bg-white/5 ring-1 ring-inset ring-white/10 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500">
                  <input
                    type="text"
                    className="flex-1 w-12 h-14 text-center border-0 bg-transparent py-2.5 pl-2 text-white focus:ring-0 sm:text-sm sm:leading-6 !text-xl"
                    placeholder="Type subscription fee"
                    {...register("subscriptionFee")}
                  />
                </div>
              </td>
              <td />
              <td>
                <div className="flex rounded-md bg-white/5 ring-1 ring-inset ring-white/10 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500">
                  <input
                    type="text"
                    className="flex-1 w-12 h-14 text-center border-0 bg-transparent py-2.5 pl-2 text-white focus:ring-0 sm:text-sm sm:leading-6 !text-xl"
                    placeholder="Type subscription fee"
                    {...register("subscriptionFee")}
                  />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Step2;
