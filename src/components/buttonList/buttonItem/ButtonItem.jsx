import React from "react";
import "./ButtonItem.css";

export default function ButtonItem({ id, name, getId }) {
  return (
    <div className="button-item">
      <button
        className="btn btn-primary"
        onClick={() => {
          getId(id);
        }}
      >
        {name}
      </button>
    </div>
  );
}
