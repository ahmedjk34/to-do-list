import styles from "./nav.module.scss";
import React from "react";
import AddTodoButton from "./AddTodoButton";

type Props = {};

function Nav({}: Props) {
  return (
    <div className={styles.nav}>
      <h1>To-do List</h1>
      <AddTodoButton />
    </div>
  );
}

export default Nav;
