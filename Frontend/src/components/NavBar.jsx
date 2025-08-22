import React from "react";
//sample nav bar only currently, remove this comment when you start working on it.
const NavBar = () => {
  return (
    <nav>
      <ul className="hidden lg:flex items-center gap-6 xl:gap-10">
        <li>
            Resources & Blogs
       
        </li>
        <li>-
            Projects
        </li>
        <li>
            Events
        </li>
        <li>
            Forum
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
