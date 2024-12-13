"use client";
import Image from "next/image";
import CalendarUpdate from "./calendar";
import { useState } from "react";

const ContactUs = () => {
  const [active, setAtive] = useState("1");
  const [activeTime, sectActiveTime] = useState(1);
  const [time, setTime] = useState("");
  const [date, setDate] = useState(new Date());
  const day = date.getDate();
  const month = date.getMonth() + 1;

  console.log(day, month);

  const getFormattedDate = () => {
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const day = days[date.getDay()]; // Day of the week
    const month = date.getMonth() + 1; // Month (0-indexed)
    const year = date.getFullYear(); // Year
    return `${day}/${month}/${year}`;
  };

  const TwelveHourData = [
    { value: "5:15pm", id: "time-1" },
    { value: "6:15pm", id: "time-2" },
    { value: "7:15pm", id: "time-3" },
    { value: "8:15pm", id: "time-4" },
    { value: "9:15pm", id: "time-5" },
    { value: "10:15pm", id: "time-6" },
    { value: "11:15pm", id: "time-7" },
  ];

  console.log(time);

  return (
    <section className="bg-white">
      <div className="max-w-[1250px] mx-auto px-6 pt-[3rem] pb-[70px]">
        <h2 className="text-center text-[#14171f] text-[40px] font-bold font-Open_Sans mb-16">
          How can we help?
        </h2>
        {/* */}
        <div className="w-[90%] mx-auto h-[400px] px-6 bg-[#f6f4f4] rounded-xl border border-[#5c5c5c]/40 flex max-lg:w-full">
          <div className="flex flex-col gap-y-4 border-r border-[#5c5c5c]/40 w-[320px] pt-6 max-md:grid max-md:grid-cols-2">
            <Image
              width={40}
              height={40}
              src="/icons/busayo.svg"
              alt="busayo"
            />
            <p className="text-[#14171f]/80 text-sm font-semibold font-Open_Sans">
              Busayo Ademola
            </p>
            <p className="text-[#14171f] text-lg font-bold font-Open_Sans">
              Intro Meeting
            </p>
            <div className="flex items-center gap-x-4">
              <Image src="/icons/alarm.svg" width={24} height={24} alt="time" />
              <p className="text-[#5c5c5c] text-sm font-semibold font-Open_Sans">
                15m
              </p>
            </div>
            <div className="flex items-center gap-x-4">
              <Image
                src="/icons/google.svg"
                width={24}
                height={24}
                alt="google"
              />
              <p className="text-[#5c5c5c] text-base font-semibold font-Open_Sans">
                Intro Meeting
              </p>
            </div>
            <div className="flex items-center gap-x-4">
              <Image
                src="/icons/globe.svg"
                width={20}
                height={20}
                alt="location"
              />
              <p className="text-[#14171f] text-base font-semibold font-Open_Sans">
                Africa/Lagos
              </p>
            </div>
          </div>
          <div className="pt-6 border-r border-[#5c5c5c]/40">
            <CalendarUpdate date={date} setDate={setDate} />
          </div>
          <div className="pl-6 pt-6 w-[320px]">
            <div className="flex justify-between items-center mb-8">
              <p>
                <span className="text-[#14171f] text-lg font-bold font-Open_Sans mr-1">
                  {getFormattedDate()}
                </span>
                {/* <span className="text-[#5c5c5c] text-lg font-semibold font-Open_Sans">
                  {month}
                </span> */}
              </p>
              <div className="p-1 bg-white rounded border border-[#5c5c5c]/40 flex justify-between items-center gap-x-4">
                <button
                  className={`${
                    active === "1"
                      ? "text-[#5c5c5c] bg-[#F2F0F0] px-2 py-1"
                      : null
                  } text-base font-semibold font-Open_Sans  block `}
                  onClick={() => setAtive("1")}
                >
                  12h
                </button>
                <button
                  className={`text-base font-semibold font-Open_Sans block ${
                    active === "2"
                      ? "text-[#5c5c5c] bg-[#F2F0F0] px-2 py-1 animate-in transition-all"
                      : null
                  }`}
                  onClick={() => setAtive("2")}
                >
                  24h
                </button>
              </div>
            </div>

            {active === "1" && (
              <div className="flex flex-col gap-y-3 overflow-auto h-[270px]">
                {/* Tabs for 12hrs meeting set */}
                {TwelveHourData.map((item, i) => {
                  return (
                    <div key={i}>
                      <label
                        htmlFor={item.id}
                        className={`${
                          activeTime === 1
                            ? "border-[#14171F] border"
                            : "border border-[#f2f0f0]"
                        }text-[#14171f] bg-[white] text-base font-normal font-Open_Sans rounded block py-2 text-center w-full cursor-pointer hover:border-[#14171F] hover:transition-all hover:duration-500"`}
                        onClick={(i) => sectActiveTime(i)}
                      >
                        {item.value}
                      </label>
                      <input
                        type="radio"
                        value={item.value}
                        className="hidden"
                        id={item.id}
                        name="time"
                        checked={time === item?.id}
                        onChange={(e) => setTime(e.target.value)}
                      />
                    </div>
                  );
                })}
              </div>
            )}

            {/* Tab for 24hr meeting set*/}
            {active === "2" && (
              <div className="flex flex-col gap-y-3 overflow-auto h-[270px]">
                <div>
                  <label
                    htmlFor="time-1"
                    className="text-[#14171f] bg-[white] text-base font-normal font-Open_Sans rounded border border-[#f2f0f0] block py-2 text-center w-full cursor-pointer"
                  >
                    1pm
                  </label>
                  <input type="radio" value="" className="hidden" id="time-1" />
                </div>
                <div>
                  <label
                    htmlFor="time-1"
                    className="text-[#14171f] bg-[white] text-base font-normal font-Open_Sans rounded border border-[#f2f0f0] block py-2 text-center w-full cursor-pointer"
                  >
                    4:15pm
                  </label>
                  <input type="radio" value="" className="hidden" id="time-1" />
                </div>
                <div>
                  <label
                    htmlFor="time-1"
                    className="text-[#14171f] bg-[white] text-base font-normal font-Open_Sans rounded border border-[#f2f0f0] block py-2 text-center w-full cursor-pointer"
                  >
                    4:15pm
                  </label>
                  <input type="radio" value="" className="hidden" id="time-1" />
                </div>
                <div>
                  <label
                    htmlFor="time-1"
                    className="text-[#14171f] bg-[white] text-base font-normal font-Open_Sans rounded border border-[#f2f0f0] block py-2 text-center w-full cursor-pointer"
                  >
                    4:15pm
                  </label>
                  <input type="radio" value="" className="hidden" id="time-1" />
                </div>
                <div>
                  <label
                    htmlFor="time-1"
                    className="text-[#14171f] bg-[white] text-base font-normal font-Open_Sans rounded border border-[#f2f0f0] block py-2 text-center w-full cursor-pointer"
                  >
                    4:15pm
                  </label>
                  <input type="radio" value="" className="hidden" id="time-1" />
                </div>
                <div>
                  <label
                    htmlFor="time-1"
                    className="text-[#14171f] bg-[white] text-base font-normal font-Open_Sans rounded border border-[#f2f0f0] block py-2 text-center w-full cursor-pointer"
                  >
                    4:15pm
                  </label>
                  <input type="radio" value="" className="hidden" id="time-1" />
                </div>
                <div>
                  <label
                    htmlFor="time-1"
                    className="text-[#14171f] bg-[white] text-base font-normal font-Open_Sans rounded border border-[#f2f0f0] block py-2 text-center w-full cursor-pointer"
                  >
                    4:15pm
                  </label>
                  <input type="radio" value="" className="hidden" id="time-1" />
                </div>
                <div>
                  <label
                    htmlFor="time-1"
                    className="text-[#14171f] bg-[white] text-base font-normal font-Open_Sans rounded border border-[#f2f0f0] block py-2 text-center w-full cursor-pointer"
                  >
                    4:15pm
                  </label>
                  <input type="radio" value="" className="hidden" id="time-1" />
                </div>
                <div>
                  <label
                    htmlFor="time-1"
                    className="text-[#14171f] bg-[white] text-base font-normal font-Open_Sans rounded border border-[#f2f0f0] block py-2 text-center w-full cursor-pointer"
                  >
                    4:15pm
                  </label>
                  <input type="radio" value="" className="hidden" id="time-1" />
                </div>
                <div>
                  <label
                    htmlFor="time-1"
                    className="text-[#14171f] bg-[white] text-base font-normal font-Open_Sans rounded border border-[#f2f0f0] block py-2 text-center w-full cursor-pointer"
                  >
                    4:15pm
                  </label>
                  <input type="radio" value="" className="hidden" id="time-1" />
                </div>
                <div>
                  <label
                    htmlFor="time-1"
                    className="text-[#14171f] bg-[white] text-base font-normal font-Open_Sans rounded border border-[#f2f0f0] block py-2 text-center w-full cursor-pointer"
                  >
                    4:15pm
                  </label>
                  <input type="radio" value="" className="hidden" id="time-1" />
                </div>
                <div>
                  <label
                    htmlFor="time-1"
                    className="text-[#14171f] bg-[white] text-base font-normal font-Open_Sans rounded border border-[#f2f0f0] block py-2 text-center w-full cursor-pointer"
                  >
                    4:15pm
                  </label>
                  <input type="radio" value="" className="hidden" id="time-1" />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
