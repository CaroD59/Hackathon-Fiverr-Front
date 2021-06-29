import axios from 'axios';
import { useEffect, useState } from 'react';
import SCards from './style';

function Cards() {
  const [card, setCard] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:5050/`).then(({ data }) => {
      setCard(data);
    });
  }, []);

  return (
    <SCards>
      <div className="cards">
        {card.map((carte) => {
          return (
            <>
              <div className="card">
                <img src={carte.avatar} alt="avatar" />
                <p>
                  {carte.firstname} {carte.lastname}
                </p>
                <h1> developpeur web </h1>
                <img className="icon" src="./image/tool.png" alt="tool" />
                <p className="tech">{carte.technos}</p>
              </div>
            </>
          );
        })}
      </div>
    </SCards>
  );
}

export default Cards;
