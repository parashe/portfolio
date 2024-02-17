import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { CrossIcon, FolderIcon, Github, LiveIcon } from "../svg";
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
        scrollPosition / (fullHeight - windowHeight);

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
    "aspect-[16/9] w-full shrink-0 rounded-lg object-fit lg:mx-12 max-h-[300px] lg:max-w-sm lg:rounded-xl";

  const maxImageWidth = 950;
  const maxImageHeight = 600;

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <motion.div className="container mx-auto">
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
        <section className="lg:py-10 grid grid-col-2 items-center ">
          {project.slice(0, 2).map((project, index) => (
            <motion.div
              key={index}
              className={
                row +
                " lg:flex-row items-center justify-center text-justify mt-5 bg-white rounded-lg shadow-md"
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
                <p className="mt-3 text-xs text-justify  leading-relaxed text-gray-700">
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
                  <p className="flex text-sm items-center font-semibold text-secondary mr-6">
                    GitHub &nbsp;
                    <Github
                      className="w-6 h-6 cursor-pointer transform hover:scale-110 transition duration-300 ease-in-out mr-1"
                      color="#333"
                    />
                  </p>
                  <p className="flex items-center text-sm font-semibold text-secondary">
                    View Demo &nbsp;
                    <LiveIcon
                      className="w-6 h-6 cursor-pointer transform hover:scale-110 transition duration-300 ease-in-out mr-1"
                      color="#7E2553"
                    />
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </section>
        <div className="flex justify-center mt-8">
          <button
            onClick={toggleModal}
            className="px-10 py-2 border-2 border-tertiary text-tertiary font-black rounded-sm shadow-md 
             hover:bg-tertiary hover:text-white transition duration-300 ease-in-out
             focus:outline-none focus:ring-2 focus:ring-tertiary focus:ring-opacity-50"
          >
            See More
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
    techStack: string[];
  }[];
  toggleModal: () => void;
}
const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  toggleModal,
}) => {
  const picture =
    "aspect-[16/9] w-full rounded-lg object-fit h-full md:h-[200px] max-h-[300px]";

  return (
    <div className="fixed bg-gray-50 w-full h-full inset-0 z-50 flex items-start justify-center overflow-y-auto">
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
              className="flex flex-col  items-center bg-white rounded-lg shadow-md"
            >
              <Image
                className={picture}
                src={proj.image}
                alt={proj.title}
                width={600}
                height={400}
              />
              <div className="p-6 w-full text-center">
                <h3 className="uppercase text-gray-900 mb-5 text-sm text-center font-black">
                  {proj.title}{" "}
                  {/* Apply text-center class to center-align the project title */}
                </h3>
                <p className="text-xs text-gray-700 mb-4 text-justify">
                  {proj.desc}
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {proj.techStack.map((tech, index) => (
                    <p
                      key={index}
                      className="px-2 py-1 text-xs text-gray-700 bg-gray-200 rounded-md"
                    >
                      {tech}
                    </p>
                  ))}
                </div>
                <div className="flex justify-center mt-4">
                  <button className="flex items-center text-xs px-5 py-2 bg-tertiary text-white rounded-md shadow-md hover:bg-blue-600 transition duration-300 ease-in-out">
                    <Github className="w-3 h-3 mr-1" color="#FFF" />
                    GitHub
                  </button>
                  <button className="flex text-xs items-center ml-4 px-5 py-2 bg-secondary text-white rounded-md shadow-md hover:bg-red-600 transition duration-300 ease-in-out">
                    <LiveIcon className="w-3 h-3 mr-1" color="#FFF" />
                    View Demo
                  </button>
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
            className="px-6 uppercase py-2 bg-gray-900 text-white rounded-md shadow-lg hover:bg-gray-800 transition duration-300 ease-in-out"
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
