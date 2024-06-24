"use client";
import styles from "./page.module.scss";
import { Suspense, useEffect, useState } from "react";
import axios from "axios";
import { ToDoType } from "./Types";
import TodoCard from "@/components/to-do-card/TodoCard";
import Loading from "./loading";

export default function Home() {
  const [toDo, setToDo] = useState<ToDoType[]>([]);
  useEffect(() => {
    (async function () {
      try {
        const response = await axios.get("http://localhost:3000/api/to-do");
        console.log(response.data);
        setToDo(response.data);
      } catch (e) {
        console.log(e);
      }
    })();
  }, []);
  return (
    <Suspense fallback={<Loading />}>
      <div className={styles.main}>
        {toDo.map((todo, index) => (
          <TodoCard
            title={todo.title}
            text={todo.text}
            _id={todo._id}
            key={`${index} todo`}
          />
        ))}
      </div>
    </Suspense>
  );
}
