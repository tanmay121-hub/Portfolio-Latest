import { motion } from "framer-motion";

const About = () => {
  // Animation variants for staggered entrance
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  return (
    <div
      name="about"
      className="w-full min-h-screen bg-gradient-to-b from-gray-900 to-primary text-white pt-20"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="pb-8"
        >
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 hover:border-accent duration-300 cursor-default text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
            About Me
          </p>
          <p className="py-6 text-gray-300">
            A glimpse into my journey and technical philosophy.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-10 align-top"
        >
          {/* Left Column: The Narrative */}
          <div className="flex flex-col justify-center gap-6">
            <motion.p
              variants={itemVariants}
              className="text-xl text-gray-400 leading-relaxed"
            >
              I am a passionate developer who bridges the gap between{" "}
              <span className="text-white font-bold">
                robust backend architecture
              </span>{" "}
              and interactive frontend experiences. My journey began with a
              curiosity for how systems work, which evolved into a career
              building scalable applications.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-xl text-gray-400 leading-relaxed"
            >
              With a strong foundation in{" "}
              <span className="text-accent font-semibold">Java</span> and the{" "}
              <span className="text-accent font-semibold">
                Spring ecosystem
              </span>
              , I ensure data integrity and performance. On the client side, I
              leverage <span className="text-accent font-semibold">React</span>{" "}
              and Tailwind to create intuitive designs.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-xl text-gray-400 leading-relaxed"
            >
              My philosophy is simple: Build code that is{" "}
              <span className="text-white font-bold">
                clean, scalable, and solves real-world problems
              </span>
              .
            </motion.p>
          </div>

          {/* Right Column: Stats & Highlights Cards */}
          <div className="flex flex-col gap-6 justify-center">
            {/* Card 1 */}
            <motion.div
              variants={itemVariants}
              className="bg-gray-800/40 backdrop-blur-md p-6 rounded-lg border-l-4 border-cyan-500 hover:bg-gray-800/60 duration-300 shadow-lg"
            >
              <h3 className="text-2xl font-bold text-white mb-2">
                Full Stack Focus
              </h3>
              <p className="text-gray-400">
                Seamlessly integrating Java REST APIs with responsive React
                frontends to deliver complete solutions.
              </p>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              variants={itemVariants}
              className="bg-gray-800/40 backdrop-blur-md p-6 rounded-lg border-l-4 border-blue-500 hover:bg-gray-800/60 duration-300 shadow-lg"
            >
              <h3 className="text-2xl font-bold text-white mb-2">
                Problem Solver
              </h3>
              <p className="text-gray-400">
                I don't just write code; I analyze requirements, optimize
                algorithms, and debug complex system issues.
              </p>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              variants={itemVariants}
              className="bg-gray-800/40 backdrop-blur-md p-6 rounded-lg border-l-4 border-purple-500 hover:bg-gray-800/60 duration-300 shadow-lg"
            >
              <h3 className="text-2xl font-bold text-white mb-2">
                Continuous Learner
              </h3>
              <p className="text-gray-400">
                Constantly exploring new tech stacks, from Microservices
                patterns to modern UI libraries like Framer Motion.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
