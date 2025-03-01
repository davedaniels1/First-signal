import { FaPhone } from "react-icons/fa6";

export default function Footer() {

  let year = new Date().getFullYear()

  return (
    <footer>
      <section className="flex flex-col items-center justify-center text-center py-5 xl:p-20">
        <h3 className="text-[#0A1540] text-xl w-[90%] md:w-[65%] font-semibold xl:text-3xl xl:w-[650px] leading-relaxed">
          Block 12, Road 26, Federal Housing Estate, Woji Port Harcourt Rivers
          State
        </h3>
        <div className="flex flex-col md:flex-row gap-3 text-sm mt-4 justify-center xl:gap-5 xl:text-lg xl:mt-10">
          <p className="flex items-center justify-between gap-1 text-[#0A1540]"><FaPhone color="#0A1540"/> +234(0)703 6888 949</p>
          <p className="flex items-center justify-between gap-1 text-[#0A1540]"><FaPhone color="#0A1540"/> +234(0)705 7201 140</p>
          <p className="flex items-center justify-between gap-1 text-[#0A1540]"><FaPhone color="#0A1540"/> +234(0)812 8959 535</p>
        </div>
      </section>
      <section className="bg-[#0A1540] text-white ">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row px-4 md:px-10 py-8 items-center gap-6">
          <div className="w-full xl:w-1/3 max-w-md h-[240px] md:h-[280px] xl:h-[320px]">
            <img
              src="/IT_lady.png"
              alt="Smiling IT Lady"
              className="w-full h-full object-contain rounded-md"
            />
          </div>
          <div className="flex flex-col items-center gap-4 xl:gap-10 justify-center">
            <h2 className="font-semibold text-xl xl:text-3xl max-w-2xl text-center text-[#CCD6EB]">
              Ready to Enhance your Business Efficiency and Improve
              Communications?
            </h2>
            <button className="bg-[#335CAD] text-sm xl:text-lg px-7 py-2 rounded-md hover:bg-[#2a4b8d] transition-colors">
              Contact Us
            </button>
          </div>
        </div>
      </section>
      <p className="text-xs text-center xl:text-base bg-[#fdf0d5da] py-1 text-[#0A1540a4]">
        © {year} First Signal Global Services Limited. All rights reserved
      </p>
    </footer>
  );
}
