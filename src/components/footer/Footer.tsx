import React from "react";
import styles from "./footer.module.scss";
import { FaGithub } from "react-icons/fa";

type Props = {};

function Footer({}: Props) {
  return (
    <div className={styles.footer}>
      <h3>A Simple CRUD App with NextJS & MongoDB</h3>
      <h3>Made By : {<FaGithub />} Ahmedjk34</h3>
    </div>
  );
}

export default Footer;
