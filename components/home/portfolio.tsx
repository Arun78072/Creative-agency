import { motion } from "framer-motion";
import Image from "next/image";
function Portfolio() {
  return (
    <>
      <section
        className="container mx-auto my-40 px-6 overflow-hidden"
        id="project"
      >
        <div>
          <h5 className="text-center text-2xl text-[#377DFF] dark:text-[#E2E2E2] font-Quicksand font-semibold sm:text-[14px]">
            Our Portfolio
          </h5>
          <h2 className="text-center text-[55px] text-[#1D1D1D] dark:text-[#E2E2E2] font-bold my-5 sm:my-0 sm:text-[24px]">
            What do we do
          </h2>
          <p className="before:animate-wiggle12 text-[20px] sm:text-[14px] sm:mt-4 text-[#464646] dark:text-[#E2E2E2] max-w-[680px] text-center mx-auto font-Quicksand relative before:content-[''] before:absolute before:-right-56 before:-top-4 before:bg-[url('/svg/purple_pattern.svg')]  before:w-[100px] before:h-[80px] before:bg-no-repeat before:-rotate-12">
            all projects that we have already done , proven can help to use more
            comfortable, then can used by client from our business
          </p>
          <div className="flex gap-16 sm:flex-wrap sm:justify-center md:gap-2 items-center mt-20 sm:mt-3 relative after:bg-[url('/svg/purple_pattern.svg')] after:absolute after:content-['']  after:w-[100px] after:h-[80px] after:bg-no-repeat after:top-1/4 after:right-[61%] after:-z-10 after:rotate-45">
            <motion.div whileHover={{ rotate: 2 }} className="relative">
              <Image
                src="/images/design_byte_app.png"
                alt="Design Byte App"
                width={350}
                height={350}
              />
              <h2 className="absolute bottom-7 left-7 text-[#fff] font-bold font-Quicksand text-2xl">
                Design Byte App
              </h2>
            </motion.div>
            <motion.div whileHover={{ rotate: 2 }} className="relative">
              <Image
                src="/images/cloud_app.png"
                alt="Cloud App"
                width={400}
                height={400}
              />
              <h2 className="absolute bottom-7 left-7 text-[#fff] font-bold font-Quicksand text-2xl">
                Cloud App
              </h2>
            </motion.div>
            <motion.div whileHover={{ rotate: 2 }} className="relative">
              <Image
                src="/images/design_furniture_app.png"
                alt="Design Furniture App"
                width={350}
                height={350}
              />
              <h2 className="absolute bottom-7 left-7 text-[#fff] font-bold font-Quicksand text-2xl">
                Design Furniture App
              </h2>
            </motion.div>
          </div>
          <button className="text-[#377DFF] dark:text-[#E2E2E2]  block border-[1.5px] border-[#377DFF] dark:border-[#E2E2E2] mx-auto mt-5 py-2 px-7 rounded-[50px] shadow-[0px 4px 8px rgba(55, 125, 255, 0.5)]">
            See All Portfolio
          </button>
        </div>
      </section>
    </>
  );
}

export default Portfolio;
