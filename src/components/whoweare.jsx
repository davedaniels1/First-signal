import CompanyValues from "./values";
import Missions from "./missions";

export default function Whoweare() {
  return (
    <>
      <section className="px-4 py-5 w-full max-w-screen-xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8 xl:gap-12">
          <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left">
            <h1 className="text-[#0A1540] text-2xl md:text-5xl xl:text-7xl font-bold leading-tight xl:leading-tight">
              Your Partner in Technology and Growth
            </h1>
            <p className="text-sm md:text-base xl:text-lg text-[#0A1540] mt-2 lg:mt-4">
              First Signal Global Services Limited is a leading provider of
              Information and Communication Technology (ICT) solutions,
              specializing in structured office cabling, camera installations,
              fiber optics installations, and PABX (Private Automatic Branch
              Exchange) system installations. Our team of qualified engineers
              and technicians has years of experience providing cutting-edge
              installation and maintenance services. We specialize in offering
              personalized solutions that help organizations retain smooth
              communication, security, and operational efficiency.
            </p>
            <button className="w-full px-8 py-2 text-sm xl:text-lg mt-4 text-white bg-[#335CAD] rounded-md hover:bg-[#2a4b8d] transition-colors">
              Contact Us
            </button>
          </div>
          <div className="flex-1 w-full lg:w-auto">
            <img
              src="about.jpg"
              alt="three men with a fibre cable"
              className="w-full rounded-xl"
            />
          </div>
        </div>
      </section>

      <section className="mt-2 lg:mt-8 bg-[#0F1E5A] pb-3">
        <h2 className="text-2xl lg:text-4xl font-bold text-center text-[#CCD6EB] pt-5">
          Our Values
        </h2>
        <CompanyValues />
      </section>

      <section className="mt-5">
        <Missions />
      </section>
    </>
  );
}
