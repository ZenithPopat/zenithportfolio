import NavBarLogo from "./NavBarLogo";
import NavBarLinks from "./NavBarLinks";
import NavBarBtn from "./NavBarBtn";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";

const NavBarMain = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <nav className="mx-auto max-w-[1300px] px-4 w-full fixed left-[50%] -translate-x-[50%] z-20 flex gap-4 mt-2">
      <div
        className="flex justify-between w-full mx-auto bg-black items-center rounded-r-full rounded-l-full p-6
            border-[0.5px] border-orange"
      >
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Scroll to top"
        >
          <NavBarLogo />
        </button>
        <div className={`${menuOpen ? "sm:block" : "sm:hidden"} lg:block`}>
          <NavBarLinks closeMenu={() => setMenuOpen(false)} />
        </div>
        <NavBarBtn />
        <button
          className="flex lg:hidden sm:block bg-black items-center justify-center border-[0.5px] text-2xl p-3 border-orange rounded-full text-white"
          onClick={toggleMenu}
        >
          <GiHamburgerMenu />
        </button>
      </div>
      {/* <div className="flex lg:hidden sm:block p-6 bg-black items-center justify-center rounded-full border-[0.5px] border-orange">
      </div> */}
    </nav>
  );
};

export default NavBarMain;
