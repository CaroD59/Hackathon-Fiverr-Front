import axios from 'axios';
import { useHistory, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import SCards from './style';

function Cards() {
  const [card, setCard] = useState([]);
  const { id } = useParams();
  const history = useHistory();
  const appHandler = (e) => {
    e.preventDefault();
    history.push(`/description/${id}`);
  };

  useEffect(() => {
    axios.get(`http://localhost:5050/profile`).then(({ data }) => {
      setCard(data);
    });
  }, []);

  return (
    <SCards>
      <div
        className="cards"
        onClick={appHandler}
        onKeyDown={appHandler}
        aria-hidden="true"
      >
        {card.map((carte) => {
          return (
            <>
              <div className="card">
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
