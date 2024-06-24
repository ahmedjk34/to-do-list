"use client";
import axios from "axios";
import styles from "./edit-todo.module.scss";
import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";

type Props = {};

function Page({}: Props) {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const { id } = useParams();
  const router = useRouter();

  useEffect(() => {
    (async function () {
      const response = await axios.get(`http://localhost:3000/api/to-do/${id}`);
      setTitle(response.data.title);
      setText(response.data.text);
    })();
  }, []);
  function handelButtonClick() {
    try {
      if (title == "" || text == "") {
        alert("The title or text can't be empty");
        return;
      }
      axios.patch(`http://localhost:3000/api/to-do/${id}`, {
        title: title,
        text: text,
        _id: id,
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
      <button onClick={handelButtonClick}>Edit To-do</button>
    </div>
  );
}

export default Page;
