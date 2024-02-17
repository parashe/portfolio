// Importing necessary dependencies and components
import Link from "next/link";

import styles from "../../styles/navbar.module.css";
import React, { useRef } from "react";
import { CrossHair, Hamburger } from "../svg";
import Image from "next/image";

// Defining navigation items using a Map
const navItems = new Map([
  ["Home", "/"],
  ["About ", "#about"],
  ["Projects ", "#projects"],
  ["Contact ", "#contact"],
]);

// Navbar component definition
const Navbar = () => {
  // Creating a ref to toggle the menu
  const menuToggleRef = useRef<HTMLInputElement>(null);

  // Handling click on a navigation link to close the menu
  const handleClickLink = () => {
    if (menuToggleRef.current) {
      menuToggleRef.current.checked = false;
    }
  };

  // Rendering the Navbar component
  return (
    <div className=" bg-tertiary  w-full ">
      <div
        // Styling the wrapper div using Tailwind CSS classes
        className={` navbar sticky top-0  flex w-full flex-wrap items-center justify-between border-b shadow-sm border-neutral-200 bg-white lg:flex-row lg:justify-center lg:gap-x-10`}
      >
        {/* Link to the home page with the branding logo */}
        <Link href="/" className="ml-[4%] flex h-[72px] items-center ">
          {/* <BrandingLogo bg="#fff" className="w-[200px] md:w-[225px]" /> */}
          <Image
            src="next.svg"
            alt="Logo"
            className="w-[200px] md:w-[40%]"
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
          <CrossHair
            color="#b3b3b3"
            className={`${styles.crossHair} h-[24px]`}
          />
          <Hamburger
            color="#b3b3b3"
            className={`${styles.hamburger} h-[24px]`}
          />
        </label>
        {/* Navigation menu */}
        <nav className="hidden w-screen border-t border-neutral-200 lg:block lg:w-auto lg:border-none">
          <ul className="flex flex-col uppercase items-center text-sm font-semibold text-gray-800 lg:flex-row lg:gap-10">
            {/* Mapping through navigation items and rendering the links */}
            {Array.from(navItems).map(([name, href]) => (
              // Conditionally render "Use Cases" and "Contact" links only on the homepage
              // List item for each navigation link
              <li key={name} className="py-5">
                {/* Link component from Next.js */}
                <Link
                  href={href}
                  // Styling for link transition and hover effects
                  className="transition-colors hover:text-[#fd8b8b] focus:text-[#fd8b8b] focus:outline-none"
                  // Handling click on a navigation link to close the menu
                  onClick={handleClickLink}
                >
                  {/* Displaying the name of the navigation link */}
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

// Exporting the Navbar component
export default Navbar;
