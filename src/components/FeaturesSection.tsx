import { features } from "../constants";

const FeaturesSection = () => {
  return (
    <div className="flex flex-col justify-center text-center ">
      <h2 className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text pb-10 bg-neutral-900">
        FEATURE
      </h2>
      <h1 className="text-2xl sm:text-5xl lg:text-7xl text-center tracking-wide pb-8 ">
        Easily build
        <span className="bg-gradient-to-r from-orange-500 to-orange-500 text-transparent bg-clip-text">
          {" "}
          your code
        </span>
      </h1>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-center justify-center pt-10 px-5 ">
        {features.map((feature, index) => {
          return (
            <div
              key={index}
              className="flex flex-row justify-center text-center px-2 lg:px-16 bg-neutral-900 p-4"
            >
              <div className="flex flex-col text-center justify-start">
                <p className="mr-3 text-orange-500 bg-neutral-800 p-2 rounded-full">
                  {feature.icon}
                </p>
              </div>
              <div>
                <div className="flex flex-col text-start ms-2">
                  <h2 className="pb-4 tracking-wider">{feature.text}</h2>
                  <p className="text-neutral-500 w-full">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FeaturesSection;
