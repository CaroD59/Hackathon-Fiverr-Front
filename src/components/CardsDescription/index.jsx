import Comments from '../Comments/Comments';
import InputComments from '../Comments/InPutComments';
import Projects from '../Projects';

export default function CardsDescription() {
  return (
    <>
      <div className="ProjectsPart">
        <Projects />
      </div>
      <div className="CommentsPart">
        <Comments />
        <InputComments />
      </div>
    </>
  );
}
