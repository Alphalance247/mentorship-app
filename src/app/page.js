"use client";
import { useState, useEffect } from "react";
import AccordionUI from "./components/accordion";
import Assist from "./components/assist";
import CustomerStories from "./components/customerStories";
import Discovery from "./components/discovery";
import Footer from "./components/footer";
import GetInTouch from "./components/getInTouch";
import Header from "./components/header";
import Hero from "./components/hero";
import axios from "axios";

export default function Home() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [gap, setGap] = useState(null);

  useEffect(() => {
    const handleGap = () => {
      if (window.innerWidth < 768) {
        setGap(330);
      } else {
        setGap(75);
      }
    };

    handleGap();
    window.addEventListener("resize", handleGap);

    return () => {
      window.removeEventListener("resize", handleGap);
    };
  }, []);

  const handleNavClick = (i, scrollTo) => {
    const element = document.getElementById(scrollTo);

    if (element) {
      const elementPosition =
        element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - gap;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    setShowMobileMenu(false);
  };

  const getSchedule = async () => {
    setLoading(true);
    axios
      .get(`https://meeting.abroadwithpurpose.com/meet/api-services/`)
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
    <>
      <Header
        handleNavClick={handleNavClick}
        showMobileMenu={showMobileMenu}
        setShowMobileMenu={setShowMobileMenu}
      />
      <Hero handleNavClick={handleNavClick} />
      <Discovery
        data={data}
        loading={loading}
        error={error}
        getSchedule={getSchedule}
      />
      {/* <About /> */}
      <CustomerStories />
      <AccordionUI />
      {/* <ContactUs /> */}
      <Assist
        data={data}
        loading={loading}
        error={error}
        getSchedule={getSchedule}
      />
      <GetInTouch />
      <Footer />
    </>
  );
}
