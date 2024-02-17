import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { LocationPinIcon } from "../svg";
import { Title } from "../atoms";

export const About = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const fullHeight = document.body.clientHeight;

      const progress = scrollPosition / (fullHeight - windowHeight);
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const row = "flex flex-col justify-center  gap-y-[30px] md:gap-y-[50px]";
  const picture =
    "aspect-[16/9] w-full shrink-0 rounded-lg bg-gradient-to-r from-secondary via-pink-500  to-primary object-cover lg:mx-12 h-[38vh] lg:max-w-[420px] lg:rounded-xl";

  const maxImageWidth = 950;
  const maxImageHeight = 600;
  const maxScale = 1; // Maximum scale value
  const scaledProgress = scrollProgress * maxScale;
  return (
    <motion.div className="container mx-auto" style={{ scale: scrollProgress }}>
      <section className="p-5 md:px-40 lg:py-10 h-screen flex flex-col items-center justify-center">
        <div
          className={
            row + " lg:flex-row items-center justify-center text-justify"
          }
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
            <h2 className="text-xl lg:text-3xl font-black text-center lg:text-left">
              A highly motivated Full Stack Developer based in the UK
              <span className="inline-block ml-1">
                <LocationPinIcon color="#FF004D" className="w-5 h-5" />
              </span>
            </h2>
            <p className=" mt-5 text-xs  leading-relaxed lg:leading-6  text-neutral-500">
              Passionate and results-driven Full Stack Developer with a proven
              history of delivering cutting-edge web and mobile solutions.
              Proficient in{" "}
              <span className="text-black font-semibold ">
                ReactJS, NextJS, NodeJS, Express, TypeScript, Tailwind CSS, SQL,
                and NoSQL,{" "}
              </span>
              I excel in crafting responsive web applications that are both
              efficient and maintainable. My expertise extends to mobile app
              development using{" "}
              <span className="text-black font-semibold ">React Native </span>{" "}
              for iOS and Android platforms. Additionally, I leverage AWS
              services like {""}
              <span className="text-black font-semibold ">
                amplify, ECS, Api gateway, S3, Cognito, and Lambda{" "}
              </span>{" "}
              to enhance application performance and security.
            </p>
          </div>
        </div>
      </section>
    </motion.div>
  );
};