import JudgmentGroup from "@/components/JudgmentGroup";

const ProviderPage = () => {
  return (
    <div>
      <div className="space-y-12">
        <div className="">
          <h2 className="text-base font-semibold leading-7">
            Customized Strategy
          </h2>
          <p className="mt-1 text-sm leading-6 text-indigo-500">
            Design your own structured financial product
          </p>
        </div>
        <div className="space-y-3">
          <div>
            <label
              htmlFor="general-information"
              className="block text-sm font-medium leading-6 text-white"
            >
              General Information
            </label>
            <div className="mt-2">
              <div className="flex rounded-md bg-white/5 ring-1 ring-inset ring-white/10 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500">
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="flex-1 border-0 bg-transparent py-2.5 pl-2 text-white focus:ring-0 sm:text-sm sm:leading-6"
                  placeholder="Type name (Ex: The FOMO Strategy,...)"
                />
              </div>
            </div>
            <div className="mt-2">
              <textarea
                id="desc"
                name="desc"
                rows={3}
                className="block w-full rounded-md border-0 bg-white/5 py-2.5 pl-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                defaultValue={""}
                placeholder="Type description... "
              />
            </div>
          </div>
          <div className="md:w-2/6">
            <label
              htmlFor="expiration"
              className="block text-sm font-medium leading-6 text-white"
            >
              Choose your product Expiration
            </label>
            <div className="mt-2">
              <div className="flex rounded-md bg-white/5 ring-1 ring-inset ring-white/10 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500">
                <input
                  type="date"
                  name="expiration"
                  id="expiration"
                  className="flex-1 border-0 bg-transparent py-2.5 pl-2 text-white focus:ring-0 sm:text-sm sm:leading-6 w-16"
                />
              </div>
            </div>
          </div>
          <div className="space-y-3">
            <label
              htmlFor="general-information"
              className="block text-sm font-medium leading-6 text-white"
            >
              Self judgment
            </label>
            <JudgmentGroup name="Probability" />
            <JudgmentGroup name="Return" />
            <JudgmentGroup name="Cost" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProviderPage;
