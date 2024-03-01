import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { CrossIcon, FolderIcon, Github, LiveIcon, RightIcon } from "../svg";
import { Title } from "../atoms";
import { project } from "./data";

const Project = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const fullHeight = document.body.clientHeight;

      const adjustedScrollProgress =
        scrollPosition / (fullHeight + windowHeight / 2);

      const clampedScrollProgress = Math.min(
        Math.max(adjustedScrollProgress, 0),
        1
      );

      setIsVisible(clampedScrollProgress > 0.5);
      setScrollProgress(clampedScrollProgress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const row = "flex flex-col justify-center gap-y-[30px] md:gap-y-[50px]";
  const picture =
    "aspect-auto w-full  h-full  shrink-0 bg-primary rounded-lg object-cover lg:mx-12 max-h-[300px] lg:max-w-lg xl:max-w-md lg:rounded-md ";

  const maxImageWidth = 950;
  const maxImageHeight = 600;

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <motion.div id="projects" className="container mx-auto">
      <div className="p-5 md:px-40">
        <Title className="mx-auto lg:mx-0 uppercase text-blue-500 lg:mb-5 text-sm text-justify font-black">
          Projects
        </Title>
        <h2 className="max-w-md text-xl lg:text-xl font-black text-center lg:text-left">
          GAINING INSIGHTS FROM EVERY PROJECT I UNDERTAKE.
          <span className="inline-block ml-1">
            <FolderIcon color="#7E2553" className="w-5 h-5" />
          </span>
        </h2>
        <span className="text-center md:text-justify text-red-500 text-xs font-semibold">
          Note: All projects mentioned here are personal projects. Professional
          projects are not included.
        </span>
        <section className="lg:py-10 grid grid-col-2 items-center ">
          {project.slice(0, 2).map((project, index) => (
            <motion.div
              key={index}
              className={
                row +
                "md:flex-col xl:flex-row items-center justify-center text-justify mt-5 cursor-pointer bg-white rounded-lg shadow-md shadow-gray-100 hover:shadow-md hover:shadow-grary-200 transition duration-300 ease-in-out "
              }
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: isVisible ? 0 : 100, opacity: isVisible ? 1 : 0 }}
              transition={{ duration: 0.5 }}
            >
              <Image
                className={picture}
                width={maxImageWidth}
                height={maxImageHeight}
                src={project.image}
                alt={project.title}
                priority
              />
              <div className={`flex flex-col about-text lg p-10`}>
                <Title className="mx-auto lg:mx-0 uppercase text-blue-500 lg:mb-5 text-sm text-justify font-black">
                  {project.title}
                </Title>
                {project.username && project.password ? (
                  <p className="mt-3 text-xs text-justify  leading-relaxed text-neutral-500">
                    Username: {project.username} <br />
                    Password: {project.password}
                  </p>
                ) : null}
                <p className="mt-3 text-xs text-justify  leading-relaxed text-neutral-500">
                  {project.desc}
                </p>
              
                <div className="flex items-center mt-6">
                  <p className="font-bold text-xs text-secondary mr-3">
                    Tech Stack
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, index) => (
                      <p
                        key={index}
                        className="px-2 py-1 text-xs text-secondary  bg-gray-200 rounded-md"
                      >
                        {tech}
                      </p>
                    ))}
                  </div>
                </div>
                <div className="mt-6 flex flex-wrap items-center">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <p className="flex text-sm cursor-pointer transform hover:scale-110 transition duration-300 ease-in-out items-center font-semibold text-secondary mr-6">
                      GitHub &nbsp;
                      <Github
                        className="w-6 h-6 cursor-pointer transform hover:scale-110 transition duration-300 ease-in-out mr-1"
                        color="#333"
                      />
                    </p>
                  </a>
                  <a
                    href={project.projectLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <p className="flex cursor-pointer transform hover:scale-110 transition duration-300 ease-in-out items-center text-sm font-semibold text-secondary">
                      View Demo &nbsp;
                      <LiveIcon
                        className="w-6 h-6  cursor-pointer transform hover:scale-110 transition duration-300 ease-in-out mr-1"
                        color="#7E2553"
                      />
                    </p>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </section>
        <div className="flex justify-center mt-8">
          <button
            onClick={toggleModal}
            className="px-8 py-2 border-2 border-tertiary text-tertiary font-black rounded-sm  
              hover:text-tertiary hover:shadow-lg
             "
          >
            <div className="flex items-center">
              See More &nbsp;{" "}
              <RightIcon className="w-4 h-6   " color="#7E2553" />
            </div>
          </button>
        </div>
      </div>
      {showModal && (
        <ProjectModal project={project} toggleModal={toggleModal} />
      )}
    </motion.div>
  );
};

