type ButtonProps = {
  color: "brightOrange" | "darkCyan" | "veryDarkCyan";
};

const Button = ({ color }: ButtonProps) => {
  const colorVariants = {
    brightOrange: "text-brightOrange",
    darkCyan: "text-darkCyan",
    veryDarkCyan: "text-veryDarkCyan",
  };
  return (
    <button
      className={`${colorVariants[color]} h-10 w-36 rounded-full bg-veryLightGray text-sm lg:h-12 lg:text-base`}
    >
      Learn More
    </button>
  );
};

export default Button;
