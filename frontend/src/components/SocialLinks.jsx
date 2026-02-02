import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const SocialLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin size={30} />
        </>
      ),
      href: "https://linkedin.com",
      style: "rounded-tr-md bg-gradient-to-r from-blue-700 to-blue-500",
    },
    {
      id: 2,
      child: (
        <>
          GitHub <FaGithub size={30} />
        </>
      ),
      href: "https://github.com",
      style: "bg-gradient-to-r from-gray-800 to-gray-700",
    },
    {
      id: 3,
      child: (
        <>
          Mail <HiOutlineMail size={30} />
        </>
      ),
      href: "mailto:your-email@gmail.com",
      style: "bg-gradient-to-r from-emerald-600 to-teal-500",
    },
    {
      id: 4,
      child: (
        <>
          Resume <BsFillPersonLinesFill size={30} />
        </>
      ),
      href: "/resume.pdf",
      style: "rounded-br-md bg-gradient-to-r from-slate-600 to-slate-500",
      download: true,
    },
  ];

  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed z-50">
      <ul>
        {links.map(({ id, child, href, style, download }) => (
          <li
            key={id}
            // Logic: Start -100px off screen. On hover, slide to -10px (showing mostly full width)
            className={`flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 shadow-lg hover:shadow-xl ${style}`}
          >
            <a
              href={href}
              className="flex justify-between items-center w-full text-white font-semibold tracking-wide"
              download={download}
              target="_blank"
              rel="noreferrer"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;
