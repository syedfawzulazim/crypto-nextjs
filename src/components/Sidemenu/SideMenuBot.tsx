import React from "react";
import { ParsedUrlQuery } from "querystring";
import SideMenuOptions from "./SideMenuOptions";
import sideMenuData from "./sideMenuData";
import styles from "./styles/SideMenu.module.scss";

function SideMenuBot() {
  return (
    <div className={styles.sideMenu__bottom}>
      <ul>
        {sideMenuData.map((item, index: number) => (
          <SideMenuOptions key={index} item={item} index={index} />
        ))}
      </ul>
    </div>
  );
}

export default SideMenuBot;
