const StrategyFilter = () => {
  return (
    <form>
      <div className="space-y-12">
        <div className="border-b border-white/10 pb-12">
          <div className="mt-10 space-y-10">
            <div className="sm:col-span-3">
              <label
                htmlFor="country"
                className="block text-sm font-medium leading-6 text-white "
              >
                1. Which crypto curency you are holding?
              </label>
              <div className="mt-2">
                <select
                  id="country"
                  name="country"
                  autoComplete="country-name"
                  className="block w-full bg-white/5 rounded-md border-0 py-2.5 pl-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus-within:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option>BTC</option>
                  <option>ETH</option>
                </select>
              </div>
            </div>
            <fieldset>
              <legend className="text-sm font-semibold leading-6 text-white">
                2. What is your view about the market?
              </legend>

              <div className="mt-6 space-y-6">
                <div className="flex items-center gap-x-3">
                  <input
                    id="push-everything"
                    name="push-notifications"
                    type="radio"
                    className="h-4 w-4 border-white/10 bg-white/5 text-indigo-600 focus:ring-indigo-600 focus:ring-offset-gray-900"
                  />
                  <label
                    htmlFor="push-everything"
                    className="block text-sm font-medium leading-6 text-white"
                  >
                    Optimistic
                  </label>
                </div>
                <div className="flex items-center gap-x-3">
                  <input
                    id="push-email"
                    name="push-notifications"
                    type="radio"
                    className="h-4 w-4 border-white/10 bg-white/5 text-indigo-600 focus:ring-indigo-600 focus:ring-offset-gray-900"
                  />
                  <label
                    htmlFor="push-email"
                    className="block text-sm font-medium leading-6 text-white"
                  >
                    Pessimistic
                  </label>
                </div>
              </div>
            </fieldset>
            <fieldset>
              <legend className="text-sm font-semibold leading-6 text-white">
                3. What is your investment management approach?
              </legend>

              <div className="mt-6 space-y-6">
                <div className="flex items-center gap-x-3">
                  <input
                    id="push-everything"
                    name="push-notifications"
                    type="radio"
                    className="h-4 w-4 border-white/10 bg-white/5 text-indigo-600 focus:ring-indigo-600 focus:ring-offset-gray-900"
                  />
                  <label
                    htmlFor="push-everything"
                    className="block text-sm font-medium leading-6 text-white"
                  >
                    Aggresive
                  </label>
                </div>
                <div className="flex items-center gap-x-3">
                  <input
                    id="push-email"
                    name="push-notifications"
                    type="radio"
                    className="h-4 w-4 border-white/10 bg-white/5 text-indigo-600 focus:ring-indigo-600 focus:ring-offset-gray-900"
                  />
                  <label
                    htmlFor="push-email"
                    className="block text-sm font-medium leading-6 text-white"
                  >
                    Conservative
                  </label>
                </div>
              </div>
            </fieldset>
            <fieldset>
              <legend className="text-sm font-semibold leading-6 text-white">
                4. What is your preference toward risk control approach?
              </legend>

              <div className="mt-6 space-y-6">
                <div className="flex items-center gap-x-3">
                  <input
                    id="push-everything"
                    name="push-notifications"
                    type="radio"
                    className="h-4 w-4 border-white/10 bg-white/5 text-indigo-600 focus:ring-indigo-600 focus:ring-offset-gray-900"
                  />
                  <label
                    htmlFor="push-everything"
                    className="block text-sm font-medium leading-6 text-white"
                  >
                    Neutral
                  </label>
                </div>
                <div className="flex items-center gap-x-3">
                  <input
                    id="push-email"
                    name="push-notifications"
                    type="radio"
                    className="h-4 w-4 border-white/10 bg-white/5 text-indigo-600 focus:ring-indigo-600 focus:ring-offset-gray-900"
                  />
                  <label
                    htmlFor="push-email"
                    className="block text-sm font-medium leading-6 text-white"
                  >
                    Low
                  </label>
                </div>
                <div className="flex items-center gap-x-3">
                  <input
                    id="push-email"
                    name="push-notifications"
                    type="radio"
                    className="h-4 w-4 border-white/10 bg-white/5 text-indigo-600 focus:ring-indigo-600 focus:ring-offset-gray-900"
                  />
                  <label
                    htmlFor="push-email"
                    className="block text-sm font-medium leading-6 text-white"
                  >
                    High
                  </label>
                </div>
              </div>
            </fieldset>
          </div>
        </div>
      </div>
    </form>
  );
};

export default StrategyFilter;
