import Image from "next/image";

export default function PrevArrow(props) {
  const { onClick } = props;
  return (
    <Image
      src="/icons/prev.svg"
      width={44}
      height={44}
      alt="prevArrow"
      onClick={onClick}
      className=" absolute cursor-pointer top-[105%] left-[32rem] z-10 max-xl:left-[26rem] max-lg:left-[16rem] max-md:left-[4rem]"
      style={{ transform: "translateY(-50%)" }}
    />
  );
}
