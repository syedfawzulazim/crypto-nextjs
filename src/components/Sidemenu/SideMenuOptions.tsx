import React, { useReducer, useState, useCallback } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import styles from "./styles/SideMenu.module.scss";

const SideMenuOptions = (props) => {
  const onClickHandler = () => {
    // props.onClick(props.item["title"]);
  };

  const router = useRouter();

  console.log(router);
  console.log(props.item.title.toLowerCase());
  return (
    <li
      key={props.index}
      className={styles.sideMenu__bottom__li}
      // style={props.state ? { backgroundColor: 'red' } : { backgroundColor: '' }}
      onClick={onClickHandler}
    >
      <Link key={props.index} href={props.item.title.toLowerCase()}>
        <a
          className={`${router.pathname == props.item.title ? "active" : ""} ${
            styles["sideMenu__bottom__link"]
          }`}
        >
          {props.item.icon}
          {props.item.title}
        </a>
      </Link>
    </li>
  );
};

export default SideMenuOptions;
