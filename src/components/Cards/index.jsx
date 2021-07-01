import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { useEffect, useState } from 'react';
import SCards from './style';

function Cards() {
  const [card, setCard] = useState([]);
  const history = useHistory();

  const appHandler = (id) => {
    history.push(`/description/${id}`);
  };

  useEffect(() => {
    axios.get(`http://localhost:5050/profile`).then(({ data }) => {
      setCard(data);
    });
  }, []);

  return (
    <SCards>
      <div className="cards">
        {card.map((carte) => {
          return (
            <>
              <div
                className="card"
                onClick={() => {
                  appHandler(carte.id);
                }}
                onKeyDown={appHandler}
                aria-hidden="true"
              >
                <img src={carte.avatar} alt="avatar" />
                <p>
                  {carte.firstname} {carte.lastname}
                </p>
                <h1> Développeur Web </h1>
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
