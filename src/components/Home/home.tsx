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
      <div className="homebackground   ">
        <div className="bg-gradient-animation ">
          <div className="container mx-auto  ">
            <div className="pt-20 md:pt-28 pb-0 xl:px-40 ">
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

        <div className="mt-[-20px] overflow-hidden ">
          <div className=" ">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
              <path
                fill="#7E2553"
                fillOpacity="1"
                d="M0,224L48,234.7C96,245,192,267,288,250.7C384,235,480,181,576,165.3C672,149,768,171,864,192C960,213,1056,235,1152,234.7C1248,235,1344,213,1392,202.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              ></path>
            </svg>
          </div>
          <div className="mt-[-1px] ">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
              <path
                fill="#7E2553"
                fillOpacity="1"
                d="M0,224L48,234.7C96,245,192,267,288,250.7C384,235,480,181,576,165.3C672,149,768,171,864,192C960,213,1056,235,1152,234.7C1248,235,1344,213,1392,202.7L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </>
  );
};
