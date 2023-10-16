import Button from "@/components/Button";
import Container from "@/components/Container";
import Image from "next/image";

type PageProps = {
  params: {
    id: string;
  };
};

const StrategyPage: React.FC<PageProps> = ({ params: { id } }) => {
  return (
    <Container>
      <div>
        <div className="flex justify-between items-center">
          <h1 className="font-bold text-[40px] text-[#655BFF]">The FOMO strategy</h1>
          <div>
            <div className="border border-white py-2 px-4 rounded-lg flex items-center gap-x-2">
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="7" cy="7" r="7" fill="#D9D9D9" />
              </svg>
              <span>Preview</span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-x-20 mt-6">
          <span className="text-white text-[20px] font-bold">Provider</span>
          <Image src="/assets/gobit.png" height={34} width={161} alt="Gobit" />
        </div>
        <div className="flex items-center gap-x-6 mt-6">
          <span className="text-white text-[20px] font-bold">Expiration date</span>
          <Button className="!py-2" disabled>
            13/09/2023
          </Button>
        </div>
        <div className="flex gap-x-4 mt-8">
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

        <div className="mt-4 ">
          <div className="flex flex-col gap-2 text-xl font-bold uppercase">$ 26,000 Strike</div>
          <span className="text-[15px]">
            You are paying 0.0055 BTC for the right to buy 1 BTC for $26,000.00 by 13/09/2023. If
            BTC isn’t higher than $26,000.00, this option will expire worthless
          </span>
        </div>
        <div className="mt-8 flex gap-x-4 w-full">
          <div className="w-2/5 space-y-4 ">
            <div className="text-xl flex flex-col space-y-2">
              <span className="uppercase">Break even price at expiration</span>
              <span className="text-[#78A6FF]">$26,143.79</span>
            </div>
            <div className="text-xl flex flex-col space-y-2">
              <span className="uppercase">MAX PROFIT</span>
              <span className="text-[#38D900]">UNLIMITED BTC ($25,857.00)</span>
            </div>
            <div className="text-xl flex flex-col space-y-2">
              <span className="uppercase">MAX LOSS</span>
              <span className="text-[#FF0F00]">0.0055 BTC ($143.00)</span>
            </div>
            <div className="text-xl flex flex-col space-y-2">
              <span className="uppercase">Subscription fee</span>
              <span className="text-[#38D900]">0.0055 BTC ($143.00)</span>
            </div>
            <div className="text-xl flex flex-col space-y-2">
              <span className="uppercase">SHARING</span>
              <span className="text-[#38D900]">5%</span>
            </div>
          </div>
          <div className="w-full">
            <Image
              src="/assets/chart-demo.png"
              className="w-4/5"
              height={569}
              width={300}
              quality={100}
              alt="Chart"
            />
          </div>
        </div>
        <div className="flex items-center mt-8 justify-between">
          <div className="text-lg font-bold">Active: --</div>
          <div className="text-lg font-bold">Floating: --</div>
          <div className="text-lg font-bold">Net: --</div>
          <Button>Release</Button>
        </div>
      </div>
    </Container>
  );
};

export default StrategyPage;
