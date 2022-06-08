import { motion } from "framer-motion";
import Image from "next/image";
function Collaboration() {
  return (
    <>
      <section className="container mx-auto my-40 px-6 sm:px-1">
        <div className="flex justify-between md:flex-col-reverse md:gap-4 items-center">
          <div className="max-w-[44%] md:max-w-full">
            <h2 className="text-[55px] sm:text-[28px] sm:text-center text-[#1D1D1D] dark:text-[#E2E2E2] font-bold my-5">
              Interesting Collaboration With Us?
            </h2>
            <p className="text-xl sm:text-[14px] sm:text-center text-[#464646] dark:text-[#E2E2E2] font-Quicksand">
              Help you to reach your business goal
            </p>
            <button className="sm:block sm:mx-auto bg-[#377DFF] dark:bg-[#E2E2E2] text-[#FFFFFF] dark:text-[#0E0E0E] mt-5 py-2 px-7 rounded-[50px] drop-shadow-blue">
              Get Started
            </button>
          </div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 2 }}
            variants={{
              visible: { y: 0 },
              hidden: { y: 50 },
            }}
            className="relative overflow-hidden min-h-[400px] sm:min-h-[300px] flex md:-ml-[25px]"
          >
            <span className="h-fit imgspan relative after:bg-[url('/svg/bold_blue_pattern.svg')] after:absolute after:content-['']  after:w-[106px] after:h-[80px] after:bg-no-repeat after:top-[60px] after:left-[15px] sm:after:left-[25px] after:-z-10 ">
              <Image
                src="/images/Collaboration_1.png"
                alt="Collaboration image"
                width={325}
                height={288}
                className="z-30"
              />
            </span>
            <span className="h-fit relative before:bg-[url('/svg/long_orange_pattern.svg')] before:absolute before:content-[''] before:w-[200px] before:h-[80px] before:-bottom-[60px] before:left-[0px] before:bg-no-repeat">
              <Image
                src="/images/Collaboration_2.png"
                alt="Collaboration image"
                width={325}
                height={288}
                className="relative"
              />
            </span>
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default Collaboration;
