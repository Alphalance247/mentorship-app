import Image from "next/image";

export default function NextArrow(props) {
  const { onClick } = props;
  return (
    <Image
      src="/icons/next.svg"
      width={44}
      height={44}
      alt="nextArrow"
      onClick={onClick}
      className="absolute cursor-pointer top-[105%] right-[32rem] z-10 max-xl:right-[26rem] max-lg:right-[16rem] max-md:right-[4rem]"
      style={{ transform: "translateY(-50%)" }}
    />
  );
}
