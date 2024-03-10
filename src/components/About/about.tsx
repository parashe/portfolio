import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { LocationPinIcon } from "../svg";
import { Title } from "../atoms";

export const About = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const fullHeight = document.body.clientHeight;

      // Calculate the adjusted scroll progress based on the content height
      const adjustedScrollProgress = scrollPosition / (fullHeight / 5);

      // Clamp the scroll progress to a range between 0 and 1
      const clampedScrollProgress = Math.min(
        Math.max(adjustedScrollProgress, 0),
        1
      );

      // Set isVisible to true when scroll progress is greater than 0.5
      setIsVisible(clampedScrollProgress > 0.5);
      setScrollProgress(clampedScrollProgress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const row = "flex flex-col justify-center gap-y-[30px] md:gap-y-[50px]";
  const picture =
    "aspect-[16/9] w-full shrink-0 rounded-lg bg-gradient-to-r from-secondary via-pink-500  to-tertiary object-cover lg:mx-12 h-[38vh] lg:max-w-[420px] lg:rounded-xl";

  const maxImageWidth = 950;
  const maxImageHeight = 600;

  return (
    <motion.div id="about" className="container mx-auto ">
      <section className="p-5 md:px-auto lg:px-40 lg:py-10  flex flex-col items-center justify-center">
        <motion.div
          className={
            row + "flex-row-reverse md:flex-col xl:flex-row  h-[80vh] items-center justify-center text-justify"
          }
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: isVisible ? 0 : 100, opacity: isVisible ? 1 : 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
         
          <Image
            className={picture}
            width={maxImageWidth}
            height={maxImageHeight}
            src="/about.png"
            alt="parash about image"
            priority
          />
         
          <div className={`flex flex-col about-text`}>
            <Title className="mx-auto lg:mx-0 uppercase text-blue-500 lg:mb-5 text-sm text-justify font-black">
              About Me
            </Title>
            <h2 className="text-xl lg:text-xl font-black text-center lg:text-left">
              A highly motivated Full Stack Developer based in the UK
              <span className="inline-block ml-1">
                <LocationPinIcon color="#FF004D" className="w-5 h-5" />
              </span>
            </h2>
            <p className=" mt-2 text-xs  leading-relaxed lg:leading-6  text-neutral-500">
              Passionate and results-driven Full Stack Developer with a proven
              history of delivering cutting-edge web and mobile solutions.
              Proficient in{" "}
              <span className="text-tertiary font-semibold ">
                ReactJS, NextJS, NodeJS, Express, TypeScript, Tailwind CSS, SQL,
                and NoSQL,{" "}
              </span>
              I excel in crafting responsive web applications that are both
              efficient and maintainable. My expertise extends to mobile app
              development using{" "}
              <span className="text-tertiary font-semibold ">React Native </span>{" "}
              for iOS and Android platforms. Additionally, I leverage AWS
              services like {""}
              <span className="text-tertiary font-semibold ">
                amplify, ECS, API gateway, S3, Cognito, and Lambda{" "}
              </span>{" "}
              to enhance application performance and security.
            </p>
          </div>
        </motion.div>
      </section>
    </motion.div>
  );
};