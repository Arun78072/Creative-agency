import Image from "next/image";
import { motion } from "framer-motion";
const Banner = () => {
  return (
    <>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        variants={{
          visible: { opacity: 1 },
          hidden: { opacity: 0 },
        }}
        className="before:animate-wiggle overflow-hidden relative before:content-[''] before:absolute before:-right-[14px] before:top-32 before:bg-gradient-to-b from-[#FF8E8E] to-[#F62424] before:w-7 before:h-7 before:rounded-full"
      >
        <section className="container mx-auto px-6 pt-[60px]">
          <h1 className="text-[64px] sm:text-[30px] text-[#1D1D1D] dark:text-[#E2E2E2] font-extrabold text-center max-w-[780px] mx-auto">
            Make your dream business goal come true
          </h1>
          <p className="before:animate-wiggle hide_br text-center text-[#46464696] dark:text-[#E2E2E2] mt-[20px] text-[20px] sm:text-[16px] relative before:content-[''] before:absolute before:left-0 before:-bottom-[16px] before:bg-gradient-to-r from-[#4485FF] to-[#377DFF] before:w-7 before:h-7 before:rounded-full">
            when you need us for improve your business, <br /> then come with us
            to help your business have reach it, you just sit and feel that goal
          </p>
          <button className="bg-[#377DFF] dark:bg-[#E2E2E2] text-[#FFFFFF] dark:text-[#0E0E0E] block mx-auto mt-9 py-2 px-7 rounded-[50px] shadow-[0px 4px 8px rgba(55, 125, 255, 0.5)]">
            Start Project
          </button>

          <div className="mt-20 mx-auto text-center">
            <div className="w-[fit-content] mx-auto relative">
              <motion.span
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 2 }}
                variants={{
                  visible: { left: -80 },
                  hidden: { left: -200 },
                }}
                className="w-[fit-content] bg-white  dark:bg-[#0D0D0D] block py-5 sm:py-2 px-7 sm:px-2 rounded-2xl sm:rounded-[5px] shadow-lg absolute z-10 top-9 sm:-top-[30px] -left-[24px]"
              >
                <div className="flex gap-1.5 my-2 sm:my-0">
                  <span className="w-[24px] sm:w-[20px] relative">
                    <Image
                      src="/svg/star.svg"
                      alt="star icon"
                      layout="fill"
                      // width="24"
                      // height="24"
                    />
                  </span>
                  <p className="text-[#1D1D1D] sm:text-[8px] dark:text-[#E2E2E2] font-bold uppercase opacity-50">
                    Great Project
                  </p>
                </div>
                <div className="flex gap-1 items-center my-2">
                  <p className="text-[24px] sm:text-[12px] font-extrabold ">
                    800+{" "}
                  </p>
                  <p className="text-[24px] sm:text-[12px] font-semibold ">
                    Done
                  </p>
                </div>
              </motion.span>
              <div className="before:animate-wiggle w-[90%] sm:w-[100%] mx-auto relative before:content-[''] before:absolute before:-right-[160px] before:-top-10 before:bg-gradient-to-r from-[#4485FF] to-[#377DFF] before:w-7 before:h-7 before:rounded-full">
                <div className="before:animate-wiggle1 after:animate-wiggle1 pb-[10px] relative before:content-[''] before:absolute before:left-[130px] before:-top-4 before:bg-[url('/svg/blue_pattern.svg')]  before:w-[100px] before:h-[80px] before:bg-no-repeat after:bg-[url('/svg/red_pattern.svg')] after:absolute after:content-[''] after:left-[130px] after:w-[100px] after:h-[80px] after:bg-no-repeat after:-bottom-[8px] after:-z-10">
                  <Image
                    src="/images/banner_family.png"
                    alt="Banner Family Image"
                    width="739"
                    height="501"
                  />
                </div>
              </div>
              <motion.span
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 2 }}
                variants={{
                  visible: { right: -80 },
                  hidden: { right: -200 },
                }}
                className="w-[fit-content] bg-white dark:bg-[#0D0D0D] block py-5 sm:py-1 px-7 sm:px-2 rounded-2xl sm:rounded-[10px] shadow-lg absolute z-10 bottom-9 sm:bottom-0 -right-[50px] sm:-right-[16px]"
              >
                <div className="flex gap-1.5 my-2 items-center">
                  <span className="w-[32px] sm:w-[16px] h-[32px] sm:h-[16px] relative">
                    <Image
                      src="/images/user_profile.png"
                      alt="profile picture"
                      // width="32"
                      // height="32"
                      layout="fill"
                    />
                  </span>
                  <div>
                    <p className="text-[#1D1D1D] dark:text-[#E2E2E2] font-semibold text-left text-[10px] sm:text-[6px]">
                      Bill Adams
                    </p>
                    <p className="text-[#1D1D1D] dark:text-[#E2E2E2] opacity-50 text-[6px] text-left">
                      CEO UpTech
                    </p>
                  </div>
                </div>

                <p className="w-[125px] sm:w-[80px] text-[10px] sm:text-[6px] text-left">
                  “ This team is really the best in its field,I don&apos;t
                  regret working with them, and will come back again thanks “{" "}
                </p>
              </motion.span>
            </div>
          </div>
        </section>
      </motion.div>
    </>
  );
};
export default Banner;
