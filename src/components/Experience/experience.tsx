import React, { useState } from "react";
import { Title } from "../atoms";
import { motion } from "framer-motion";
export const ExperienceAndEducation = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  React.useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const fullHeight = document.body.clientHeight;

      const adjustedScrollProgress = scrollPosition / (fullHeight / 2);

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

  return (
    <div id="experience" className="container mx-auto">
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: isVisible ? 0 : 100, opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 0.5 }}
      >
        <section className=" lg:px-40 ">
          <Title className="p-5 uppercase text-blue-500  text-sm text-center font-black">
            Experience & Education
          </Title>
          <h2 className="px-5 text-xl lg:text-xl font-black text-justify max-w-md mb-8">
            VENTURING INTO A JOURNEY OF SKILLS AND KNOWLEDGE.
          </h2>
          <div className="flex flex-col md:flex-row gap-8 p-3 md:pt-10">
            <Experience />
            <Education />
          </div>
        </section>
      </motion.div>
    </div>
  );
};

const Education = () => {
  const paragraph =
    " mt-2 text-xs  leading-relaxed lg:leading-relaxed  text-neutral-500";
  return (
    <div>
      <header className="title  text-center md:text-left">
        <Title className=" uppercase text-neutral-500 text-sm text-center font-black">
          Education
        </Title>
      </header>

      <div className="borderpoint  border-l-4 border-secondary mt-8">
        <div className="px-5">
          <ul className="flex flex-col gap-6 list-none max-w-5xl ">
            <li className="bg-white border p-6 rounded-lg shadow-lg hover:shadow-xl  leading-relaxed  hover:cursor-pointer relative">
              <div className="point-marker "></div>
              <Title className="mx-auto lg:mx-0 uppercase bg-clip-text text-transparent bg-gradient-to-r from-secondary via-pink-500 to-tertiary text-sm text-justify font-black">
                Msc Computer Science
              </Title>
              <h4 className="text-xs mt-1 font-black text-black text-center md:text-justify ">
                2023 - 2024
              </h4>
              <h3 className="text-xs mt-1 font-black text-neutral-500 text-center md:text-justify">
                Birmingham City University , UK
              </h3>
              <h4></h4>
              <p className={paragraph}>
                Completed MSc in Computer Science with distinction. Proficient
                in database management systems, software development, and
                artificial intelligence. Skilled in various programming
                languages and technologies.
              </p>
            </li>

            <li className="bg-white border p-6 rounded-lg shadow-lg hover:shadow-xl  leading-relaxed  hover:cursor-pointer relative">
              <div className="point-marker "></div>
              <Title className="mx-auto lg:mx-0 uppercase bg-clip-text text-transparent bg-gradient-to-r from-secondary via-pink-500 to-tertiary   text-sm text-justify font-black">
                Bachelor of Computer Engineering
              </Title>
              <h4 className="text-xs mt-1 font-black text-black text-center md:text-justify ">
                2023 - 2024
              </h4>
              <h3 className="text-xs mt-1 font-black text-neutral-500 text-center md:text-justify">
                Kathmandu Engineering College , Nepal
              </h3>
              <h4></h4>
              <p className={paragraph}>
                Completed Bachelors degree with a First Class degree. Proficient
                in various aspects of computer engineering, including software
                development, hardware design, and system architecture.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

const Experience = () => {
  const paragraph =
    " mt-2 text-xs  text-center md:text-justify leading-relaxed   text-neutral-500";
  return (
    <div>
      <header className="title  text-center md:text-left">
        <Title className=" uppercase text-neutral-500 text-sm text-center font-black">
          Experience
        </Title>
      </header>

      <div className="borderpoint border-l-4 border-secondary mt-8">
        <div className="px-5">
          <ul className="flex flex-col gap-6 list-none max-w-5xl ">
            <li className="bg-white border p-6 rounded-lg shadow-xl hover:shadow-xl  leading-relaxed  hover:cursor-pointer relative">
              <div className="point-marker "></div>
              <Title className="mx-auto lg:mx-0 text-justify uppercase bg-clip-text text-transparent bg-gradient-to-r from-secondary via-pink-500 to-tertiary   text-sm md:text-justify font-black">
                Full Stack Developer
              </Title>
              <h4 className="text-xs mt-1 font-black text-black text-center md:text-justify ">
                APRIL 2023 - PRESENT
              </h4>
              <h3 className="text-xs mt-1 font-black text-neutral-500 text-center md:text-justify">
                Faraday Battery LTD , UK
              </h3>
              <h4></h4>
              <p className={paragraph}>
                I am currently working as a full stack developer, where I am
                engaged with various technologies and frameworks including
                React, Next.js, TypeScript, Node.js, Express, DynamoDB, Tailwind
                CSS, and AWS.
              </p>
            </li>

            <li className="bg-white border p-6 rounded-lg shadow-lg hover:shadow-xl  leading-relaxed  hover:cursor-pointer relative">
              <div className="point-marker "></div>
              <Title className="mx-auto lg:mx-0 uppercase bg-clip-text text-transparent bg-gradient-to-r from-secondary via-pink-500 to-tertiary   text-sm text-justify font-black">
                Full Stack Developer
              </Title>
              <h4 className="text-xs mt-1 font-black text-black text-center md:text-justify ">
                SEP 2020 - DEC 2022
              </h4>
              <h3 className="text-xs mt-1 font-black text-neutral-500 text-center md:text-justify">
                Fibonacci Engineering & IT Solutions , Nepal
              </h3>
              <h4></h4>
              <p className={paragraph}>
                I worked as a full-stack developer, where I utilized a diverse
                range of technologies including such as HTML, CSS, React,
                Node.js, Express, and MongoDB. Additionally, I worked on various
                CSS libraries including Material UI and Bootstrap.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
