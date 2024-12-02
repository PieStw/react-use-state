import React from "react";
import "./Card.css";

export default function Card({ language }) {
  return (
    <div className="card">
      {language ? (
        <div className="card-body">
          <h3 className="card-title">{language.title}</h3>
          <p>{language.description}</p>
        </div>
      ) : (
        <div className="card-body">
          <h3 className="card-title">Nessun linguaggio selezionato</h3>
          <p>Seleziona un linguaggio</p>
        </div>
      )}
    </div>
  );
}
