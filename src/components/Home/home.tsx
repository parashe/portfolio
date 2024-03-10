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
    " mt-5 text-sm  leading-relaxed lg:leading-relaxed  text-neutral-500";

  return (
    <>
      <div className="w-full h-full bg-gradient-to-r from-secondary via-pink-500  to-tertiary  bg-cover bg-center ">
        <div className="homebackground  bg-cover bg-center bg-white h-screen   ">
          {/* <div className="bg-gradient-to-r from-secondary via-pink-500  to-tertiary  bg-cover bg-center  "> */}
          <div className="bg-gradient-animation  bg-cover bg-center  ">
            <div className="container mx-auto  ">
              <div className="pt-20 md:pt-28 pb-0 xl:px-40 ">
                <div className="flex items-center flex-col   md:flex-row-reverse justify-center gap-0 ">
                  <div className="w-full h-full p-5">
                    <header className=" text-center lg:text-justify flex flex-col  text-black ">
                      <h1 className="  heading-text tracking-wide text-4xl font-black leading-relaxed mb-3  md:text-5xl ">
                        Hi, I&apos;m{" "}
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-secondary via-pink-500 to-tertiary">
                          Parash Giri{" "}
                        </span>
                      </h1>
                      <h3 className=" heading-text  text-2xl font-black leading-relaxed">
                        <span className=" text-secondary">
                          {" "}
                          Full Stack Developer
                        </span>
                      </h3>

                      <p className={`${paragraph}  heading-text`}>
                        I&apos;m a passionate MERN stack developer with over
                        three years of experience. Based in Birmingham, UK,
                        I&apos;m eager to bring your ideas to life. 
                        {/* I specialize
                        in turning concepts into fully-functional and visually
                        appealing digital solutions. Let&apos;s work together to
                        make your ideas a reality. */}
                      </p>

                      <div className="subheading-text mt-5 md:mt-8 gap-5 pb-5 flex flex-wrap">
                        <div className="relative group">
                          <a
                            href="https://github.com/parashe"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Github
                              color="black"
                              className="w-6 h-6 cursor-pointer transform hover:scale-110 transition duration-300 ease-in-out rounded-full  hover:bg-white"
                            />
                          </a>
                          <span className="hidden group-hover:inline-block absolute top-1/2 z-10 left-0 bg-black text-white text-xs px-2 py-1 rounded shadow-lg">
                            GitHub
                          </span>
                        </div>

                        <div className="relative group">
                          <a
                            href="https://www.linkedin.com/in/parash-giri-5203a3179/"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <LinkedInICon
                              color="#0077B5"
                              className="w-6 h-6 cursor-pointer transform  hover:scale-110 transition duration-300 ease-in-out rounded-full  hover:bg-white"
                            />
                          </a>
                          <span className="hidden group-hover:inline-block  z-10 absolute top-1/2 left-0 bg-[#0077B5] text-white text-xs px-2 py-1 rounded shadow-lg">
                            LinkedIn
                          </span>
                        </div>

                        <div className="relative group">
                          <a href="mailto:parash.giri11@gmail.com">
                            <MailIcon
                              color="#FF5733"
                              className="w-6 h-6 cursor-pointer transform hover:scale-110 transition duration-300 ease-in-out rounded-full  hover:bg-white"
                            />
                          </a>
                          <span className="hidden group-hover:inline-block absolute top-0 left-0 bg-[#FF5733] text-white text-xs px-2 py-1 rounded shadow-lg">
                            Mail
                          </span>
                        </div>
                      </div>

                      <div className=" subheading-text mt-5  md:pt-10  items-center justify-between">
                        <p className="font-bold text-md text-secondary leading-relaxed pb-5">
                          Tech Stack
                        </p>
                        <div className="flex gap-3 md:gap-6 items-center">
                          <div className="relative group">
                            <HTMLIcon
                              color="#E44D26"
                              className="w-8 h-8 p-1 cursor-pointer transform hover:scale-110 transition duration-300 ease-in-out rounded-lg  hover:bg-white"
                            />
                            <span className="hidden group-hover:inline-block absolute top-0 left-0 bg-[#E44D26] text-white text-xs px-2 py-1 rounded shadow-lg">
                              HTML
                            </span>
                          </div>

                          <div className="relative group">
                            <CSSIcon
                              color="#1572B6"
                              className="w-8 h-8 p-1 cursor-pointer transform hover:scale-110 transition duration-300 ease-in-out rounded-lg  hover:bg-white"
                            />
                            <span className="hidden group-hover:inline-block absolute top-0 left-0 bg-[#1572B6] text-white text-xs px-2 py-1 rounded shadow-lg">
                              CSS
                            </span>
                          </div>

                          <div className="relative group">
                            <JavaScriptIcon
                              color="#F0DB4F"
                              className="w-8 h-8 p-1 cursor-pointer transform hover:scale-110 transition duration-300 ease-in-out rounded-lg  hover:bg-white"
                            />
                            <span className="hidden group-hover:inline-block z-10 absolute top-0 left-0 bg-[#F0DB4F] text-white text-xs px-2 py-1 rounded shadow-lg">
                              JavaScript
                            </span>
                          </div>

                          <div className="relative group">
                            <ReactIcon
                              color="#61DAFB"
                              className="w-8 h-8 cursor-pointer transform hover:scale-110 transition duration-300 ease-in-out rounded-lg  hover:bg-white"
                            />
                            <span className="hidden group-hover:inline-block absolute top-0 left-0 bg-[#61DAFB] text-white text-xs px-2 py-1 rounded shadow-lg">
                              React
                            </span>
                          </div>

                          <div className="relative group">
                            <NodeIcon
                              color="#43853d"
                              className="w-8 h-8 p-1  cursor-pointer transform hover:scale-110 transition duration-300 ease-in-out rounded-lg  hover:bg-white"
                            />
                            <span className="hidden group-hover:inline-block absolute top-0 left-0 bg-[#43853d] text-white text-xs px-2 py-1 rounded shadow-lg">
                              Node.js
                            </span>
                          </div>

                          <div className="relative group">
                            <Image
                              className="h-10 w-10 p-1 cursor-pointer transform hover:scale-110 transition duration-300 ease-in-out rounded-lg bg-white hover:bg-white "
                              src="/next.svg"
                              alt="next"
                              width={50}
                              height={50}
                            />
                            <span className="hidden group-hover:inline-block absolute top-0 left-0 bg-black text-white text-xs px-2 py-1 rounded shadow-lg">
                              Next.js
                            </span>
                          </div>

                          <div className="relative group">
                            <Image
                              className="h-6 w-10 p-1 cursor-pointer transform hover:scale-110 transition duration-300 ease-in-out rounded-lg bg-white"
                              src="/aws.png"
                              alt="aws"
                              width={50}
                              height={50}
                            />
                            <span className="hidden group-hover:inline-block absolute top-0 left-0 bg-orange-500 text-white text-xs px-2 py-1 rounded shadow-lg">
                              AWS
                            </span>
                          </div>

                          <div className="relative group">
                            <Image
                              className="h-6 w-10  p-1 cursor-pointer transform hover:scale-110 transition duration-300 ease-in-out rounded-lg bg-white hover:bg-white "
                              src="/tailwind.png"
                              alt="tailwind"
                              width={50}
                              height={50}
                            />
                            <span className="hidden group-hover:inline-block absolute bottom-1/2 right-1/2 bg-[#06B6D4] text-white text-xs px-2 py-1 rounded shadow-lg">
                              Tailwind CSS
                            </span>
                          </div>
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
      </div>
    </>
  );
};
