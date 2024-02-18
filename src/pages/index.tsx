import { About } from "@/components/About/about";
import { Home } from "@/components/Home/home";
import Navbar from "@/components/Navbar/navbar";
import Project from "@/components/project/project";
import { type NextPage } from "next";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Footer from "@/components/Footer/footer";
import Skills from "@/components/skills/skills";

const DashboardPage: NextPage = () => {
  return (
    <>
      <Navbar />

      <Home />

      <About />
  <Skills/>
      <Project />
      <Footer/>
    </>
  );
};

export default DashboardPage;
