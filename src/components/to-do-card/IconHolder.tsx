"use client";
import React from "react";
import { FaRegTrashCan } from "react-icons/fa6";
import { MdEdit } from "react-icons/md";
import styles from "./to-do-card.module.scss";
import axios from "axios";
type Props = {
  _id: string;
};

function IconHolder({ _id }: Props) {
  async function deleteTodo() {
    try {
      await axios.delete("http://localhost:3000/api/to-do", {
        data: { _id },
      });
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className={styles.icons}>
      <FaRegTrashCan
        color="red"
        size={"25px"}
        onClick={async () => await deleteTodo()}
      />
      <MdEdit size={"25px"} />
    </div>
  );
}

export default IconHolder;
