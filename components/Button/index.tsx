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
      className={`${colorVariants[color]} bg-veryLightGray h-10 w-36 rounded-full text-sm`}
    >
      Learn More
    </button>
  );
};

export default Button;
