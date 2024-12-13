const Assist = ({ error, loading, data, getSchedule }) => {
  return (
    <section className="bg-[#F6E4FF] px-6 py-[4rem] max-md:px-3" id="contact">
      <div className="max-w-[1250px] mx-auto  bg-[#FBF2FF] text-center py-[126px] rounded-[40px] max-lg:py-16 max-md:py-12 max-md:px-4">
        <h4 className="text-center text-[#14171f] text-[40px] font-bold font-Open_Sans leading-[48px] mb-10 max-lg:text-3xl max-md:text-lg">
          Hey there! How can we assist you?
        </h4>
        <div className="flex justify-center gap-x-8 max-md:flex-col max-md:gap-y-7 max-md:items-center">
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
            data.map((item, i) => {
              return (
                <a
                  href={`https://meeting.abroadwithpurpose.com/appointment/request/${item?.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={item?.id}
                >
                  <button className="text-[#AF52DE] px-5 py-4 text-xl block font-Open_Sans font-semibold bg-white rounded-full max-lg:text-base">
                    {item?.name}
                  </button>
                </a>
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default Assist;
