import SubHead from "./common/subHead";
import Image from "next/image";

const About = () => {
  return (
    <section className="bg-[#f5f0f0]">
      <div className="max-w-[1250px] mx-auto px-6 py-24">
        <div className="mb-20 w-[845px] mx-auto text-center">
          <SubHead
            className="w-[600px] mx-auto"
            heading="Empowering Dreams, One Destination at a Time"
            subhead="At MissionAbroad, we specialize in helping students navigate the complexities of studying abroad. With personalized mentorship and expert guidance, we’re here to make your journey smooth and successful. From choosing the right destination to understanding new cultures, our solo-run program ensures you receive one-on-one support tailored to your needs."
          />
        </div>

        <div className="grid grid-cols-2 gap-x-6">
          <div>
            <Image
              src="/image/4.png"
              width={588}
              height={400}
              alt="asterisks"
            />

            <div className="bg-[#d1e7ff] rounded-lg py-8 text-center mt-6 h-[234px]">
              <h4 className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF2D55] via-[#AF52DE] to-[#FFBEBA] text-[56px] font-bold font-Open_Sans leading-[72px] mb-6">
                150+
              </h4>
              <p className="text-center text-[#14171f] text-lg font-semibold font-Open_Sans mb-2">
                Successful Mentees Guided
              </p>
              <p className="text-center text-[#5c5c5c] text-base font-normal font-Open_Sans">
                Helping students achieve their study abroad dreams.
              </p>
            </div>
          </div>

          <div>
            <div className="bg-[#ffd5dd] rounded-lg py-9 text-center mb-6 h-[234px]">
              <h4 className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF2D55] via-[#AF52DE] to-[#FFBEBA] text-[56px] font-bold font-Open_Sans leading-[72px] mb-8">
                95%
              </h4>
              <p className="text-center text-[#14171f] text-lg font-semibold font-Open_Sans mb-2">
                Client Satisfaction Rate
              </p>
              <p className="text-center text-[#5c5c5c] text-base font-normal font-Open_Sans">
                Trusted by students for our personalized support
              </p>
            </div>

            <div className="flex gap-x-6">
              <div className="bg-[#f1d7ff] rounded-lg h-[400px] w-[264px] text-center pt-24">
                <h4 className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF2D55] via-[#AF52DE] to-[#FFBEBA] text-[56px] font-bold font-Open_Sans leading-[72px] mb-6">
                  150+
                </h4>
                <p className="text-center text-[#14171f] text-lg font-semibold font-Open_Sans mb-2">
                  Successful Mentees Guided
                </p>
                <p className="text-center text-[#5c5c5c] text-base font-normal font-Open_Sans">
                  Helping students achieve their study abroad dreams.
                </p>
              </div>
              <Image
                src="/image/5.png"
                width={300}
                height={400}
                alt="asterisks"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
