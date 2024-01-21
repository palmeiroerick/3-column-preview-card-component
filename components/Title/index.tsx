type TitleProps = {
  children: string;
};

const Title = ({ children }: TitleProps) => {
  return (
    <h1 className="font-bigShouldersDisplay text-4xl lg:text-5xl text-veryLightGray">
      {children}
    </h1>
  );
};

export default Title;
