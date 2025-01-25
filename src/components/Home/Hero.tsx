import Container from "../shared/Container";
import { Button } from "../ui/button";
import "./Hero.css";
const Hero = () => {
  return (
    <Container>
      <div className="hero-banner h-full">
        <div className="h-[500px] mt-8 md:mt-10 lg:mt-12 flex justify-end items-center px-4 md:px-8 lg:px-12 bg-black lg:bg-transparent bg-opacity-40 rounded-[12px]">
          <div className="w-full lg:w-1/2 text-left lg:text-right text-white lg:text-black ">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-4">
              Your One-Stop Stationery Haven
            </h2>
            <p className="font-light mb-4 lg:opacity-80">
              From everyday essentials to creative tools, Soodle Stationery
              offers everything you need to write, create, and inspire. Shop
              quality products that spark joy and productivity
            </p>
            <Button className="bg-cPrimary">Explore Shop</Button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Hero;
