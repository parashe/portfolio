import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Resume } from "../Resume/resume";
// Assuming the Resume modal component is imported from a separate file

const Footer = () => {
  const personLogo = "/parash.png";
  const links = [
    { url: "#", text: "Home" },
    { url: "#about", text: "About" },
    { url: "#skills", text: "Skills" },
    { url: "#projects", text: "Projects" },
    { url: "#", text: "Download CV" }, // Change the URL to "#" to prevent page reload
  ];
  const year = 2023;

  // State to manage the visibility of the Resume modal
  const [showResumeModal, setShowResumeModal] = useState(false);

  // Function to toggle the visibility of the Resume modal
  const toggleResumeModal = () => {
    setShowResumeModal(!showResumeModal);
  };

  return (
    <>
      {/* Footer content */}
      <FooterComponent
        companyName="Parash.dev"
        personLogo={personLogo}
        links={links}
        year={year}
        onDownloadResume={toggleResumeModal} // Pass the toggleResumeModal function as a prop
      />
      {/* Render the Resume modal if showResumeModal state is true */}
      {showResumeModal && <Resume onClose={toggleResumeModal} />}
    </>
  );
};

interface FooterProps {
  companyName: string;
  personLogo: string;
  links: { url: string; text: string }[];
  year: number;
  onDownloadResume: () => void; // Define prop type for handling download resume action
}

export const FooterComponent = ({
  companyName,
  personLogo,
  links,
  year,
  onDownloadResume,
}: FooterProps) => {
  return (
    <footer className="bg-gray-50 rounded-lg shadow dark:bg-gray-900 md:m-4">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex justify-center sm:items-center sm:justify-center">
          <Link
            href="/#"
            className="flex items-center justify-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <Image
              src={personLogo}
              className="h-full w-full rounded-full object-fit mix-blend-color-burn"
              alt={`${companyName} Logo`}
              width={500}
              height={500}
            />
          </Link>
          <ul className="flex flex-wrap items-center justify-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            {links.map((link, index) => (
              <li key={index}>
                {/* If the text is "Download CV", call the onDownloadResume function */}
                {link.text === "Download CV" ? (
                  <button
                    onClick={onDownloadResume}
                    className="hover:underline me-4 md:me-6 focus:outline-none"
                  >
                    {link.text}
                  </button>
                ) : (
                  <Link href={link.url} className="hover:underline me-4 md:me-6">
                    {link.text}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-center text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © {year}{" "}
          <a href="#" className="hover:underline">
            {companyName}
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
