"use client";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

type Props = {};

function AddTodoButton({}: Props) {
  const pathName = usePathname();
  const router = useRouter();

  return (
    <div>
      {pathName == "/" ? (
        <button onClick={() => router.push("/add-todo")}>Add To-do</button>
      ) : (
        <button onClick={() => router.push("/")}>Return to Main</button>
      )}
    </div>
  );
}

export default AddTodoButton;
