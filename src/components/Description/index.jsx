import StyledDesription from './style';
import Slideshow from '../Slideshow';

function Description() {
  return (
    <StyledDesription>
      <div className="Description">
        <Slideshow />

        <div className="textDesciption">
          <p>
            Missions, informations et forum pour freelances IT <br />
            Découvrez Fiverr-info le site de missions réservé aux freelances IT,
            SI et Web. <br /> Parcourez les forums, les articles, les conseils
            pour vous lancer et exercer en EURL, portage salarial,
            micro-entreprise, profession libérale BIC/BNC, ou en entreprise
            individuelle. <br /> Vous pouvez également échanger sur vos
            problématiques techniques via les topics tech.
          </p>
        </div>
      </div>
    </StyledDesription>
  );
}
export default Description;
