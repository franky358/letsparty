import React, { useEffect, useState } from "react";
import Link from "next/link";
import { MENUITEMS } from "../../constant/menu2";
import { IoMdClose } from "@react-icons/all-files/io/IoMdClose";

const Nav2 = () => {
  const [mainmenu, setMainMenu] = useState(MENUITEMS);
  const [sidebar, setSidebar] = useState(false);

  function closeSidebar() {
    setSidebar(!sidebar);
    document.querySelector(".navbar").classList.remove("openSidebar");
  }

  useEffect(() => {
    const currentUrl = location.pathname;
    mainmenu.forEach((item) => {
      if (item.path === currentUrl) {
        setNavActive(item);
      }
    });
  }, []);

  const setNavActive = (item) => {
    MENUITEMS.forEach((menuItem) => {
      menuItem.active = menuItem === item;
    });
    setMainMenu([...MENUITEMS]);
  };

  const toggletNavActive = (item) => {
    MENUITEMS.forEach((menuItem) => {
      menuItem.active = false;
    });
    item.active = true;
    setMainMenu([...MENUITEMS]);
  };

  return (
    <div className={`navbar`} id="togglebtn">
      <div
        className="responsive-btn"
        style={{ display: "flex", justifyContent: "flex-end" }}
      >
        <a className="btn-back" onClick={closeSidebar}>
          <IoMdClose color="#FC75AB" />
        </a>
      </div>
      <ul className="main-menu">
        {MENUITEMS.map((menuItem, i) => {
          return (
            <li key={i} className={`${menuItem.active ? "active" : ""}`}>
              <Link
                href={`${menuItem.path}`}
                onClick={() => toggletNavActive(menuItem)}
              >
                <span>{menuItem.title}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Nav2;
