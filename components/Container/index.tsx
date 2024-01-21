import type { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  bgColor: "brightOrange" | "darkCyan" | "veryDarkCyan";
};

const Container = ({ children, bgColor }: ContainerProps) => {
  const colorVariants = {
    brightOrange: "bg-brightOrange",
    darkCyan: "bg-darkCyan",
    veryDarkCyan: "bg-veryDarkCyan",
  };

  return (
    <section
      className={`${colorVariants[bgColor]} flex flex-col gap-5 p-9 lg:gap-7 lg:p-12`}
    >
      {children}
    </section>
  );
};

export default Container;
