"use client";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NextArrow from "./common/nextArrow";
import PrevArrow from "./common/prevArrow";

const CustomerStories = () => {
  const data = [
    {
      heading:
        "“The mentorship I received was invaluable. It made the entire process of studying abroad easy and stress-free.”",
      name: " Jessica M.",
      icon: "/icons/1.svg",
    },
    {
      heading:
        "“The mentorship I received was invaluable. It made the entire process of studying abroad easy and stress-free.”",
      name: " Jessica M.",
      icon: "/icons/1.svg",
    },
    {
      heading:
        "“The mentorship I received was invaluable. It made the entire process of studying abroad easy and stress-free.”",
      name: " Jessica M.",
      icon: "/icons/1.svg",
    },
  ];

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "200px",
    slidesToShow: 1,
    speed: 500,
    arrows: true,
    dots: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          centerPadding: "50px",
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "5px",
        },
      },
    ],
  };

  return (
    <section className="bg-[#f5f0f0]">
      <div className="max-w-[1250px] mx-auto px-6 py-[6.5rem] max-lg:py-[4rem]">
        <h3 className="text-center text-transparent bg-clip-text bg-gradient-to-r from-[#FF2D55] via-[#AF52DE] to-[#FFBEBA] text-[40px] font-bold font-Raleway mb-16 max-lg:text-3xl max-md:text-2xl max-md:mb-6">
          Our success stories
        </h3>
        <Slider {...settings}>
          {data.map((item, i) => {
            return (
              <div
                key={i}
                className="px-6 mb-28 max-lg:px-4 max-md:w-[100%] max-md:px-1"
              >
                <p className="text-center text-[#4f4f4f] text-2xl font-normal font-Open_Sans leading-loose max-lg:text-base max-md:text-base max-md:tracking-[-.8px]">
                  {item?.heading}
                </p>
                <div className="flex gap-x-2 justify-center mt-6 items-center max-md:gap-x-4">
                  <Image
                    src={item?.icon}
                    width={40}
                    height={40}
                    alt="jessica"
                  />
                  <p className="text-center italic text-[#14171f] text-[32px] font-semibold font-Open_Sans leading-[48px] max-lg:text-2xl">
                    {item?.name}
                  </p>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </section>
  );
};

export default CustomerStories;
