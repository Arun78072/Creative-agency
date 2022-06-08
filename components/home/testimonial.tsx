import { motion } from "framer-motion";
import Image from "next/image";
const Data = [
  {
    id: 1,
    img: "/images/Angel_Rose.png",
    name: "Angel Rose",
    profile: "Creative Manager",
    desc: "There are many variations passages of Lorem Ipsum majority some by words which don&apos;t look .",
  },
  {
    id: 2,
    img: "/images/Angel_Rose.png",
    name: "Angel Rose",
    profile: "Creative Manager",
    desc: "There are many variations passages of Lorem Ipsum majority some by words which don&apos;t look .",
  },
  {
    id: 3,
    img: "/images/Angel_Rose.png",
    name: "Angel Rose",
    profile: "Creative Manager",
    desc: "There are many variations passages of Lorem Ipsum majority some by words which don&apos;t look .",
  },
];
function Testimonial() {
  return (
    <section className="container mx-auto my-40 px-6">
      <h5 className="text-center text-2xl text-[#377DFF] dark:text-[#E2E2E2] font-Quicksand font-semibold sm:text-[14px]">
        Testimonial
      </h5>
      <h2 className="text-center text-[55px] sm:text-[24px] text-[#1D1D1D] dark:text-[#E2E2E2] font-bold my-5 sm:my-0 relative after:bg-[url('/svg/blue_pattern.svg')] after:absolute after:content-['']  after:w-[100px] after:h-[80px] after:bg-no-repeat after:-top-[100px] after:left-0 after:-z-10 after:rotate-[20deg]">
        People Talk about us
      </h2>
      <div className="flex gap-10 justify-center flex-wrap relative after:bg-[url('/svg/blue_pattern.svg')] after:absolute after:content-['']  after:w-[100px] after:h-[80px] after:bg-no-repeat after:-bottom-[50px] after:right-0 after:-z-10 after:rotate-[20deg] ">
        {Data.map((i) => (
          <motion.div
            whileHover={{ y: -10 }}
            key={i.id}
            className="shadow-lg rounded-2xl max-w-[370px] md:max-w-full max-h-[340px] sm:max-h-fit  px-10 py-16 dark:bg-[#0B0F15]  bg-white"
          >
            <div className="flex items-center gap-5">
              <Image src={i.img} alt={i.name} width={70} height={70} />
              <div>
                <h3 className="text-[#377DFF] dark:text-[#E2E2E2] text-xl sm:text-[18px] font-semibold">
                  {i.name}
                </h3>
                <h5 className="text-[#464646] dark:text-[#E2E2E2] text-[11px] font-Quicksand ">
                  {i.profile}
                </h5>
              </div>
            </div>
            <p className="text-[#464646] dark:text-[#E2E2E2] text-lg sm:text-[14px] font-Quicksand mt-3">
              {i.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Testimonial;
