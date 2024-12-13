"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const AccordionUI = () => {
  // const data = [
  //   {
  //     accordionhead: "What does your mentorship program include?",
  //     subcontent:
  //       "Our mentorship program offers personalized guidance through every step of the study abroad process, from choosing the right destination and university to preparing your visa documents and settling in your new country.",
  //     itemNo: "item-1",
  //   },
  //   {
  //     accordionhead: "How long does the mentorship program last?",
  //     subcontent: "",
  //     itemNo: "item-2",
  //   },
  //   {
  //     accordionhead: "Do you help with visa applications?",
  //     subcontent: "",
  //     itemNo: "item-3",
  //   },
  //   {
  //     accordionhead:
  //       "Can you help me choose the best university for my field of study?",
  //     subcontent: "",
  //     itemNo: "item-4",
  //   },
  //   {
  //     accordionhead: "Do you offer support for scholarships or financial aid?",
  //     subcontent: "",
  //     itemNo: "item-5",
  //   },
  //   {
  //     accordionhead:
  //       "Do I need to have a destination in mind before enrolling in the program?",
  //     subcontent: "",
  //     itemNo: "item-6",
  //   },
  // ];

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const getSchedule = async () => {
    setLoading(true);
    axios
      .get(`https://meeting.abroadwithpurpose.com/meet/faq/`)
      .then((res) => {
        setLoading(false);
        const { data } = res;
        if (!res || res.status !== 200 || !res.data) {
          setError(true);
          return;
        }

        setData([...data]);
      })
      .catch((err) => {
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    getSchedule();
  }, []);

  return (
    <section className="bg-[#F5F0F0]" id="FAQ">
      <div className="py-16 max-w-[1250px] mx-auto px-6 max-md:px-3">
        <div className="w-[450px] mx-auto max-md:w-[80%]">
          <p className="text-[40px] font-bold font-Open_Sans text-[#14171f] mb-10 text-center max-lg:text-3xl max-md:text-2xl">
            Transparent answers{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF2D55] via-[#AF52DE] to-[#FFBEBA] ">
              to all your questions
            </span>
          </p>
        </div>

        <Accordion type="single" collapsible>
          {data.map((item, i) => {
            return (
              <AccordionItem value={item?.question} key={i}>
                <AccordionTrigger>{item?.question}</AccordionTrigger>
                <AccordionContent>{item?.answer}</AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>
      </div>
    </section>
  );
};

export default AccordionUI;
