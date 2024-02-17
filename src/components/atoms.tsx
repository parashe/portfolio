import { useAnimation, useInView, motion } from "framer-motion";
import React, {
  useState,
  useEffect,
 
} from "react";

export const UnderlinedText: React.FC<React.PropsWithChildren> = ({
  children,
}) => (
  <span className="relative whitespace-nowrap">
    {children}
    <div className="absolute -left-[.1em] -right-[.1em] -bottom-[.10em] -z-10 border-b-[.2em] border-dashed border-red-600" />
  </span>
);

export const BoldText: React.FC<React.PropsWithChildren> = ({ children }) => (
  <span className="font-bold text-[#dd4b4b]">{children}</span>
);

interface TitleProps extends React.PropsWithChildren {
  className?: string;
  id?: string;
}
export const Title: React.FC<TitleProps> = ({ children, className, id }) => {
  const fixedClassName = "relative w-max  text-black ";
  const finalClassName = className
    ? fixedClassName + " " + className
    : fixedClassName;

  return (
    <h2 className={finalClassName}>
      {children}
      {id && <div id={id} className="absolute -top-[140px]" />}
    </h2>
  );
};

export const Reveal: React.FC<React.PropsWithChildren> = ({ children }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();

  React.useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    } else {
      mainControls.start("hidden");
    }
  }, [isInView]);

  return (
    <div
      ref={ref}
      style={{ position: "relative", width: "fit-content", overflow: "hidden" }}
    >
      <motion.div
        variants={{
          hidden: { opacity: 0, x: 75 },
          visible: { opacity: 1, x: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        {children}
      </motion.div>
    </div>
  );
};

