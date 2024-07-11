import { pricingOptions } from "../constants";
import { CheckCircle2 } from "lucide-react";

const Pricing = () => {
  return (
    <div className="flex flex-col justify-center m-8 text-center tracking-wider">
      <h2 className="text-5xl">Pricing</h2>
      <div className="flex flex-wrap tracking-wide mt-10 justify-center gap-10">
        {pricingOptions.map((pricingOption) => {
          return (
            <div className="border border-neutral-700 rounded-md bg-neutral-900 text-start p-5  w-full md:w-1/3 lg:w-1/4">
              <div className="text-xl lg:text-3xl mb-5">
                {pricingOption.title}
                {pricingOption.title === "Pro" && (
                  <span className="text-base bg-gradient-to-r from-orange-500 to-red-400 text-transparent bg-clip-text">
                    {" "}
                    (Most Popular)
                  </span>
                )}
              </div>
              <div className="text-lg lg:text-2xl mb-3">
                {pricingOption.price}{" "}
                <span className="text-neutral-500 text-sm lg:text-md">
                  /month
                </span>
              </div>
              <div>
                <div>
                  {pricingOption.features.map((feature) => {
                    return (
                      <div className="flex flex-row my-8 text-sm">
                        <div>
                          <CheckCircle2 />
                        </div>
                        <div className="ms-2">{feature}</div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="mt-16">
                <button className="border border-orange-800 rounded-md hover:bg-orange-800 py-2 bg-neutral-800 w-full transition duration-15  0 tracking-tight">
                  Subscribe
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Pricing;
