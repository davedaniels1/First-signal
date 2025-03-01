export default function Hero() {
  return (
    <section className="flex flex-col items-center text-center mt-3 lg:mt-5">
      <h1 className="text-[#0A1540] text-2xl w-[70%] md:w-[80%] lg:w-[60%] md:text-5xl xl:text-7xl font-bold xl:w-[850px] md:leading-tight xl:leading-snug">
        We are First Signal Global Services limited
      </h1>
      <p className="text-sm w-[80%] md:w-[82%] lg:w-[75%] md:text-base xl:text-lg xl:w-[750px] mt-2 lg:mt-4 text-[#0A1540]">
        An ICT company that transforms your business by Improving Communication,
        Connecting Networks, Simplifying Work, and Driving Growth
      </p>
      <button className="text-white bg-[#335CAD] mt-2 lg:mt-4 mx-auto md:mx-0 xl:mx-0 rounded-md w-[80%] lg:w-[500px] xl:w-[550px] py-2 text-sm md:text-base xl:text-lg hover:bg-[#2a4b8d] transition-colors">Contact Us</button>
      <img src="/hero.jpg" alt="Network cables" className="w-[90%] md:w-[80%] lg:w-[60%] xl:w-[65%] mt-5 rounded-2xl" />
      <div className="bg-[#0F1E5A] text-white pt-5 pb-5 xl:pt-10 xl:pb-12 -mt-16 xl:-mt-48 w-[100%] flex items-center flex-col">
        <h2 className="text-2xl w-[85%] md:w-[70%] md:text-3xl xl:text-5xl font-bold xl:w-[1000px] text-[#CCD6EB] xl:leading-snug">Unleash Your Business potential with smart tech solutions</h2>
        <p className="text-sm w-[90%] md:w-[80%] md:text-base xl:w-[750px] mt-3 lg:mt-5 xl:leading-7 xl:text-lg">
          First Signal Global services limited is a dynamic and innovative ICT
          company dedicated to delivering cutting edge technology solutions that
          enhance business efficiency, improve communications and drive digital
          transformation
        </p>
        <div className="flex flex-col justify-center gap-5 mt-5 px-5 md:flex-row xl:gap-16 xl:mt-5">
          <img src="/left.png" alt="two men soldering" className="md:w-[45%]"/>
          <img src="/right.png" alt="one man soldering" className="md:w-[45%]"/>
        </div>
      </div>
    </section>
  );
}
