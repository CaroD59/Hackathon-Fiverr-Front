import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function CommentsList() {
  const [messages, setMessages] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:5050/profile/:${id}`).then(({ data }) => {
      setMessages(data);
    });
  }, []);

  return (
    <ul>
      {messages.map((msg) => {
        return <li>{msg.content}</li>;
      })}
    </ul>
  );
}
export default CommentsList;
