import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
const Hero = () => {
  return (
    <div name="home" className="h-screen w-full bg-primary pt-16">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col justify-center h-full"
        >
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I'm a Tanmay <br />
            <TypeAnimation
              sequence={[
                "Java Developer .",
                1000,
                "Data Analyst .",
                1000,
                "React Developer .",
                1000,
                "Full Stack Engineer .",
                1000,
              ]}
              wrapper="span"
              speed={40}
              className="text-accent"
              repeat={Infinity}
            />
          </h2>
          <p className="text-gray-400 py-4 max-w-md">
            I specialize in building robust Java backends and sleek React
            frontends. Let's build scalable industry-level solutions together.
          </p>
          <div>
            <button className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer hover:scale-105 duration-300">
              View Work
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
