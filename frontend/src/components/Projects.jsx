import { useEffect, useState } from "react";
import axios from "axios";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaServer } from "react-icons/fa";
import { HiCode } from "react-icons/hi";

// --- Skeleton Component for Loading State ---
const ProjectSkeleton = () => (
  <div className="flex flex-col h-full rounded-xl overflow-hidden bg-gray-800/40 border border-gray-700 animate-pulse">
    <div className="h-48 bg-gray-700/50 w-full" />
    <div className="p-6 flex flex-col flex-grow">
      <div className="flex justify-between items-center mb-4">
        <div className="h-8 bg-gray-700/50 rounded w-3/4" />
        <div className="h-6 w-6 bg-gray-700/50 rounded-full" />
      </div>
      <div className="space-y-2 mb-6">
        <div className="h-4 bg-gray-700/50 rounded w-full" />
        <div className="h-4 bg-gray-700/50 rounded w-5/6" />
      </div>
      <div className="flex gap-2 mt-auto mb-6">
        <div className="h-6 w-16 bg-gray-700/50 rounded-full" />
        <div className="h-6 w-12 bg-gray-700/50 rounded-full" />
      </div>
      <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-700/50">
        <div className="h-10 bg-gray-700/50 rounded-lg" />
        <div className="h-10 bg-gray-700/50 rounded-lg" />
      </div>
    </div>
  </div>
);

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/api/v1/projects",
        );
        setProjects(response.data);
        setError(null);
      } catch (err) {
        console.error("Error fetching projects:", err);
        setError("Unable to connect to the Backend API.");
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  return (
    <div
      name="projects"
      className="bg-gradient-to-b from-gray-900 to-primary w-full text-white min-h-screen pt-20 pb-10"
    >
      {/* Applied your requested class here */}
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        {/* Header Section */}
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 hover:border-accent duration-300 cursor-default text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
            Projects
          </p>
          <p className="py-6 text-gray-300">
            Check out some of my work served directly from my{" "}
            <span className="text-accent font-semibold">Spring Boot API</span>.
          </p>
        </div>

        {/* Error State UI */}
        {!loading && error && (
          <div className="flex flex-col items-center justify-center p-8 border border-red-500/50 bg-red-900/10 rounded-xl text-center mb-8">
            <FaServer size={40} className="text-red-500 mb-4" />
            <h3 className="text-xl font-bold text-red-400">
              Connection Failed
            </h3>
            <p className="text-gray-400 mt-2 text-sm">{error}</p>
          </div>
        )}

        {/* Grid System */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {/* Loading State */}
          {loading && (
            <>
              <ProjectSkeleton />
              <ProjectSkeleton />
              <ProjectSkeleton />
            </>
          )}

          {/* Success State */}
          {!loading &&
            !error &&
            projects.map((project, index) => (
              <Tilt
                key={project.id}
                tiltMaxAngleX={3}
                tiltMaxAngleY={3}
                scale={1.02}
                transitionSpeed={450}
                className="h-full"
              >
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex flex-col h-full shadow-lg shadow-gray-900/50 rounded-xl overflow-hidden bg-gray-800/40 backdrop-blur-md border border-gray-700 hover:border-accent/50 duration-300 group"
                >
                  {/* Image Container */}
                  <div className="relative h-48 w-full overflow-hidden">
                    <img
                      src={
                        project.imageUrl || "https://via.placeholder.com/400"
                      }
                      alt={project.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300"></div>
                  </div>

                  <div className="p-5 flex flex-col flex-grow">
                    <div className="flex justify-between items-center mb-3">
                      <h3 className="font-bold text-xl text-white tracking-wide group-hover:text-accent duration-300">
                        {project.title}
                      </h3>
                      <HiCode
                        size={22}
                        className="text-gray-400 group-hover:text-accent duration-300"
                      />
                    </div>

                    <p className="text-sm text-gray-400 mb-6 leading-relaxed line-clamp-3">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mt-auto mb-6">
                      {Array.isArray(project.techStack) &&
                        project.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="text-xs font-medium text-cyan-300 bg-cyan-900/20 border border-cyan-500/30 px-2 py-1 rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                    </div>

                    <div className="grid grid-cols-2 gap-3 pt-4 border-t border-gray-700">
                      <a
                        href={project.liveLink || "#"}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-sm font-semibold hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 hover:-translate-y-1"
                      >
                        <FaExternalLinkAlt size={12} /> Demo
                      </a>

                      <a
                        href={project.githubLink || "#"}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center justify-center gap-2 px-3 py-2 rounded-lg border border-gray-600 hover:border-white text-gray-300 hover:text-white text-sm transition-all duration-300 hover:bg-white/5"
                      >
                        <FaGithub size={16} /> Code
                      </a>
                    </div>
                  </div>
                </motion.div>
              </Tilt>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
