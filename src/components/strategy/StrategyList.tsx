"use client";
import useProviderPool from "@/hooks/useProviderPool";
import Button from "../Button";
import { BN } from "bn.js";

const StrategyList = () => {
  const { data } = useProviderPool();
  if (!data) return null;
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-xl font-bold leading-7">Suitable Strategies</h2>
        <p className="mt-1 text-xl leading-6 text-indigo-500">
          Choose your strategy
        </p>
      </div>
      <div>
        <table className="w-full divide-y divide-[#E2E2E2]">
          <thead>
            <tr>
              <th className="font-bold py-6 text-start">Entities</th>
              <th className="font-bold py-6 text-start">Name</th>
              <th className="font-bold py-6 text-start">Properties</th>
              <th className="font-bold py-6 text-center">Subscription fee</th>
              <th className="font-bold py-6 text-center">Profit sharing</th>
              <th className="font-bold py-6 text-center">
                Strategy fee (premium price)
              </th>
              <th className="font-bold py-6">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#E2E2E2]">
            {data.map((item, idx) => (
              <tr key={item.publicKey.toString()}>
                <td className="text-xs font-bold">Pool {idx + 1}</td>
                <td className="text-xs font-bold">The FOMO Strategy</td>
                <td className="py-6">
                  <div className="space-y-2 gap-x-4">
                    <div className="border border-white py-2 px-3 text-[10px] rounded-md font-bold">
                      {Object.keys(item.account.jCost)} cost
                    </div>
                    <div className="border border-white py-2 px-3 text-[10px] rounded-md font-bold">
                      {Object.keys(item.account.jProbability)} probability
                    </div>
                    <div className="border border-[#EBFF02] text-[#EBFF02] rounded-md py-2 px-3 text-[10px] font-bold">
                      {Object.keys(item.account.jReturn)} return
                    </div>
                  </div>
                </td>
                <td className="text-xs font-bold text-center">
                  {item.account.fee.toString()} USDC
                </td>
                <td className="text-xs font-bold text-center">
                  {item.account.share.div(new BN(100)).toString()}%
                </td>
                <td className="text-xs font-bold text-center">2610 USDT</td>
                <td className="text-xs font-bold space-y-2 text-center">
                  <Button className="!py-2 !px-4 block">Deposit</Button>
                  <br />
                  <Button className="!py-2 !px-4 block !bg-transparent border border-white">
                    Withdraw
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StrategyList;
