import React, { useState } from "react";
import { Title } from "../atoms";
import { skillsData } from "./data";
import { CrossIcon, FingerIcon, FolderIcon } from "../svg";
import { motion } from "framer-motion";
interface Skill {
  id: number;
  title: string;
  imageSrc: string;
  description: string;
  techStack: { name: string; description: string[] }[];
}

interface SkillsProps {
  skills?: Skill[];
}

interface TechStackModalProps {
  name: string;
  description: string[];
  onClose: () => void;
}

const TechStackModal: React.FC<TechStackModalProps> = ({
  description,
  name,
  onClose,
}) => {
  return (
    <div onClick={onClose} className="fixed   top-0 left-0 flex justify-center items-center w-full h-full bg-black bg-opacity-50 z-50">
      {/* </div> <div className="fixed bg-black   w-full h-full inset-0 z-50 flex items-start justify-center overflow-y-auto bg-opacity-50"> */}
      <div className="modal-content bg-white bg-opacity-90 max-h-[80vh] p-8 rounded-xl shadow-lg overflow-auto">
        <div className="flex justify-end pb-2">
          <button
            className="text-gray-600 hover:text-gray-800"
            onClick={onClose}
          >
            <CrossIcon color="#FF004D" className="w-6 h-6" />
          </button>
        </div>
        <Title className="mx-auto lg:mx-0 uppercase text-blue-500 lg:mb-5 text-sm text-justify font-black">
          Explore My Achievements in {name} Description
        </Title>

        <div className="mb-6  text-white">
          <ul className="list-none">
            {description.map((desc, i) => (
              <li
                key={i}
                className="text-sm font-md  py-2 text-gray-900 ml-4 flex items-center max-w-[700px] "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-3 text-green-500 mr-2 font-bold"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M9.293 16.707a1 1 0 01-1.414 0l-5-5a1 1 0 111.414-1.414L9 14.586l9.293-9.293a1 1 0 111.414 1.414l-10 10z"
                    clipRule="evenodd"
                  />
                </svg>
                {desc}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export const Skills: React.FC<SkillsProps> = () => {
  const [selectedname, setSelectedTechStack] = useState("");
  const [selectedDescription, setSelectedDescription] = useState<string[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [showModal, setShowModal] = useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const fullHeight = document.body.clientHeight;

      const adjustedScrollProgress = scrollPosition / (fullHeight / 1.5);

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

  const openModal = (name: string, description: string[]) => {
    setSelectedTechStack(name);
    setSelectedDescription(description);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div id="skills" className="skills mb-32">
      <div className="container mx-auto p-5 md:py-20 ">
        <motion.div
          className="p-5 md:px-40"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: isVisible ? 0 : 100, opacity: isVisible ? 1 : 0 }}
          transition={{ duration: 0.5 }}
        >
          <Title className="mx-auto lg:mx-0 uppercase text-blue-500 lg:mb-5 text-sm text-justify font-black">
            Skills
          </Title>
          <h2 className="max-w-md text-xl text-secondary lg:text-xl font-black text-center lg:text-left">
            Empowering Innovation Through Skillful Expertise.
            <span className="inline-block ml-1">
              <FolderIcon color="#7E2553" className="w-5 h-5" />
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 ">
            {skillsData?.map((skill) => (
              <div
                key={skill.id}
                className="card flex flex-col items-center justify-center  mt-5  rounded-lg shadow-md"
              >
                <div className=" about-text lg p-10">
                  <h3 className="uppercase text-blue-500 mb-5 text-sm text-center font-black">
                    {skill.title} Tech Stack
                  </h3>
                  <div className="w-full h-full flex flex-col items-center justify-center text-center">
                    <div className="flex items-center mt-6">
                      <div className="flex flex-wrap justify-center gap-2">
                        {skill.techStack.map((tech, index) => (
                          <p
                            key={index}
                            className="px-2 cursor-pointer py-1 text-xs text-secondary  bg-gray-200 hover:bg-gray-300 rounded-md"
                            onClick={() =>
                              openModal(tech.name, tech.description)
                            }
                          >
                            {tech.name}
                          </p>
                        ))}
                      </div>
                    </div>

                    <p className="ml-5 text-xs animate-bounce mt-5">
                      <FingerIcon color="#7E2553" className="w-6 h-6" />
                      Click me{" "}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
      {isModalOpen && (
        <TechStackModal
          name={selectedname}
          description={selectedDescription}
          onClose={closeModal}
        />
      )}
    </div>
  );
};

export default Skills;
