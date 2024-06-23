import IconHolder from "./IconHolder";
import styles from "./to-do-card.module.scss";
import React from "react";

type Props = {
  title: string;
  text: string;
  _id: string;
};

function TodoCard({ title, text, _id }: Props) {
  return (
    <div className={styles.card}>
      <div className={styles.textHolder}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.text}>{text}</p>
      </div>
      <IconHolder _id={_id} />
    </div>
  );
}

export default TodoCard;
