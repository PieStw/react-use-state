import React from "react";
import "./Main.css";
import ButtonList from "../buttonList/ButtonList";
import { languages } from "../../data/programmingLanguages";

export default function Main() {
  return (
    <>
      <div className="container">
        <ButtonList languages={languages} />
      </div>
    </>
  );
}
