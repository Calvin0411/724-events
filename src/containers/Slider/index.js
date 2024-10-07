import React, { useEffect, useState } from "react";
import { useData } from "../../contexts/DataContext";
import { getMonth } from "../../helpers/Date";

import "./style.scss";

const Slider = () => {
  const { data } = useData();
  const [index, setIndex] = useState(0);

  // Tri des événements par date croissante
  const byDateAsc = data?.focus.sort(
    (evtA, evtB) => new Date(evtA.date) - new Date(evtB.date)
  ) || [];

  // Fonction pour changer la diapositive
  const nextCard = () => {
    setIndex((prevIndex) => (prevIndex < byDateAsc.length - 1 ? prevIndex + 1 : 0));
  };

  // Utilisation de setInterval pour changer de diapositive
  useEffect(() => {
    const intervalId = setInterval(nextCard, 5000);
    return () => clearInterval(intervalId); // Cleanup sur démontage
  }, [byDateAsc.length]);

  return (
    <div className="SlideCardList">
      {byDateAsc.map((event, idx) => (
        <div
          key={event.title} // Clé unique pour chaque diapositive
          className={`SlideCard SlideCard--${index === idx ? "display" : "hide"}`}
        >
          <img src={event.cover} alt={event.title} />
          <div className="SlideCard__descriptionContainer">
            <div className="SlideCard__description">
              <h3>{event.title}</h3>
              <p>{event.description}</p>
              <div>{getMonth(new Date(event.date))}</div>
            </div>
          </div>
        </div>
      ))}
      <div className="SlideCard__paginationContainer">
        <div className="SlideCard__pagination">
          {byDateAsc.map((e, radioIdx) => (
            <input
              key={`${e.title}-Radio`} // Clé unique pour chaque bouton radio
              type="radio"
              name="radio-button"
              checked={index === radioIdx} // check si l'index est égal à celui du bouton radio
              onChange={() => setIndex(radioIdx)} // Gère la nouvelle image lors du click du bouton radio
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slider;
