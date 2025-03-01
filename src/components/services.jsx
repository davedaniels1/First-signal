export default function Services() {
  let Services = [
    {
      title: "Fibre Optics",
      description:
        "Designing, building and maintaing the technology systems and frame work that supports business operation",
      image: "/fibre.jpg",
      color: "bg-[#D9D9D933]",
    },
    {
      title: "CCTV Surveillance",
      description:
        "Installing closed-circuit television cameras to monitor and record activities in specific areas for security purpose",
      image: "/cctvinstall.jpg",
      color: "bg-[#5FC2947D]",
    },
    {
      title: "Network Solutions",
      description:
        "Creating a range of services, technologies and strategies designed to manage and optimize your company’s network infrastracture",
      image: "/network.jpg",
      color: "bg-[#FDF0D5B2]",
    },
  ];
  return (
    <section className="flex flex-col items-center pb-4">
      {Services.map((service) => (
        <div key={service.title} className={`w-full ${service.color}`}>
          <div className="px-4 md:px-8 xl:px-0 py-6 w-full max-w-screen-xl mx-auto flex flex-col-reverse gap-3 md:flex-row justify-between items-center">
            <div className="flex flex-col gap-4 xl:gap-6 text-center md:text-left xl:w-[700px]">
              <h2 className="text-[#0A1540] font-semibold text-xl xl:text-3xl">{service.title}</h2>
              <p className="text-[#000033] lg:w-[75%] xl:w-[60%] text-sm md:text-base xl:text-lg">
                {service.description}
              </p>
              <button className="text-white bg-[#335CAD] mx-auto md:mx-0 xl:mx-0 rounded-md w-[200px] py-2 text-sm md:text-base xl:text-lg hover:bg-[#2a4b8d] transition-colors">
                Book Service
              </button>
            </div>
            <div className="md:w-[400px] md:h-[300px] h-[200px] xl:h-[400px]">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
