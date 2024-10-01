import { useEffect, useState } from "react";
import { useData } from "../../contexts/DataContext";
import { getMonth } from "../../helpers/Date";

import "./style.scss";

const Slider = () => {
  const { data } = useData(); 
  const [index, setIndex] = useState(0);
  const byDateAsc = data?.focus.sort((evtA, evtB) =>
    new Date(evtA.date) - new Date(evtB.date)
  ) || [];

  // Fonction pour changer la diapositive
  const nextCard = () => {
    setIndex((prevIndex) => (prevIndex + 1) % byDateAsc.length);
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
          key={event.id} 
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
          {byDateAsc.map((_, radioIdx) => (
            <input
              key={byDateAsc[radioIdx].id} 
              type="radio"
              name="radio-button"
              checked={index === radioIdx}
              onChange={() => setIndex(radioIdx)} 
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slider;
