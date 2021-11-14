import React, { useState } from "react";
import styles from "./sidemenu.module.scss";
import layout from "../../styles/layout.module.scss";
import SideMenuTop from "../../components/Sidemenu/SideMenuTop";
import SideMenuBot from "../../components/Sidemenu/SideMenuBot";

const SideMenu = () => {
  return (
    <div className={`${styles.sideMenu} ${layout["hide-for-mobile-tablet"]}`}>
      <SideMenuTop />
      <SideMenuBot />
    </div>
  );
};

export default SideMenu;
