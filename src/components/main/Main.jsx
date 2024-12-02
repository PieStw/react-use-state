import React from "react";
import "./Main.css";
import ButtonList from "../buttonList/ButtonList";
import { languages } from "../../data/programmingLanguages";
import Card from "../card/Card";

export default function Main() {
  return (
    <>
      <div className="container">
        <ButtonList languages={languages} />
        <Card languages={languages} />
      </div>
    </>
  );
}
