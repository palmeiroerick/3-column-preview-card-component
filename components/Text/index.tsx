type TextProps = {
  children: string;
};

const Text = ({ children }: TextProps) => {
  return <p className="text-transparentWhite lg:mb-12 ">{children}</p>;
};

export default Text;
