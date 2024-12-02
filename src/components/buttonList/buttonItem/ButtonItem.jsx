import React from "react";
import "./ButtonItem.css";

export default function ButtonItem({ name }) {
  return (
    <div className="button-item">
      <button className="btn btn-primary">{name}</button>
    </div>
  );
}
