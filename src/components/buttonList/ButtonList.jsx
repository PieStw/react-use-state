import React from "react";
import "./ButtonList.css";
import ButtonItem from "./buttonItem/ButtonItem";

export default function ButtonList({ languages }) {
  return (
    <>
      <div className="button-list">
        {languages.map((language, index) => (
          <div key={index}>
            <ButtonItem name={language.title} />
          </div>
        ))}
      </div>
    </>
  );
}
