import { CheckCircle2 } from "lucide-react";
import codeImg from "../assets/code.jpg";
import { checklistItems } from "../constants";

const Workflow = () => {
  return (
    <div className="my-10">
      <h2 className="text-3xl md:text-4xl lg:text-5xl text-center ">
        Accelerate your{" "}
        <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text tracking-wide">
          {"   "}
          coding workflow
        </span>
      </h2>
      <div className="flex flex-wrap w-full justify-center text-center mt-10">
        <div className="w-full lg:w-1/2 p-2">
          <img src={codeImg} alt="code Image" />
        </div>
        <div className="w-full lg:w-1/2 p-2 text-center justify-center">
          {checklistItems.map((checkListItem: any, index: any) => {
            return (
              <div key={index} className="mb-12 mt-4 flex">
                <div className="text-green-400 mx-6 bg-neutral-900 h-10 w-3 p-2 justify-center items-center rounded-full">
                  <CheckCircle2 />
                </div>
                <div className="text-start">
                  <div className="mt-1 mb-2 text-xl">{checkListItem.title}</div>
                  <p className="text-md text-neutral-500 text-wrap">
                    {checkListItem.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Workflow;
