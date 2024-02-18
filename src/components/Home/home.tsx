import Image from "next/image";
import React from "react";
import {
  CSSIcon,
  Github,
  HTMLIcon,
  JavaScriptIcon,
  LinkedInICon,
  MailIcon,
  NodeIcon,
  ReactIcon,
} from "../svg";

export const Home = () => {
  const picture =
    "h-full max-h-[300px] w-[300px]  image-home  brightness-100 shadow-lg  opacity-100   w-[100%] shrink-0  bg-neutral-200 object-cover md:mx-12 md:w-[250px] lg:h-[320px] lg:w-[320px] ";

  const paragraph =
    " mt-5 text-xs  leading-relaxed lg:leading-relaxed  text-neutral-500";
  return (
    <>
      <div className="bg-tertiary">
        <div className="bg-gradient-animation bg-white homebackground h-screen">
          <div className="container mx-auto  ">
            <div className="py-20 md:py-32 md:px-auto  xl:px-40 ">
              <div className="flex items-center flex-col   md:flex-row-reverse justify-center gap-0 ">
                <div className="w-full h-full p-5">
                  <header className=" text-center lg:text-justify flex flex-col  text-black ">
                    <h1 className="  heading-text tracking-wide text-4xl font-black leading-relaxed mb-3  md:text-5xl ">
                      Hi, I&apos;m Parash Giri
                    </h1>
                    <h3 className=" heading-text  text-2xl font-black leading-relaxed">
                      <span className=" bg-gradient-to-r from-secondary via-pink-500  to-tertiary  inline-block text-transparent bg-clip-text">
                        {" "}
                        Full Stack Developer
                      </span>
                    </h3>

                    <p className={`${paragraph}  heading-text`}>
                      I&apos;m a passionate MERN stack developer with over three
                      years of experience. Based in Birmingham, UK, I&apos;m
                      eager to bring your ideas to life.
                      {/* I specialize in turning
                      concepts into fully-functional and visually appealing
                      digital solutions. Let&apos;s work together to make your
                      ideas a reality. */}
                    </p>

                    <div className="subheading-text mt-5 md:mt-8 gap-5 flex flex-wrap">
                      <a
                        href="https://github.com/parashe"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github
                          className="w-6 h-6 cursor-pointer transform hover:scale-110 transition duration-300 ease-in-out"
                          color="black"
                        />
                      </a>
                      <a
                        href="https://www.linkedin.com/in/parash-giri-5203a3179/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <LinkedInICon
                          className="w-6 h-6 cursor-pointer transform hover:scale-110 transition duration-300 ease-in-out"
                          color="#0077B5"
                        />
                      </a>
                      <a href="mailto:parash.giri11@gmail.com">
                        <MailIcon
                          color="#FF5733"
                          className="w-6 h-6 cursor-pointer transform hover:scale-110 transition duration-300 ease-in-out"
                        />
                      </a>
                    </div>

                    <div className=" subheading-text mt-5  md:pt-10 md:mt-10 items-center justify-between">
                      <p className="font-bold text-md text-secondary leading-relaxed pb-5">
                        Tech Stack
                      </p>
                      <div className="flex gap-3 md:gap-8 items-center">
                        <HTMLIcon
                          className="w-8 h-8 cursor-pointer transform hover:scale-110 transition duration-300 ease-in-out"
                          color="#E44D26"
                        />
                        <CSSIcon
                          className="w-8 h-8 cursor-pointer transform hover:scale-110 transition duration-300 ease-in-out"
                          color="#1572B6"
                        />
                        <JavaScriptIcon
                          className="w-8 h-8 cursor-pointer transform hover:scale-110 transition duration-300 ease-in-out"
                          color="#F0DB4F"
                        />
                        <ReactIcon
                          className="w-8 h-8 cursor-pointer transform hover:scale-110 transition duration-300 ease-in-out"
                          color="#61DAFB"
                        />
                        <NodeIcon
                          className="w-8 h-8 cursor-pointer transform hover:scale-110 transition duration-300 ease-in-out"
                          color="#43853d"
                        />
                        <Image
                          className=" h-10 w-10  cursor-pointer transform hover:scale-110 transition duration-300 ease-in-out"
                          src="/next.svg"
                          alt="next"
                          width={50}
                          height={50}
                        />

                        <Image
                          className="h-6 w-10  cursor-pointer transform hover:scale-110 transition duration-300 ease-in-out"
                          src="/aws.png"
                          alt="aws"
                          width={50}
                          height={50}
                        />
                        <Image
                          className="h-6 w-10 cursor-pointer transform hover:scale-110 transition duration-300 ease-in-out"
                          src="/tailwind.png"
                          alt="tailwind"
                          width={50}
                          height={50}
                        />
                      </div>
                    </div>
                  </header>
                </div>

                <div className="w-full flex text-center justify-center  image-content  p-4   ">
                  <Image
                    src="/parash.jpg"
                    className={picture}
                    alt="Profile Picture"
                    width={605}
                    height={700}
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
