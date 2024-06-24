"use client";
import React from "react";

type Props = {};

function Error({}: Props) {
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "100%",
        fontSize: "4rem",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      Error Page
    </div>
  );
}

export default Error;
