import Image from "next/image";
import Button from "./button";

const Hero = ({ handleNavClick }) => {
  return (
    <section className="">
      <div className="max-w-[1250px] mx-auto px-6 py-28 flex justify-between gap-x-8 max-lg:py-16 max-md:flex-col max-md:gap-y-8 max-md:items-center max-md:text-center max-md:px-3 max-md:py-14">
        <div className="w-[42%] max-lg:w-[75%] max-md:w-[100%]">
          <p className="relative bg-white text-black text-base px-2 py-3 font-normal font-Open_Sans leading-tight mb-11 w-fit rounded-lg max-lg:text-sm">
            <span
              className="absolute inset-0 rounded-lg"
              style={{
                background:
                  "linear-gradient(90deg, #FF2D55 16.91%, #AF52DE 42.28%, #FFBEBA 84.56%)",
                zIndex: -20,
                content: " ",
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                borderRadius: "0.5rem", // Same as parent
                margin: "-2px",
              }}
            ></span>
            Your Pathway to Global Education Awaits!✨✨
          </p>
          <h1 className="mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#FF2D55] via-[#AF52DE] to-[#FFBEBA] text-[40px] font-Raleway font-bold leading-[48px] max-lg:text-3xl max-md:tracking-[-2px]">
            One-on-One Guidance{" "}
            <span className="text-[#14171f]">
              to Help You Study Abroad with Confidence.
            </span>
          </h1>
          <p className="text-[#5c5c5c] text-[22px] font-normal font-Open_Sans leading-loose mb-9 max-lg:text-base max-md:tracking-[-0.5%]">
            Navigate international education with a trusted advisor. Get
            personalized counseling tailored to your goals.
          </p>
          <Button onClick={() => handleNavClick(null, "contact")} />
        </div>

        <div>
          <Image
            width={464}
            height={460}
            src="/image/HeroImageContainer.png"
            alt="HeroImageContainer"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
