import React from "react";
import { ParsedUrlQuery } from "querystring";
import SideMenuOptions from "./SideMenuOptions";
import sideMenuData from "./sideMenuData";
import styles from "./styles/SideMenu.module.scss";
import { GetStaticProps, GetStaticPaths } from "next";

const SideMenuBot: React.FC = () => {
  return (
    <div className={styles.sideMenu__bottom}>
      <ul>
        {sideMenuData.map((item, index) => (
          <SideMenuOptions key={index} item={item} index={index} />
        ))}
      </ul>
    </div>
  );
};

type Props = {
  post: Array<{}>;
};

interface Params extends ParsedUrlQuery {
  id: string;
}

export const getStaticProps: GetStaticProps<Props, Params> = async ({
  params,
}) => {
  console.log(params);
  const post = "Adnan";
  return {
    props: { post },
  };
};

// export const getStaticProps: GetStaticProps = async (context) => {
//   console.log(context);
// };

export default SideMenuBot;
