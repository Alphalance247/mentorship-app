"use client";
import SubHead from "./common/subHead";

const Discovery = ({ data, error, loading, getSchedule }) => {
  return (
    <section className="bg-[#f5f0f0]" id="services">
      <div className="max-w-[1250px] mx-auto px-6 py-14 max-lg:py-10 max-md:px-3">
        <div className="mb-12 w-[543px] mx-auto text-center max-lg:w-[80%] max-md:w-full">
          <SubHead
            heading="Discover How We Can Help You Succeed"
            subhead="From personalized mentorship to expert research, our services are
            designed to support your journey abroad every step of the way."
          />
        </div>

        <div className="grid grid-cols-3 gap-x-6 max-lg:gap-x-2 max-md:grid-cols-1 max-md:gap-y-8">
          {loading && (
            <p className="text-blue-900 text-center col-span-3">
              Data Loading... Please wait.
            </p>
          )}
          {error && (
            <div className="text-center col-span-3">
              <p className="text-red-500 text-lg">Failed to fetch data.</p>
              <p className="text-gray-600 text-sm mb-4">
                Please check your network connection and try again.
              </p>
              <button
                onClick={getSchedule}
                className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300"
              >
                Retry
              </button>
            </div>
          )}
          {!loading &&
            !error &&
            data.map((items, i) => {
              return (
                <div
                  key={i}
                  className="text-center p-4 rounded-2xl border border-[#e5e2e2] flex flex-col items-center gap-6 bg-white max-lg:p-3 max-md:flex-col"
                >
                  <div>
                    <img
                      src={`https://meeting.abroadwithpurpose.com/${items?.image}`}
                      width={352}
                      height={275}
                      alt="discoveryImages"
                    />
                  </div>
                  <div>
                    <p className=" text-[#14171f] text-xl font-bold font-Open_Sans leading-7 mb-4 max-lg:text-base">
                      {items?.name}
                    </p>
                    <p className="text-[#5c5c5c] text-sm font-medium font-Open_Sans leading-normal mb-6 max-lg:text-sm">
                      {items?.description}
                    </p>
                    <a
                      href={`https://meeting.abroadwithpurpose.com/appointment/request/${items?.id}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="p-3 font-Open_Sans text-sm font-semibold text-[#AF52DE] border-[1px] border-[#AF52DE] bg-white w-full rounded-lg block hover:bg-[#AF52DE] hover:text-white transition-all duration-700">
                        Schedule Consultation
                      </button>
                    </a>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default Discovery;
