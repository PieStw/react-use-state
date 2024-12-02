import React, { useState } from "react";
import "./Card.css";

export default function Card({ language }) {
  return (
    <>
      <div className="card">
        <div className="card-body">
          <h3 className="card-title">{language.title}</h3>
          {language.description}
        </div>
      </div>
    </>
  );
}
