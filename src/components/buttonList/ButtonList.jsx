import React, { useState } from "react";
import "./ButtonList.css";
import ButtonItem from "./buttonItem/ButtonItem";

export default function ButtonList({ languages, setLanguage }) {
  const [activeButton, setActiveButton] = useState(null);

  function getId(id) {
    setActiveButton(id);
    setLanguage(id);
  }

  return (
    <>
      <div className="button-list">
        {languages.map((language) => (
          <div key={language.id}>
            <ButtonItem
              id={language.id}
              name={language.title}
              getId={getId}
              isActive={activeButton === language.id}
            />
          </div>
        ))}
      </div>
    </>
  );
}
