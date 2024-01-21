import Image from "next/image";

type IconProps = {
  icon: "luxury" | "sedans" | "suvs";
};

const Icon = ({ icon }: IconProps) => {
  return (
    <Image src={`/assets/icon-${icon}.svg`} alt="" width={64} height={40} />
  );
};

export default Icon;
