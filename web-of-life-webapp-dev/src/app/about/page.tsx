"use client";
import Navbar from "../components/navbar";
import Image from "next/image";
import RaviVarma from "@/assets/Ravi_varma.png";
import Works from "@/assets/aboutus_works.png";
import { CustomerFooter } from "../components/footer";
import { useTheme } from "next-themes";

export default function About() {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const headingColor = isDark ? "text-white" : "text-gray-900";
  const subheadingColor = isDark ? "text-gray-200" : "text-gray-800";
  const bodyColor = isDark ? "text-gray-300" : "text-gray-600";

  return (
    <div className="min-h-screen bg-white dark:bg-black transition-colors duration-300">
      <Navbar />
      
      {/* Main Content */}
      <main>
        <div className="max-w-6xl mx-auto px-6 lg:px-10 py-8 sm:py-12 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            {/* Left Side - Portrait Image */}
            <div className="flex justify-center lg:justify-start order-2 lg:order-1">
              <div className="relative">
                <Image
                  src={RaviVarma}
                  alt="Ravi Varma"
                  width={393}
                  height={460}
                  className="object-cover mt-22"
                  style={{
                    width: "393px",
                    height: "460px",
                    transform: "rotate(0deg)",
                    opacity: 1,
                  }}
                  priority
                />
              </div>
            </div>

            {/* Right Side - About Us Text */}
            <div className="order-1 lg:order-2">
              <h1
                className={`font-cinzel ${headingColor} text-[52px] leading-[68px] tracking-[0.6px] font-normal mb-6`}
              >
                ABOUT US
              </h1>

              <div className="space-y-2 sm:space-y-3">
                <h2
                  className={`font-cinzel ${subheadingColor} text-[14px] leading-[20px] tracking-[0.6px] font-light`}
                >
                  RAVI VARMA
                </h2>

                <p
                  className={`${bodyColor} text-[14px] leading-[20px] tracking-[0.6px] font-light`}
                >
                  At Loam & Root, we craft collectible furniture, one-of-a-kind
                  sculptures, decorative lighting, and unique decor pieces that
                  celebrate the raw, untouched soul of materials. Each creation
                  is born from a deep respect for stone, wood, metal, and earth
                  — where natural forms, textures, and colors are honored, not
                  altered.
                </p>
                <p
                  className={`${bodyColor} text-[14px] leading-[20px] tracking-[0.6px] font-light`}
                >
                  Our philosophy is simple: reveal the beauty already present.
                  We shape with intention, letting the material lead, enhancing
                  its essence without compromising its integrity.
                </p>
                <p
                  className={`${bodyColor} text-[14px] leading-[20px] tracking-[0.6px] font-light`}
                >
                  Every Loam & Root piece is a story — sculptural, functional,
                  and timeless. We also welcome custom commissions, tailoring
                  our artistry to reflect your personal vision while staying
                  rooted in our design ethos.
                </p>
                <p
                  className={`${bodyColor} text-[14px] leading-[20px] tracking-[0.6px] font-light`}
                >
                  Let the raw speak. Let the roots show.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* About2 Image Section */}
      <div className="w-full px-0 mb-12 py-20">
        <Image
          src={Works}
          alt="Our Works"
          width={723}
          height={260}
          className="w-full h-auto object-cover"
          priority
        />
      </div>
      
      <CustomerFooter />
    </div>
  );
}