export default Project;

interface projectProps {
  id: number;
  title: string;
  image: string;
  desc: string;
  githubLink: string;
  projectLink: string;
  username?: string; // Make username optional if needed
  password?: string;
  techStack: string[];
}
interface projectModalProps {
  project: projectProps[];
  toggleModal: () => void;
}

interface ProjectModalProps {
  project: {
    id: number;
    title: string;
    image: string;
    desc: string;
    githubLink: string;
    projectLink: string;
    username: string; // Make username optional if needed
    password: string;
    techStack: string[];
  }[];
  toggleModal: () => void;
}
const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  toggleModal,
}) => {
  const picture =
    "aspect-[16/9] w-full h-full object-contain rounded-lg object-fit md:h-[200px] max-h-[300px]";

  return (
    <div className="fixed bg-gray-100 w-full h-full inset-0 z-50 flex items-start justify-center overflow-y-auto">
      {" "}
      {/* Changed items-center to items-start */}
      <motion.div className="container mx-auto pb-32 md:py-12 md:px-20 md:pb-32">
        {" "}
        {/* Added pb-16 for padding bottom */}
        <Title className="p-5 uppercase text-blue-500  text-sm text-center font-black">
          Projects
        </Title>
        <h2 className="px-5 text-xl lg:text-2xl font-black text-justify max-w-md mb-8">
          GAINING INSIGHTS FROM EVERY PROJECT I UNDERTAKE.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-5">
          {project.map((proj) => (
            <motion.div
              key={proj.id}
              className="flex flex-col  cursor-pointer items-center bg-white rounded-lg shadow-sm hover:shadow-lg transition duration-300 ease-in-out"
            >
              <Image
                className={picture}
                src={proj.image}
                alt={proj.title}
                width={700}
                height={700}
              />
              <div className="p-6 ">
                <h3 className="uppercase text-gray-900 mb-5 text-sm text-center font-black">
                  {proj.title}{" "}
                  {/* Apply text-center class to center-align the project title */}
                </h3>
                <p className="text-xs text-neutral-500 mb-4 text-justify">
                  {proj.desc}
                </p>
                {proj.username && proj?.password ? (
                  <p className="mt-3 text-xs text-justify mb-2 leading-relaxed text-blue-500">
                    Username: {proj?.username} <br />
                    Password: {proj?.password}
                  </p>
                ) : null}
                <div className="flex flex-wrap gap-2 justify-center">
                  {proj.techStack.map((tech, index) => (
                    <p
                      key={index}
                      className="px-2 py-1 text-xs text-neutral-500 bg-gray-200 rounded-md"
                    >
                      {tech}
                    </p>
                  ))}
                </div>
                <div className="flex justify-center mt-4">
                  <a
                    href={proj.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="flex items-center text-xs px-5 py-2 bg-tertiary text-white rounded-md shadow-md hover:bg-[#5F0F40] transition duration-300 ease-in-out">
                      <Github className="w-3 h-3 mr-1" color="#FFF" />
                      GitHub
                    </button>
                  </a>
                  <a
                    href={proj.projectLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="flex text-xs items-center ml-4 px-5 py-2 bg-secondary text-white rounded-md shadow-md hover:bg-gray-900 transition duration-300 ease-in-out">
                      <LiveIcon className="w-3 h-3 mr-1" color="#FFF" />
                      View Demo
                    </button>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
      <div className="fixed inset-x-0 bottom-0 p-5 bg-white">
        <div className="flex  justify-center md:justify-end">
          <button
            onClick={toggleModal}
            className="px-5 uppercase py-2 bg-primary text-white rounded-md shadow-lg hover:bg-red-600 transition duration-100 ease-in-out"
          >
            <div className="flex items-center">
              <CrossIcon className="w-4 h-4 mr-1" color="#FFF" />
              &nbsp; Close
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};
