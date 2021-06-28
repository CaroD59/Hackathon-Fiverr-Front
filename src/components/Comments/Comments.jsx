import axios from 'axios';
import { useEffect, useState } from 'react';

function MsgList() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5050/profile').then(({ data }) => {
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
export default MsgList;
