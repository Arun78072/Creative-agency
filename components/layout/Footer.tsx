import Image from "next/image";
import Link from "next/link";
function Footer() {
  return (
    <>
      <section className="bg-[#383638]">
        <div className="container mx-auto py-20 md:py-7 px-5">
          <div className="justify-between lg:justify-start lg:gap-x-[100px] lg:gap-y-[20px] gap-3 flex flex-wrap mb-20">
            <div className="lg:w-full md:w-full">
              <div className="bg-white w-[183px] h-[68px] rounded-lg px-4 py-2 flex gap-3 lg:col-span-5 md:mb-8  ">
                <Image
                  src="/svg/logo.svg"
                  alt="website logo"
                  width={45}
                  height={40}
                />
                <div>
                  <h3 className="text-[#1D1D1D] text-xl font-semibold">
                    Agency
                  </h3>
                  <h5 className="text-[#464646] text-base font-Quicksand ">
                    Creative
                  </h5>
                </div>
              </div>
            </div>
            <div className="sm:w-full">
              <h2 className="text-white text-[22px] sm:text-[18px] font-Quicksand font-bold">
                Terms & policies
              </h2>
              <h3 className="text-white text-[18px] sm:text-[16px] font-Quicksand mt-6 sm:mt-4">
                <Link href="/">Terms of Service</Link>
              </h3>
              <h3 className="text-white text-[18px] sm:text-[16px] font-Quicksand mt-6 sm:mt-4">
                <Link href="/">Privacy Policy</Link>
              </h3>
            </div>
            <div className="sm:w-full sm:mt-8">
              <h2 className="text-white text-[22px] sm:text-[18px] font-Quicksand font-bold">
                Company
              </h2>
              <h3 className="text-white text-[18px] sm:text-[16px] font-Quicksand mt-6 sm:mt-4">
                <Link href="/">Home</Link>
              </h3>
              <h3 className="text-white text-[18px] sm:text-[16px] font-Quicksand mt-6 sm:mt-4">
                <Link href="#about">About Us</Link>
              </h3>
              <h3 className="text-white text-[18px] sm:text-[16px] font-Quicksand mt-6 sm:mt-4">
                <Link href="/">Contact Us</Link>
              </h3>
            </div>
            <div className="sm:w-full sm:mt-8">
              <h2 className="text-white text-[22px] sm:text-[18px] font-Quicksand font-bold">
                Contact
              </h2>
              <h3 className="text-white text-[18px] sm:text-[16px] font-Quicksand mt-6 sm:mt-4">
                <Link href="tel:893912392190">(+62) 893912392190</Link>
              </h3>
              <h3 className="text-white text-[18px] sm:text-[16px] font-Quicksand mt-6 sm:mt-4">
                <Link href="mailto:agecnycr@gmail.com">agecnycr@gmail.com</Link>
              </h3>
            </div>
            <div className="xxl:w-[334px] xl:w-[300px] sm:mt-8">
              <h2 className="text-white text-[22px] sm:text-[18px] font-Quicksand font-bold">
                Location
              </h2>
              <h3 className="text-white text-[18px] sm:text-[16px] font-Quicksand mt-6 leading-10 sm:mt-4">
                PT Osiris Real Estate Internasional Jl. KH. Wahid Hasyim Kel
                No.10D Jakarta, Indonesia
              </h3>
              <h3 className="text-white text-[18px] sm:text-[16px] font-Quicksand mt-6 sm:mt-4">
                team@OsirisRealEstate.com
              </h3>
            </div>
          </div>
          <div>
            <ul className="flex justify-center gap-6">
              <li>
                <Image
                  src="/svg/facebook.svg"
                  alt="Facebook icon"
                  width={40}
                  height={40}
                />
              </li>
              <li>
                <Image
                  src="/svg/instagram.svg"
                  alt="Instagram icon"
                  width={40}
                  height={40}
                />
              </li>
              <li>
                <Image
                  src="/svg/linkdln.svg"
                  alt="Linkdln icon"
                  width={40}
                  height={40}
                />
              </li>
              <li>
                <Image
                  src="/svg/mail.svg"
                  alt="Email icon"
                  width={40}
                  height={40}
                />
              </li>
              <li>
                <Image
                  src="/svg/twitter.svg"
                  alt="Twitter icon"
                  width={40}
                  height={40}
                />
              </li>
            </ul>
            <hr className="w-[500px] md:w-auto mx-auto mt-4" />
            <p className="font-Quicksand text-white text-[18px] text-center mt-6">
              Copyright @ 2022 Agency Creative. All Right Reserved
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
export default Footer;
