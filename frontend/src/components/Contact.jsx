import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { FaPaperPlane } from "react-icons/fa";
import { CgSpinner } from "react-icons/cg";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const loadingToast = toast.loading("Sending message...");

    try {
      await axios.post("http://localhost:8080/api/v1/contact", formData);
      toast.dismiss(loadingToast);
      toast.success("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      toast.dismiss(loadingToast);
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      name="contact"
      className="w-full min-h-screen bg-gradient-to-b from-primary to-gray-900 p-4 text-white pt-20"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        {/* Header Section */}
        <div className="pb-8 text-center md:text-left">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 hover:text-accent duration-300 cursor-default">
            Contact
          </p>
          <p className="py-6 text-gray-300">
            Submit the form below to get in touch with the backend.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-10 justify-center items-start">
          {/* Left Side: Text/Context (Hidden on small mobile, visible on desktop) */}
          <div className="w-full md:w-1/2 flex flex-col gap-6 mt-4">
            <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Let's talk about everything!
            </h3>
            <p className="text-gray-400 leading-relaxed text-lg">
              Don't like forms? Send me an email. 👋
              <br />I am currently open for full-time opportunities and
              freelance projects.
            </p>
            <div className="p-4 bg-gray-800/30 rounded-lg border-l-4 border-accent">
              <p className="italic text-gray-300">
                "Great software is built by great teams. Let's build something
                together."
              </p>
            </div>
          </div>

          {/* Right Side: The Form */}
          <div className="w-full md:w-1/2">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col w-full bg-gray-800/40 backdrop-blur-md p-8 rounded-2xl border border-gray-700 shadow-2xl relative overflow-hidden group"
            >
              {/* Subtle background glow effect inside form */}
              <div className="absolute top-0 right-0 -mr-10 -mt-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl group-hover:bg-accent/20 duration-500"></div>

              <label className="text-sm font-semibold text-gray-400 mb-2 ml-1">
                Name
              </label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Good Name"
                className="p-3 mb-4 bg-gray-900/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all duration-300 placeholder-gray-600"
              />

              <label className="text-sm font-semibold text-gray-400 mb-2 ml-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="something@example.com"
                className="p-3 mb-4 bg-gray-900/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all duration-300 placeholder-gray-600"
              />

              <label className="text-sm font-semibold text-gray-400 mb-2 ml-1">
                Message
              </label>
              <textarea
                name="message"
                required
                value={formData.message}
                onChange={handleChange}
                rows="6"
                placeholder="Enter your message here..."
                className="p-3 mb-6 bg-gray-900/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all duration-300 placeholder-gray-600 resize-none"
              ></textarea>

              <button
                disabled={isSubmitting}
                className="group w-full text-white bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 rounded-lg font-bold shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 hover:scale-[1.02] active:scale-95 duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <CgSpinner className="animate-spin" size={20} /> Sending...
                  </>
                ) : (
                  <>
                    Let's Talk{" "}
                    <FaPaperPlane className="group-hover:translate-x-1 group-hover:-translate-y-1 duration-300" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
