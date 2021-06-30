import axios from 'axios';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import StyleComment from './style';

function InputComment() {
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');
  const { id } = useParams();

  const handleChangeContent = (evt) => {
    setContent(evt.target.value);
  };

  const handleChangeAuthor = (evt) => {
    setAuthor(evt.target.value);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const dataToSend = {
      id,
      author,
      content,
    };
    axios.post(`http://localhost:5050/description/${id}`, dataToSend);
  };

  return (
    <StyleComment>
      <div className="CommentPart">
        <h2>Envoyez votre commentaire</h2>
        <form onSubmit={handleSubmit}>
          <div className="Inputs">
            <div className="AuthorInput">
              <input
                type="text"
                value={author}
                onChange={handleChangeAuthor}
                placeholder="Ecrivez votre prénom ici"
              />
            </div>
            <div className="ContentInput">
              <textarea
                type="text"
                value={content}
                onChange={handleChangeContent}
                placeholder="Ecrivez votre commentaire ici"
              />
            </div>
            <div className="Submit">
              <input type="submit" value="Envoyer" />
              <input type="hidden" name="profileId" value={id} />
            </div>
          </div>
        </form>
      </div>
    </StyleComment>
  );
}
export default InputComment;
