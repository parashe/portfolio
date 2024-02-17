import Image from "next/image";
import React from "react";

const Footer = () => {
  const companyLogo = "https://flowbite.com/docs/images/logo.svg";
  const links = [
    { url: "#", text: "About" },
    { url: "#", text: "Privacy Policy" },
    { url: "#", text: "Licensing" },
    { url: "#", text: "Contact" },
  ];
  const year = 2023;

  return (
    <div className="footer ">
      {/* Your main content here */}
      <FooterComponent
        companyName="Parash.dev"
        companyLogo={companyLogo}
        links={links}
        year={year}
      />
    </div>
  );
};

interface FooterProps {
  companyName: string;
  companyLogo: string;
  links: { url: string; text: string }[];
  year: number;
}

export const FooterComponent = ({
  companyName,
  companyLogo,
  links,
  year,
}: FooterProps) => {
  return (
    <footer className="bg-white  rounded-lg shadow dark:bg-gray-900 m-4">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a
            href="#"
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <Image
              src={companyLogo}
              className="h-8"
              alt={`${companyName} Logo`}
              width={32}
              height={32}
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              {companyName}
            </span>
          </a>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            {links.map((link, index) => (
              <li key={index}>
                <a href={link.url} className="hover:underline me-4 md:me-6">
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
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
