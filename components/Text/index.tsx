type TextProps = {
  children: string;
};

const Text = ({ children }: TextProps) => {
  return <p className="text-transparentWhite">{children}</p>;
};

export default Text;
