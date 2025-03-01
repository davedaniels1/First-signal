"use client";

export default function Clients() {
  const clients = [
    { src: "/dover.png", alt: "Dover", className: "h-10 xl:h-24" },
    { src: "/ndu.png", alt: "NDU", className: "h-10 xl:h-24" },
    { src: "/spie.png", alt: "SPIE", className: "h-10 xl:h-24" },
    { src: "/ks-energy.png", alt: "KS Energy", className: "h-10 xl:h-24" },
    { src: "/merald.png", alt: "Merald", className: "h-10 xl:h-24" },
    { src: "/tadoben.png", alt: "Tadoben", className: "h-10 xl:h-24" },
  ];

  return (
    <section className="my-5 xl:my-10 flex flex-col items-center justify-center">
      <h2 className="text-2xl xl:text-4xl font-bold text-center mb-4 xl:mb-6 text-[#0A1540]">Our Clients</h2>
      <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex animate-slide">
          {/* First set of images */}
          <div className="flex shrink-0 items-center gap-10">
            {clients.map((client, index) => (
              <img
                key={`first-${index}`}
                src={client.src}
                alt={client.alt}
                className={`${client.className} shrink-0`}
              />
            ))}
          </div>
          {/* Second set of images */}
          <div className="ml-8 flex shrink-0 items-center gap-10">
            {clients.map((client, index) => (
              <img
                key={`second-${index}`}
                src={client.src}
                alt={client.alt}
                className={`${client.className} shrink-0`}
              />
            ))}
          </div>
          {/* Third set of images (for extra smoothness) */}
          <div className="ml-8 flex shrink-0 items-center gap-10">
            {clients.map((client, index) => (
              <img
                key={`third-${index}`}
                src={client.src}
                alt={client.alt}
                className={`${client.className} shrink-0`}
              />
            ))}
          </div>
        </div>

        <style jsx>{`
          .animate-slide {
            animation: slide 10s linear infinite;
          }

          @keyframes slide {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-33.33%);
            }
          }
        `}</style>
      </div>
    </section>
  );
}
