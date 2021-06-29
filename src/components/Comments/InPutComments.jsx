import axios from 'axios';
import { useState } from 'react';

function InputMsg() {
  const [inputContent, setContent] = useState('');
  const [inputAuthor, setAuthor] = useState('');

  const handleChangeContent = (evt) => {
    setContent(evt.target.value);
  };

  const handleChangeAuthor = (evt) => {
    setAuthor(evt.target.value);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const dataToSend = {
      author: inputAuthor,
      content: inputContent,
    };
    axios.post('http://localhost:5050/profile', dataToSend);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={inputAuthor} onChange={handleChangeAuthor} />
      <input type="text" value={inputContent} onChange={handleChangeContent} />
      <input type="submit" value="Send!" />
    </form>
  );
}
export default InputMsg;
