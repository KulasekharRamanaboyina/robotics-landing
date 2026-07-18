import Image from "next/image";

export default function TrustedBy() {
  const brands = [
    {
      name: "Motherson Group",
      src: "/logos/mothersongroup_logo.jpg",
      width: 120,
      height: 35,
    },
    {
      name: "Unbox Robotics",
      src: "/logos/unbox-robotics_logo.webp",
      width: 110,
      height: 35,
    },
    {
      name: "Flexli",
      src: "/logos/flexli_logo.png",
      width: 80,
      height: 35,
    },
    {
      name: "ANSCER Robotics",
      src: "/logos/anscer-logo.png",
      width: 100,
      height: 35,
    },
    {
      name: "Anzo Controls",
      src: "/logos/anzo-logo.png",
      width: 100,
      height: 35,
    },
  ];

  return (
    <section className="relative z-10 py-10 border-y border-white/5 bg-[#07050E]/40 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center gap-6 lg:flex-row lg:justify-between lg:gap-8">

          {/* Label */}
          <div className="text-center lg:text-left flex-shrink-0">
            <h2 className="text-xs font-bold uppercase tracking-widest text-gray-500">
              Trusted by Robotics & Industrial Tech Brands
            </h2>
          </div>

          {/* Logos Ribbon Container: Scrolling marquee on mobile, static flex row on desktop */}
          <div className="marquee-container w-full lg:w-auto">
            <div className="marquee-content flex items-center">

              {/* First Set of Logos */}
              {brands.map((brand) => (
                <div
                  key={`${brand.name}-first`}
                  className="flex-shrink-0 flex items-center justify-center opacity-90 hover:opacity-100 transition-opacity duration-300 relative h-9 w-28"
                >
                  <Image
                    src={brand.src}
                    alt={`${brand.name} logo`}
                    fill
                    className="object-contain"
                    sizes="112px"
                    loading="lazy"
                  />
                </div>
              ))}

              {/* Second Set of Logos (For seamless looping marquee animation on mobile/tablet) */}
              {brands.map((brand) => (
                <div
                  key={`${brand.name}-second`}
                  className="flex-shrink-0 lg:hidden flex items-center justify-center opacity-90 hover:opacity-100 transition-opacity duration-300 relative h-9 w-28"
                >
                  <Image
                    src={brand.src}
                    alt={`${brand.name} logo`}
                    fill
                    className="object-contain"
                    sizes="112px"
                    loading="lazy"
                  />
                </div>
              ))}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
