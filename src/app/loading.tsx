import React from "react";

type Props = {};

function Loading({}: Props) {
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
      loading
    </div>
  );
}

export default Loading;
