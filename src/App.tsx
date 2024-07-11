import "./index.css";
import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import FeaturesSection from "./components/FeaturesSection";
import WorkFlow from "./components/Workflow";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <NavBar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <HeroSection />
      </div>
      <div className="pt-10">
        <FeaturesSection />
      </div>
      <div className="pt-10">
        <WorkFlow />
      </div>

      <Pricing />
      <Testimonials />
      <Footer />
    </>
  );
}

export default App;
