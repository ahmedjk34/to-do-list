"use client";
import styles from "./page.module.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import { ToDoType } from "./Types";
import TodoCard from "@/components/to-do-card/TodoCard";

export default function Home() {
  const [toDo, setToDo] = useState<toDo[]>([]);
  useEffect(() => {
    (async function () {
      const testTodo: toDo[] = [
        {
          title: "Test1",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        },
        {
          title: "Test2",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        },
      ];
      setToDo(testTodo);
      try {
        // testTodo.forEach((todo) =>
        //   axios.post("http://localhost:3000/api/to-do", {
        //     title: todo.title,
        //     text: todo.text,
        //   })
        // );
        const response = await axios.get("http://localhost:3000/api/to-do");
        console.log(response);
      } catch (e) {
        console.log(e);
      }
    })();
  }, []);
  return (
    <div>
      {toDo.map((todo, index) => (
        <TodoCard title={todo.title} text={todo.text} key={`${index} todo`} />
      ))}
    </div>
  );
}
