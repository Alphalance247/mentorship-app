import Button from "./button";
const GetInTouch = () => {
  return (
    <section className="bg-[#F5F0F0]">
      <div className="px-6 w-[500px] mx-auto py-[5rem] max-md:w-full">
        <p className="text-center text-black text-xl font-bold font-Open_Sans leading-normal mb-2">
          Stay Updated with AbroadWithPurpose
        </p>
        <p className="text-center text-black/60 text-[15px] font-normal font-Open_Sans leading-tight mb-6">
          Subscribe to our newsletter for the latest updates
        </p>

        <form
          action="submit"
          className="flex gap-x-3 max-md:flex-col max-md:gap-y-4"
        >
          <input
            type="text"
            className="px-3 py-2 bg-[#f9eeff] rounded-lg border border-black/10 w-full"
            placeholder="Email address"
            name=""
            id=""
            required
          />
          <Button className="max-md:block max-md:w-full">Subscribe</Button>
        </form>
      </div>
    </section>
  );
};

export default GetInTouch;
