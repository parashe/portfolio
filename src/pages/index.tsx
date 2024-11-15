import { About } from "@/components/About/about";
import { Home } from "@/components/Home/home";
import Navbar from "@/components/Navbar/navbar";
import Project from "@/components/project/project";
import { type NextPage } from "next";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Footer from "@/components/Footer/footer";
import Skills from "@/components/skills/skills";
import { ExperienceAndEducation } from "@/components/Experience/experience";
import { ThemeContextProvider } from "@/Context/ThemeContext";

const DashboardPage: NextPage = () => {
  const [theme, setTheme] = useState("light");

  const darktheme = () => {
    setTheme("dark");
  };
  const lighttheme = () => {
    setTheme("light");
  };

  useEffect(() => {
    document.querySelector("html")?.classList.remove("dark", "light");
    document.querySelector("html")?.classList.add(theme);
  });

  return (
    <>
      <ThemeContextProvider value={{ theme, darktheme, lighttheme }}>
        <Navbar />

        <Home />

        <About />
        <ExperienceAndEducation />
        <div className="md:pb-40 pb-20"></div>
        <Skills />

        <Project />

        <Footer />
      </ThemeContextProvider>
    </>
  );
};

export default DashboardPage;
