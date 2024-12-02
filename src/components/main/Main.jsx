import React, { useState } from "react";
import "./Main.css";
import ButtonList from "../buttonList/ButtonList";
import { languages } from "../../data/programmingLanguages";
import Card from "../card/Card";

export default function Main() {
  const [language, setlanguage] = useState(null);

  function setLanguage(id) {
    setlanguage(languages[id]);
  }

  return (
    <>
      <div className="container">
        <ButtonList languages={languages} setLanguage={setLanguage} />
        <Card language={language} />
      </div>
    </>
  );
}
