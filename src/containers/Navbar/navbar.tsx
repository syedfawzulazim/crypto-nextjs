import React from "react";
import styles from "./navbar.module.scss";
import Link from "next/link";
const Navbar: React.FC = () => {
  return (
    <div className={styles.div}>
      <Link href={"/"} passHref>
        <h2 style={{ textAlign: "center" }}>CryptoMarket</h2>
      </Link>
    </div>
  );
};

export default Navbar;
