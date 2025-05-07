import Link from "next/link";
import React from "react";

const Nav = () => {
  return (
    <nav className="absolute left-0 top-0 w-screen p-2 flex justify-between gap-8 z-20 select-none">
      <div className="logo">
        <Link className="block uppercase text-black text-sm" href={"/"}>
          Mohit
        </Link>
      </div>

      <div className="links flex gap-8 ">
        <Link
          className="block uppercase text-black text-sm"
          href="mailto:mohit2005211@gmail.com"
        >
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
