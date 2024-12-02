import React from "react";
import "./ButtonList.css";
import ButtonItem from "./buttonItem/ButtonItem";

export default function ButtonList({ languages, setLanguage }) {
  function getId(id) {
    setLanguage(id);
  }

  return (
    <>
      <div className="button-list">
        {languages.map((language) => (
          <div key={language.id}>
            <ButtonItem id={language.id} name={language.title} getId={getId} />
          </div>
        ))}
      </div>
    </>
  );
}
