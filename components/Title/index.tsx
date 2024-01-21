type TitleProps = {
  children: string;
};

const Title = ({ children }: TitleProps) => {
  return <h1 className="text-4xl font-bigShouldersDisplay text-veryLightGray">{children}</h1>;
};

export default Title;
