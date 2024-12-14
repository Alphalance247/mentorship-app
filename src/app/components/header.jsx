import Button from "./button";
import { FiMenu } from "react-icons/fi";
import { IoClose } from "react-icons/io5";

const Header = ({ handleNavClick, showMobileMenu, setShowMobileMenu }) => {
  const navs = [
    { id: 1, name: "Services", scrollSection: "services" },
    { id: 2, name: "About", scrollSection: "about" },
    { id: 3, name: "FAQs", scrollSection: "FAQ" },
    { id: 4, name: "Contacts", scrollSection: "contact" },
  ];

  return (
    <header className="border-b border-[#CECBCB] sticky top-0 bg-[#FFFFFF] backdrop-blur-md shadow-md z-50">
      <div className="transition-all duration-500 max-w-[1250px] mx-auto px-6 flex justify-between items-center py-5">
        <div className="text-[#14171f] text-2xl font-semibold leading-normal max-md:text-base">
          AbroadWithPurpose
        </div>
        <nav className="transition-all duration-500 max-lg:hidden">
          {navs.map((items, i) => {
            return (
              <ul
                key={items?.id}
                className="inline-flex cursor-pointer  max-lg:flex max-lg:flex-col max-lg:pt-12 max-lg:items-center max-sm:pt-4"
              >
                <li
                  className="text-[#4f4f4f] cursor-pointer hover:transition-all hover:text-lg hover:duration-1000 hover:text-[#AF52DE] px-4 text-sm font-semibold font-Open_Sans"
                  onClick={() => handleNavClick(i, items?.scrollSection)}
                >
                  {items?.name}
                </li>
              </ul>
            );
          })}
        </nav>

        <div className="max-lg:hidden">
          <Button onClick={() => handleNavClick(null, "contact")} />
        </div>

        <div className="lg:hidden transition-all duration-500 grow flex justify-end items-center h-10 gap-8">
          <button
            className="transition-all duration-500 text-black p-1 text-4xl hover:p-2"
            onClick={() => setShowMobileMenu((prev) => !prev)}
          >
            {showMobileMenu ? <IoClose /> : <FiMenu />}
          </button>
        </div>
      </div>

      <div
        className={`lg:hidden transition-all duration-500 overflow-hidden bg-white ${
          showMobileMenu ? "h-auto" : "h-0"
        }`}
      >
        <nav className="justify-start items-center gap-4 flex flex-col py-8 px-3">
          {navs.map((items, i) => {
            return (
              <ul key={items?.id} className="">
                <li
                  className="text-[#4f4f4f] cursor-pointer px-4 text-sm font-semibold font-Open_Sans block"
                  onClick={() => handleNavClick(i, items?.scrollSection)}
                >
                  {items?.name}
                </li>
              </ul>
            );
          })}

          <div className="">
            <Button onClick={() => handleNavClick(null, "contact")} />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
