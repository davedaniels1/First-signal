"use client";

import { useState } from "react";

export default function CompanyValues() {
  const [activeValue, setActiveValue] = useState("Customer-Centricity");

  const values = [
    {
      title: "Customer-Centricity",
      description:
        "Our clients are at the center of all we do. We endeavor to exceed their expectations with each project.",
      direction: "left",
      bgColor: "#FDF0D5",
    },
    {
      title: "Integrity",
      description:
        "We operate with transparency and adhere to the highest standards of honesty and ethical behavior.",
      direction: "left",
      bgColor: "#5FC294",
    },
    {
      title: "Collaboration",
      description:
        "We believe in the power of teamwork, and work closely with our clients to achieve shared success.",
      direction: "right",
      bgColor: "#FDF0D5",
    },
    {
      title: "Excellence",
      description:
        "We are committed to delivering high-quality services and products that meet the evolving needs of our clients.",
      direction: "right",
      bgColor: "#5FC294",
    },
    {
      title: "Innovation",
      description:
        "We embrace the latest technologies and methodologies to deliver state of the art solutions.",
      direction: "right",
      bgColor: "#FDF0D5",
    },
  ];

  const handleValueClick = (title) => {
    if (activeValue !== title) {
      setActiveValue(title);
    }
  };

  return (
    <section className="w-full mx-auto p-4 lg:p-8 text-[#0A1540]">
      <div className="flex flex-col items-center justify-center max-w-lg mx-auto lg:max-w-screen-lg lg:flex-row lg:justify-center lg:space-x-6 space-y-4 lg:space-y-0">
        {values.map((value) => (
          <div key={value.title} className="flex group">
            <button
              onClick={() => handleValueClick(value.title)}
              className="w-full lg:w-auto flex flex-col lg:flex-row items-center transition-all duration-300 rounded-lg relative lg:h-[500px]"
              style={{ backgroundColor: value.bgColor }}
            >
              {/* Mobile Layout */}
              <div className="lg:hidden flex flex-col w-full text-center">
                <h1 className="p-4 font-bold text-xl">{value.title}</h1>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out w-full
                  ${
                    activeValue === value.title
                      ? "max-h-[200px] opacity-100 p-4"
                      : "max-h-0 opacity-0 p-0"
                  }`}
                >
                  <p className="text-sm xl:text-lg">{value.description}</p>
                </div>
              </div>

              {/* Desktop Layout */}
              <div className="hidden lg:flex">
                {value.direction === "right" ? (
                  <>
                    <div
                      className={`overflow-hidden transition-all duration-300 ease-in-out
                      ${
                        activeValue === value.title
                          ? "lg:w-[350] xl:w-[620px] opacity-100"
                          : "w-0 opacity-0"
                      }`}
                    >
                      <div className="p-8 h-full flex flex-col items-end md:text-lg xl:text-xl text-right">
                        <h1 className="font-bold md:text-2xl xl:text-3xl mb-4">{value.title}</h1>
                        <p className="lg:text-base xl:text-lg">{value.description}</p>
                      </div>
                    </div>
                    {activeValue !== value.title && (
                      <div
                        className="p-8 font-bold md:text-3xl xl:text-4xl"
                        style={{
                          writingMode: "vertical-rl",
                          textOrientation: "mixed",
                        }}
                      >
                        {value.title}
                      </div>
                    )}
                  </>
                ) : (
                  <>
                    {activeValue !== value.title && (
                      <div
                        className="p-8 font-bold md:text-3xl xl:text-4xl"
                        style={{
                          writingMode: "vertical-rl",
                          textOrientation: "mixed",
                        }}
                      >
                        {value.title}
                      </div>
                    )}
                    <div
                      className={`overflow-hidden transition-all duration-300 ease-in-out
                      ${
                        activeValue === value.title
                          ? "lg:w-[350] xl:w-[620px] opacity-100"
                          : "w-0 opacity-0"
                      }`}
                    >
                      <div className="p-8 h-full flex flex-col items-start md:text-lg xl:text-xl text-left">
                        <h1 className="font-bold md:text-2xl xl:text-3xl mb-4">{value.title}</h1>
                        <p className="lg:text-base xl:text-lg">{value.description}</p>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}