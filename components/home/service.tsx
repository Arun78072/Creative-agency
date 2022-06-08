import Image from "next/image";
import { motion } from "framer-motion";
import { HiArrowNarrowRight } from "react-icons/hi";
import Link from "next/link";
function Service() {
  const services = [
    {
      id: 1,
      img: "/svg/social_media_managemment.svg",
      text: "Social Media Management",
    },
    {
      id: 2,
      img: "/svg/search_engin_optimization.svg",
      text: "Search Engine Opimization",
    },
    {
      id: 3,
      img: "/svg/design.svg",
      text: " Design",
    },
    {
      id: 4,
      img: "/svg/ads.svg",
      text: "Ads",
    },
  ];

  const service = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 1,
        staggerChildren: 0.4,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <>
      <section className="container mx-auto mt-20 sm:mt-10 px-6" id="services">
        <div className="flex items-center md:flex-col justify-between md:gap-10 lg:gap-5">
          <div className="w-[40%] md:w-auto">
            <h5 className="text-2xl text-[#377DFF] dark:text-[#E2E2E2] font-Quicksand font-semibold md:text-center sm:text-[14px]">
              Our Services
            </h5>
            <h2 className="text-[55px] text-[#1D1D1D] dark:text-[#E2E2E2] font-bold leading-[70px] sm:text-[24px] md:text-center">
              Perfect and Fast Movement
            </h2>
            <p className="text-[20px] text-[#464646] dark:text-[#E2E2E2] sm:text-[14px] md:text-center font-Quicksand">
              We move with make a Creative Strategy for help your business goal,
              we help to improve your income by a services we have. make your
              content look interesting and make people look for your business
            </p>
            <button className="text-[#377DFF] dark:text-[#E2E2E2] inline-flex gap-2  items-center float-right sm:float-left mt-8 sm:mt-4">
              <Link href="/">Read more</Link>
              <HiArrowNarrowRight />
            </button>
          </div>
          <div className="w-[56%] md:w-auto sm:mt-5">
            <motion.div
              className="flex flex-wrap justify-center gap-7"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              variants={{
                visible: {
                  opacity: 1,
                  scale: 1,
                  transition: {
                    delayChildren: 0.5,
                    staggerChildren: 0.2,
                  },
                },
                hidden: { opacity: 1, scale: 0 },
              }}
            >
              {services.map((i) => (
                <motion.div
                  key={i.id}
                  className="border-2 border-[#8181811a] text-center p-6 rounded-[30px] w-64 hover:shadow-lg ease-in-out duration-500 lg:w-[188px]"
                  variants={item}
                >
                  <Image src={i.img} alt={i.text} width={100} height={100} />
                  <h2 className="text-2xl lg:text-[20px] sm:text-[16px] sm:max-w-[120px] mx-auto  font-bold mt-6 leading-[130%] ">
                    {i.text}
                  </h2>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Service;
