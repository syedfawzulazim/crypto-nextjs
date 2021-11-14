import React from "react";
import { Avatar } from "@material-ui/core";
import styles from "./styles/SideMenu.module.scss";

const SideMenuTop: React.FC = () => {
  return (
    <div className={styles["sideMenu-top"]}>
      <Avatar
        alt="avatar"
        src="https://simg.nicepng.com/png/small/247-2478681_mrs-voruganti-rajyalaxmi-100-amaravati-bricks-11-19.png"
      />
      <div className={styles["sideMenu-top__info"]}>
        <h6>Syed Fawzul Azim</h6>
      </div>
    </div>
  );
};

export default SideMenuTop;
