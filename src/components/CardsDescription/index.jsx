import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Comments from '../Comments/Comments';
import InputComments from '../Comments/InPutComments';
import Projects from '../Projects';

export default function CardsDescription() {
  const [appli, setAppli] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:5050/description/${id}`).then(({ data }) => {
      setAppli(data);
    });
  }, []);

  return (
    <>
      <div>
        {appli.map((user) => {
          return (
            <div>
              <div>
                <p className="">
                  {user.firstname} {user.lastname}
                </p>
                <p className="">Pseudo Github: {user.github_url}</p>
                <p className="">Age: {user.age} ans</p>
                <p className="">{user.description}</p>
                <p className="">{user.linkedin_url}</p>
                <p className="">Technos: {user.technos}</p>
                <img src={user.avatar} alt="" />
              </div>
              <div className="ProjectsPart">
                <Projects />
              </div>
              <div className="CommentsPart">
                <Comments />
                <InputComments />
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
