const SubHead = ({ heading, subhead, className }) => {
  return (
    <>
      <h1
        className={`text-[#14171f] text-[40px] font-bold font-Raleway leading-[48px] mb-3 ${className} max-lg:text-3xl max-md:text-2xl max-md:tracking-[-1px]`}
      >
        {heading}
      </h1>
      <p className="text-[#5c5c5c] text-lg font-normal font-Open_Sans leading-7 max-lg:text-base max-md:text-sm max-md:tracking-[-.5px]">
        {subhead}
      </p>
    </>
  );
};

export default SubHead;
