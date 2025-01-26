import { Facebook, Instagram, Linkedin } from "lucide-react";
import Container from "../shared/Container";
import { Link, NavLink } from "react-router";

const Footer = () => {
  return (
    <Container>
      <footer className="bg-blue-950 rounded-xl w-full p-6 lg:p-9">
        <div className="flex justify-between gap-[30px] flex-wrap w-full">
          <div className="lg:w-[25%]">
            <NavLink to="/">
              <h3 className="text-white text-2xl font-semibold mb-2">
                Doodle<span className="text-cPrimary">. SS</span>
              </h3>
            </NavLink>
            <div className="flex flex-col gap-[8px] text-white">
              <a href="tel:+8801755288840">+8801755288840</a>
              <a href="mailto:foyshalbinamir@gmail.com">
                foyshalbinamir@gmail.com
              </a>
              <p>Rangpur, Bangladesh</p>
            </div>
          </div>

          <div className="lg:w-[45%]">
            <h3 className="text-[1.2rem] font-semibold text-white mb-2">
              Pages
            </h3>
            <div className="flex gap-3 text-white flex-wrap">
              <Link to="/">Home</Link>
              <Link to="/products">Products</Link>
              <Link to="/profile">Profile</Link>
              <Link to="/about-us">About Us</Link>
            </div>
          </div>

          <div className="lg:w-[20%]">
            <h3 className="text-[1.2rem] font-semibold text-white mb-2">
              Get in touch
            </h3>
            <div className="flex gap-[7px] text-white">
              <a className="text-[1.3rem] p-1.5 cursor-pointer rounded-full hover:bg-blue-400">
                <Facebook color="white" />
              </a>
              <a className="text-[1.2rem] p-1.5 cursor-pointer rounded-full hover:bg-blue-400">
                <Instagram color="white" />
              </a>
              <a className="text-[1.2rem] p-1.5 cursor-pointer rounded-full hover:bg-blue-400">
                <Linkedin color="white" />
              </a>
            </div>
          </div>
        </div>

        <div className="sm:flex-row flex-col flex sm:items-center gap-[15px] w-full justify-center mt-8">
          <a className="text-gray-400 cursor-pointer text-[0.8rem]">
            Terms of purchase
          </a>
          <a className="text-gray-400 cursor-pointer text-[0.8rem]">
            Security and privacy
          </a>
          <a className="text-gray-400 cursor-pointer text-[0.8rem]">
            Newsletter
          </a>
        </div>
      </footer>
    </Container>
  );
};

export default Footer;
