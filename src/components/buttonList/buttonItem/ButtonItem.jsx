import React from "react";
import "./ButtonItem.css";

export default function ButtonItem({ id, name, getId, isActive }) {
  const type = isActive ? "warning" : "primary";

  return (
    <div className="button-item">
      <button
        className={"btn btn-" + type}
        onClick={() => {
          getId(id);
        }}
      >
        {name}
      </button>
    </div>
  );
}
