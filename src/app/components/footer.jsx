import { icons } from "lucide-react";
import Image from "next/image";

const Footer = () => {
  const navs = [
    {
      id: 1,
      name: "Services",
      scrollSection: "/",
      icon: "icons/facebook.svg",
    },
    {
      id: 2,
      name: "Our Team",
      scrollSection: "Our Team",
      icon: "icons/instagram.svg",
    },
    {
      id: 3,
      name: "FAQs",
      scrollSection: "careers",
      icon: "icons/twitter.svg",
    },
    { id: 4, name: "Contact Us", scrollSection: "whyus", icon: null },
  ];

  const validImages = navs.filter((img) => img?.icon !== null);
  return (
    <footer className="bg-[#F6E4FF]">
      <div className="max-w-[1250px] mx-auto px-6 flex justify-between items-center py-[4rem] max-md:flex-col max-md:text-center max-md:gap-y-6 max-md:px-3">
        <div className="text-[#14171f] text-2xl font-semibold leading-normal">
          AbroadWithPurpose
        </div>
        <nav>
          {navs.map((items) => {
            return (
              <ul key={items?.id} className="inline-flex">
                <li className="text-black px-4 font-Open_Sans text-base font-semibold leading-tight max-lg:px-2 max-md:px-2">
                  {items?.name}
                </li>
              </ul>
            );
          })}
        </nav>
        <div className="inline-flex gap-x-3">
          {validImages.map((item, i) => {
            return (
              <div key={i}>
                <Image
                  src={!item?.icon ? null : item?.icon}
                  alt="socialIcons"
                  width={24}
                  height={24}
                />
              </div>
            );
          })}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
