import React, { useState } from "react";
import "./ButtonList.css";
import ButtonItem from "./buttonItem/ButtonItem";

export default function ButtonList({ languages, setLanguage }) {
  const [isActive, setIsActive] = useState(null);

  function getId(id) {
    setIsActive(id + 1);
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
              isActive={isActive === language.id}
            />
          </div>
        ))}
      </div>
    </>
  );
}
