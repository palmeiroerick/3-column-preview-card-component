type ButtonProps = {
  color: "brightOrange" | "darkCyan" | "veryDarkCyan";
};

const Button = ({ color }: ButtonProps) => {
  const colorVariants = {
    brightOrange: "text-brightOrange hover:bg-brightOrange",
    darkCyan: "text-darkCyan hover:bg-darkCyan",
    veryDarkCyan: "text-veryDarkCyan hover:bg-veryDarkCyan",
  };
  return (
    <button
      className={`${colorVariants[color]} h-10 w-36 rounded-full bg-veryLightGray text-sm hover:border-2 hover:text-veryLightGray lg:h-12 lg:text-base`}
    >
      Learn More
    </button>
  );
};

export default Button;
