import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
      <h1 className="text-4xl sm:text-5xl lg:text-7xl text-center tracking-wide">
        DeweHoist build tools{" "}
        <span className="bg-gradient-to-r from-orange-500 to-orange-500 text-transparent bg-clip-text">
          for developers
        </span>
      </h1>
      <p className="text-sm md:text-md lg:text-lg text-center tracking-normal text-neutral-500 mt-10 max-w-4xl">
        Empower your creativity with our tools and services. Get started today
        and turn your imagination into immersive reality!
      </p>
      <div className="flex justify-center my-10 gap-5">
        <a
          href="#"
          className="flex flex-row bg-gradient-to-r from-orange-500 to-orange-800 py-1 px-2 rounded-md text-sm lg:text-lg"
        >
          Start for free
        </a>
        <a
          href="#"
          className="py-1 px-2 border rounded-md text-sm text-center align-baseline lg:text-lg"
        >
          Documentation
        </a>
      </div>
      <div className="flex flex-col lg:flex-row gap-5 p-5 w-full justify-center items-center ">
        <video
          className="rounded-md border border-orange-700 w-full lg:w-1/2 shadow-orange my-2"
          autoPlay
          muted
          loop
        >
          <source src={video1} type="video/mp4" />
        </video>
        <video
          className="rounded-md border border-orange-700 w-full lg:w-1/2 shadow-orange my-2"
          autoPlay
          muted
          loop
        >
          <source src={video2} type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default HeroSection;
