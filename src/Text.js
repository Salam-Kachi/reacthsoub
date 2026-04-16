import React from "react";

export default function Text({ text="موسوعة حسوب", children }) {
  return (
    <div>
      <h2>{text}</h2>
      <h3>{children}</h3>
    </div>
  );
}
