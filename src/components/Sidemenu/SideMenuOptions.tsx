import React from "react";
import Link from "next/link";
import styles from "./styles/SideMenu.module.scss";

export type itemType = {
  id: string;
  title: string;
  icon: JSX.Element;
};

const SideMenuOptions: React.FC<{ index: number; item: itemType }> = (
  props
) => {
  const onClickHandler = () => {
    console.log(props.item["title"]);
  };

  return (
    <li
      key={props.index}
      className={styles.sideMenu__bottom__li}
      // style={props.state ? { backgroundColor: 'red' } : { backgroundColor: '' }}
      onClick={onClickHandler}
    >
      <Link key={props.index} href={`/${props.item.title.toLowerCase()}`}>
        <a className={styles["sideMenu__bottom__link"]}>
          {props.item.icon}
          {props.item.title}
        </a>
      </Link>
    </li>
  );
};

export default SideMenuOptions;
