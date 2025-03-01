export default function Missions() {
  return (
    <section className="border-b border-[#D9D9D9] px-5 pb-5 xl:pb-10 text-[#0A1540]">
      <div className="w-full max-w-screen-xl mx-auto flex flex-col lg:flex-row justify-center items-stretch gap-6 xl:gap-8">
        <div className="flex-1 basis-0 bg-[#D9D9D9] p-3 xl:p-8 rounded-lg shadow-lg">
          <h1 className="text-xl xl:text-4xl font-bold text-center mb-5">
            Our Mission
          </h1>
          <p className="text-sm md:text-base xl:text-lg text-center">
            Our mission is to provide top-tier ICT solutions that empower
            businesses to achieve their goals through innovation, efficiency,
            and reliability. We aim to be a trusted partner in the digital
            transformation journey of our clients, offering tailored services
            that meet the unique needs of each organization.
          </p>
        </div>
        <div className="flex-1 basis-0 bg-[#D9D9D9] p-3 xl:p-8 rounded-lg shadow-lg">
          <h1 className="text-xl xl:text-4xl font-bold text-center mb-5">
            Our Vision
          </h1>
          <p className="text-sm md:text-base xl:text-lg text-center">
            To be a leading ICT solutions provider recognized for excellence in
            service delivery, technological expertise, and customer
            satisfaction in Nigeria and beyond
          </p>
        </div>
      </div>
    </section>
  );
}