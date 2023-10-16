import Button from "../Button";

const StrategyList = () => {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-xl font-bold leading-7">Suitable Strategies</h2>
        <p className="mt-1 text-xl leading-6 text-indigo-500">Choose your strategy</p>
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
              <th className="font-bold py-6 text-center">Strategy fee (premium price)</th>
              <th className="font-bold py-6">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#E2E2E2]">
            {[1, 2].map((item) => (
              <tr key={item}>
                <td className="text-xs font-bold">Gotbit</td>
                <td className="text-xs font-bold">The FOMO Strategy</td>
                <td className="py-6">
                  <div className="space-y-2 gap-x-4">
                    <div className="border border-white py-2 px-3 text-[10px] rounded-md font-bold">
                      high cost
                    </div>
                    <div className="border border-white py-2 px-3 text-[10px] rounded-md font-bold">
                      high probability
                    </div>
                    <div className="border border-[#EBFF02] text-[#EBFF02] rounded-md py-2 px-3 text-[10px] font-bold">
                      Low return
                    </div>
                  </div>
                </td>
                <td className="text-xs font-bold text-center">100 USDT</td>
                <td className="text-xs font-bold text-center">5%</td>
                <td className="text-xs font-bold text-center">1200 USDT</td>
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
