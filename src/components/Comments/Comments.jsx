import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import StyleComment from './style';

function CommentsList() {
  const [messages, setMessages] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:5050/description/${id}`).then(({ data }) => {
      setMessages(data);
    });
  }, []);

  return (
    <StyleComment>
      <div className="CommentPart">
        <h1>Commentaires</h1>
        <ul>
          {messages.map((msg) => {
            return (
              <div className="Message">
                <div className="Author">{msg.author} :</div>
                <div className="Msg">{msg.content}</div>
              </div>
            );
          })}
        </ul>
      </div>
    </StyleComment>
  );
}
export default CommentsList;
