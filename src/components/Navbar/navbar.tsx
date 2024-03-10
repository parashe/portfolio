// Importing necessary dependencies and components
import Link from "next/link";
import styles from "../../styles/navbar.module.css";
import React, { useRef, useState } from "react";
import { CrossHair, Hamburger } from "../svg";
import Image from "next/image";
import { Resume } from "../Resume/resume";

// Defining navigation items using a Map
const navItems = new Map([
  ["Home", "/"],
  ["About ", "#about"],
  ["Skills ", "#skills"],
  ["Experience ", "#experience"],
  ["Projects ", "#projects"],
  ["RESUME ", "#resume"],
]);

// Navbar component definition
const Navbar = () => {
  // Creating a ref to toggle the menu
  const menuToggleRef = useRef<HTMLInputElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  // Handling click on a navigation link to close the menu
  const handleClickLink = () => {
    if (menuToggleRef.current) {
      menuToggleRef.current.checked = false;
    }
  };

  const handleClickHamburger = () => {
    setIsVisible(!isVisible);
  };

  // Rendering the Navbar component
  return (
    <div className="navbar overflow-hidden fixed top-0 z-50 flex w-full flex-wrap items-center justify-center border-b shadow-sm border-neutral-200 bg-white lg:flex-row lg:justify-center lg:gap-x-10">
      {/* Link to the home page with the branding logo */}
      <Link
        href="/"
        className="ml-[4%] flex h-[72px] items-center justify-center"
      >
        <Image
          src="/parash.png"
          alt="Logo"
          className="w-full h-full "
          width={225}
          height={200}
        />
      </Link>
      {/* Input checkbox for menu toggle */}
      <input
        ref={menuToggleRef}
        type="checkbox"
        id="menuToggle"
        className="hidden"
      />
      {/* Label for menu toggle with CrossHair and Hamburger icons */}
      <label htmlFor="menuToggle" className="mx-[4%] py-6 lg:hidden">
        {isVisible ? (
          <span onClick={handleClickHamburger}>
            <CrossHair
              color="#b3b3b3"
              className={`${styles.crossHair} h-[24px]`}
            />
          </span>
        ) : (
          <span onClick={handleClickHamburger}>
            <Hamburger
              color="#b3b3b3"
              className={`${styles.hamburger} h-[24px]`}
            />
          </span>
        )}
      </label>
      {/* Navigation menu */}
      <nav
        className={`${
          isVisible ? "block" : "hidden"
        } w-screen border-t border-neutral-200 lg:block lg:w-auto lg:border-none`}
      >
        <ul className="flex flex-col uppercase items-center text-sm font-semibold text-gray-800 lg:flex-row lg:gap-10">
          {Array.from(navItems).map(([name, href]) => (
            <li key={name} className="py-5">
              <Link
                href={href}
                className="transition-colors hover:text-tertiary focus:text-tertiary focus:outline-none"
                onClick={handleClickLink}
              >
                {name === "RESUME " ? ( // Check if the link is "Resume"
                  <button onClick={toggleModal} className="cursor-pointer ">
                    {name}
                  </button>
                ) : (
                  <span>{name}</span>
                )}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      {isModalOpen && <Resume onClose={toggleModal} />}
    </div>
  );
};

// Exporting the Navbar component
export default Navbar;
