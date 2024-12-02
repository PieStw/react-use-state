import React, { useState } from "react";
import "./Main.css";
import ButtonList from "../buttonList/ButtonList";
import { languages } from "../../data/programmingLanguages";
import Card from "../card/Card";

export default function Main() {
  const [language, setLanguage] = useState(null);

  function setLang(id) {
    setLanguage(languages[id]);
  }

  return (
    <>
      <div className="container">
        <ButtonList languages={languages} setLanguage={setLang} />
        <Card language={language} />
      </div>
    </>
  );
}
