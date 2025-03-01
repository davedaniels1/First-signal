import React from "react";

export default function Products() {
  const products = [
    {
      name: "IT infrastructure Development",
      description:
        "Designing and implementing robust IT infrastructure that supports business operations and scalability.",
      image: "/infrastructure.jpg",
      color: "bg-[#D9D9D9]",
    },
    {
      name: "Fibre Optics",
      description:
        "Designing and impelementing fiber optics network to support and make clients buinsess flexible and efficient",
      image: "/cables.jpg",
      color: "bg-[#D9D9D9]",
    },
    {
      name: "Network Solution",
      description:
        "Providing secure and reliable networking solutins including LAN, WAN and Wireless networking services.",
      image: "/network-solution.jpg",
      color: "bg-[#FDF0D5B2]",
    },
    {
      name: "IT Consulting",
      description:
        "providing expert advice and strategies to help businesses make informed technology desisions.",
      image: "/consulting.jpeg",
      color: "bg-[#FDF0D5B2]",
    },
    {
      name: "CCTV Survelliance",
      description:
        "Security is vital for growth, and video surveillance systems offer a modern solution to protect lives and property.",
      image: "/cctvinstall.jpg",
      color: "bg-[#5FC2947D]",
    },
    {
      name: "IT Executive Training",
      description:
        "Designing, building and maintaing the technology systems and frame work that supports business operation",
      image: "/training.jpg",
      color: "bg-[#5FC2947D]",
    },
  ];

  return (
    <div className="w-full border-b border-[#D9D9D9]">
      <section className="container mx-auto px-4 md:px-8 lg:px-9 xl:px-0 py-5 text-[#0A1540] w-full max-w-screen-xl">
        <h1 className="text-2xl xl:text-4xl font-bold text-center mb-3 xl:mb-10">
          Services we Offer
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 xl:gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className={`${product.color} rounded-xl p-4 xl:p-6 flex flex-col md:justify-center md:items-center md:flex-row items-start gap-4 xl:gap-6`}
            >
              <div className="flex-1 flex flex-col items-center md:items-start space-y-2 xl:space-y-4">
                <h2 className="text-lg md:text-xl xl:text-2xl text-center md:text-left font-bold">
                  {product.name}
                </h2>
                <p className="text-sm md:text-base xl:text-lg text-center md:text-left">
                  {product.description}
                </p>
                <button className="text-white bg-[#335CAD] rounded-md w-[200px] py-2 text-sm md:text-base xl:text-lg hover:bg-[#2a4b8d] transition-colors">
                  Contact Us
                </button>
              </div>
              <div className="w-full md:w-[300px] h-[200px] xl:h-[250px]">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}