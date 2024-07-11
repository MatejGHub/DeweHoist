import { testimonials } from "../constants";

const Testimonials = () => {
  return (
    <div className="flex flex-col justify-center text-center my-10">
      <div className="flex flex-row text-center justify-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl my-10">
          {" "}
          What people are saying
        </h2>
      </div>
      <div className="flex flex-wrap justify-center gap-5 p-5 ">
        {testimonials.map((testimonial) => {
          return (
            <div className="w-full md:w-1/3 lg:w-1/4 bg-neutral-900 p-3 rounded-md">
              <div className="text-neutral-500 text-sm text-start mb-4">
                {testimonial.text}
              </div>
              <div className="flex flex-row justify-start">
                <img
                  className="rounded-full w-10 h-10 me-5 mt-1"
                  src={testimonial.image}
                />
                <div className="flex flex-col text-start">
                  <div className="text-neutral-500">{testimonial.user}</div>
                  <div className="text-neutral-700 text-sm">
                    {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Testimonials;
