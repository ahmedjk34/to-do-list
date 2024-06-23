"use client";
import axios from "axios";
import styles from "./add-todo.module.scss";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

type Props = {};

function Page({}: Props) {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const router = useRouter();

  function handelButtonClick() {
    try {
      if (title == "" || text == "") {
        alert("The title or text can't be empty");
        return;
      }
      axios.post("http://localhost:3000/api/to-do", {
        title: title,
        text: text,
      });
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className={styles.holder}>
      <div>
        <h2>To-do Title</h2>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter title here"
        />
      </div>
      <div>
        <h2>To-do Text</h2>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter text here"
        />
      </div>
      <button onClick={handelButtonClick}>Add Topic</button>
    </div>
  );
}

export default Page;
