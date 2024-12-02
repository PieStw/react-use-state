import React from "react";
import "./ButtonItem.css";

export default function ButtonItem({ name }) {
  return <button className="btn btn-primary">{name}</button>;
}
