import { motion } from "framer-motion";
import { FaJava, FaReact, FaGithub, FaDocker } from "react-icons/fa";
import {
  SiSpringboot,
  SiTailwindcss,
  SiPostgresql,
  SiRedis,
} from "react-icons/si";

const Experience = () => {
  const techs = [
    {
      id: 1,
      icon: <FaJava size={50} />,
      title: "Java",
      style: "shadow-red-500",
    },
    {
      id: 2,
      icon: <SiSpringboot size={50} />,
      title: "Spring Boot",
      style: "shadow-green-500",
    },
    {
      id: 3,
      icon: <FaReact size={50} />,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 4,
      icon: <SiTailwindcss size={50} />,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 5,
      icon: <SiPostgresql size={50} />,
      title: "PostgreSQL",
      style: "shadow-blue-400",
    },
    {
      id: 6,
      icon: <FaDocker size={50} />,
      title: "Docker",
      style: "shadow-blue-500",
    },
    {
      id: 7,
      icon: <SiRedis size={50} />,
      title: "Redis",
      style: "shadow-red-600",
    },
    {
      id: 8,
      icon: <FaGithub size={50} />,
      title: "GitHub",
      style: "shadow-gray-400",
    },
  ];

  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-gray-900 to-black w-full min-h-screen pt-20"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        {/* Header Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="pb-8"
        >
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Experience
          </p>
          <p className="py-6">These are the technologies I've worked with</p>
        </motion.div>

        {/* Grid Container */}
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 text-center px-12 sm:px-0">
          {techs.map(({ id, icon, title, style }, index) => (
            <motion.div
              key={id}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              // FIX: Added 'flex flex-col items-center justify-center' for perfect centering
              // FIX: Increased padding to 'py-8' for breathing room
              className={`shadow-md hover:scale-105 duration-500 py-8 rounded-lg bg-gray-800/30 backdrop-blur-sm border border-gray-700 flex flex-col items-center justify-center ${style}`}
            >
              {/* Icon Container: No need for width constraints here, flex handles it */}
              <div className="mb-4">{icon}</div>

              <p className="font-semibold tracking-wide uppercase text-sm">
                {title}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
