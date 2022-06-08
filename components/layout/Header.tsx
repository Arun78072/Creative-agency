import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { FiSun } from "react-icons/fi";
import { BsMoonFill } from "react-icons/bs";
import { RiMenu3Fill } from "react-icons/ri";
import { useState, useEffect } from "react";
import { CgCloseR } from "react-icons/cg";

const Header = () => {
  const { theme, setTheme } = useTheme();
  const [menu, setMenu] = useState("hide");

  useEffect(() => {
    if (menu === "hide") {
      document.body.style.overflow = "visible";
    } else {
      document.body.style.overflow = "hidden";
    }
  }, [menu]);

  const menus = [
    {
      id: "1",
      name: "Home",
      link: "/",
      active: "active",
    },
    {
      id: "2",
      name: "About",
      link: "#about",
      active: "",
    },
    {
      id: "3",
      name: "Sevices",
      link: "#services",
      active: "",
    },
    {
      id: "4",
      name: "Projects",
      link: "#project",
      active: "",
    },
  ];

  const Sitemenu = () => {
    return (
      <>
        <span className="close_menu lg:hidden xl:hidden xxl:hidden">
          <button
            onClick={() => {
              setMenu(menu === "hide" ? "show" : "hide");
            }}
          >
            <CgCloseR />
          </button>
        </span>
        <ul className="flex gap-10 pt-3">
          {menus.map((i) => (
            <li
              key={i.id}
              className="font-Quicksand text-lg text-[#1D1D1D] dark:text-[#fff] ease-in-out duration-300 hover:-mt-[2px]"
              id={i.active}
            >
              <Link href={i.link}>
                <a
                  onClick={() => {
                    setMenu("hide");
                    document.body.style.overflow = "visible";
                  }}
                >
                  {" "}
                  {i.name}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </>
    );
  };

  return (
    <>
      <section className="container mx-auto pt-5">
        <div className="flex items-center justify-between">
          <div className=" w-[183px] h-[68px] rounded-lg px-4 py-2 flex gap-3 items-center">
            <Image
              src="/svg/logo.svg"
              alt="website logo"
              width={45}
              height={40}
            />
            <div>
              <h3 className="text-[#1D1D1D] dark:text-[#E2E2E2] text-xl font-semibold leading-5">
                Agency
              </h3>
              <h5 className="text-[#464646] dark:text-[#E2E2E2] text-base font-Quicksand ">
                Creative
              </h5>
            </div>
          </div>
          <div className="md:hidden">
            <Sitemenu />
          </div>
          <div className="hidden md:block side_menu">
            {menu === "show" ? (
              <>
                <Sitemenu />
              </>
            ) : (
              <></>
            )}
          </div>
          <div className="flex items-center pr-8">
            <button className="md:hidden text-[#377DFF] dark:text-[#fff]  border-[1.5px] border-[#377DFF] dark:border-[#fff] py-2 px-7 rounded-[50px] shadow-[0px 4px 8px rgba(55, 125, 255, 0.5)] w-[140px]">
              Contact us
            </button>
            <button
              className=" hidden md:block"
              onClick={() => {
                setMenu(menu === "show" ? "hide" : "show");
              }}
            >
              <RiMenu3Fill />
            </button>
            <button
              aria-label="Toggle Dark Mode"
              type="button"
              className="p-3 h-12 order-2 md:order-3 w-[20px]"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              {theme === "dark" ? (
                <>
                  <BsMoonFill />
                </>
              ) : (
                <>
                  <FiSun />
                </>
              )}
            </button>
          </div>
        </div>
      </section>
    </>
  );
};
export default Header;
