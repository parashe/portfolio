import React from "react";
import { Title } from "../atoms";
import { CrossIcon, DownloadIcon } from "../svg";

interface ResumeProps {
  onClose: () => void;
}

export const Resume: React.FC<ResumeProps> = ({ onClose }) => {
  const handleDownload = () => {
    // Logic to trigger the download
    // For example, you can use window.open to open a new window with the PDF URL
    window.open("/parash.pdf", "_blank");
  };

  return (
    <div
      className="fixed top-0 left-0 flex justify-center items-center w-full h-full  bg-black bg-opacity-50 z-50"
      onClick={onClose}
    >
      <div className="modal-content  bg-white max-h-[80vh] max-w-md p-8 rounded-lg shadow-lg overflow-auto">
        <div className="flex justify-end ">
          <button
            className="text-gray-600 hover:text-gray-800"
            onClick={onClose}
          >
            <CrossIcon color="#FF004D" className="w-5 h-5" />
          </button>
        </div>
        <h3  className="py-3 md:py-0 md:pb-0 mx-auto lg:mx-0 text-justify uppercase text-blue-500 lg:mb-5 text-sm  font-black">
          Resume
        </h3>
        <p className="pb-3 text-xs leading-relaxed lg:leading-6  text-justify text-neutral-500">
          Click the button below to download my resume. Feel free to reach out
          to me for any inquiries or collaborations.
        </p>
        <button
          onClick={handleDownload}
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-primary-dark transition duration-300"
        >
          <div className="flex items-center">
            <DownloadIcon className="w-4 h-6   " color="white" />
            &nbsp; Download Resume
          </div>
        </button>
      </div>
    </div>
  );
};
