import StyledDesription from './style';

function Description() {
  return (
    <StyledDesription>
      <div className="Description">
        <div>
          <img
            className="imageDescription"
            src="./images/Photography.png"
            alt="ImageDescription"
          />
        </div>
        <div className="textDesciption">
          {' '}
          <p>
            Missions, informations et forum pour freelances IT Découvrez
            Fiverr-info le site de missions réservé aux freelances IT, SI et
            Web. Parcourez les forums, les articles, les conseils pour vous
            lancer et exercer en EURL, portage salarial, micro-entreprise,
            profession libérale BIC/BNC, ou en entreprise individuelle. Vous
            pouvez également échanger sur vos problématiques techniques via les
            topics tech.
          </p>
        </div>
      </div>
    </StyledDesription>
  );
}
export default Description;
