const Button = ({ children, onClick }) => {
  return (
    <button
      className="p-3 font-Open_Sans text-sm font-semibold bg-[#AF52DE] text-white w-fit rounded-lg block hover:inset-0 hover:transition-opacity hover:duration-700 hover:bg-opacity-50  max-md:block max-md:w-full"
      onClick={onClick}
    >
      {children || "Schedule Consultation"}
    </button>
  );
};

export default Button;
