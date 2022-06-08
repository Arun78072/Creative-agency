import Image from "next/image";
import { AiOutlinePlayCircle } from "react-icons/ai";
import { motion } from "framer-motion";
import { useEffect } from "react";

const About = () => {
  return (
    <>
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 2 }}
        variants={{
          visible: { opacity: 1 },
          hidden: { opacity: 0 },
        }}
        className="container mx-auto my-20 py-20 sm:my-10 sm:py-10 px-6 "
        id="about"
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          variants={{
            visible: { y: 0 },
            hidden: { y: 60 },
          }}
        >
          <h5 className="text-center text-2xl sm:text-[14px] text-[#377DFF] dark:text-[#E2E2E2] font-['Quicksand'] font-semibold">
            About Us
          </h5>
          <h2 className="text-center text-[55px] sm:text-[24px] text-[#1D1D1D] dark:text-[#E2E2E2] font-bold py-7 sm:py-2   ">
            Our Teammate
          </h2>
        </motion.div>
        <div className="flex items-center md:gap-10 md:flex-col-reverse lg:justify-between">
          <div className="before:animate-wiggle1 after:animate-wiggle1 w-[42%] md:w-auto   md:mb-10 text-center relative before:content-[''] before:absolute before:-left-4 before:-top-4 before:bg-[url('/svg/orange_pattern.svg')]  before:w-[100px] before:h-[80px] before:bg-no-repeat after:bg-[url('/svg/purple_pattern.svg')] after:absolute after:content-[''] after:-right-6 after:w-[100px] after:h-[80px] after:bg-no-repeat after:-bottom-6 after:-z-10">
            <Image
              src="/images/our_teammate.png"
              alt="OUR Teammate Picture"
              width={565}
              height={402}
            />
          </div>
          <div className="w-1/2 md:w-full pl-10 lg:pl-4 md:pl-0 sm:mb-10">
            <p className="font-Quicksand text-[20px] sm:text-[14px] text-[#464646] dark:text-[#E2E2E2]">
              We move with make a Creative Strategy for help your business goal,
              we help to improve your income by a services we have. make your
              content look interesting and make people look for your business
              <br />
              <br />
              We move with make a Creative Strategy for help your business goal,
              we help to improve your income by a services we have. make your
              content look interesting and make people look for your business
            </p>
            <div className="flex gap-[20px] mt-6 sm:justify-evenly">
              <button className="bg-[#377DFF] dark:bg-[#E2E2E2] text-[#FFFFFF] dark:text-[#0E0E0E] py-2 px-7 rounded-[50px] drop-shadow-blue">
                About Us
              </button>
              <button className="text-[#377DFF] dark:text-[#E2E2E2] inline-flex gap-2 border-[1.5px] border-[#377DFF] dark:border-[#E2E2E2] items-center py-2 px-7 rounded-[50px] shadow-[0px 4px 8px rgba(55, 125, 255, 0.5)]">
                <AiOutlinePlayCircle className="text-[22px] " />
                Our Story
              </button>
            </div>
          </div>
        </div>
      </motion.section>
    </>
  );
};
export default About;
