import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProjectStyle from './style';

export default function Projects() {
  const [project, setProject] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    axios.get(`http://localhost:5050/description/${id}`).then(({ data }) => {
      setProject(data);
    });
  }, []);
  return (
    <ProjectStyle>
      <div className="BlocTitle">
        <div className="Title">
          <h2>Projets</h2>
        </div>
      </div>
      <div className="Projects">
        {project.map((pro) => {
          return (
            <a href={pro.github_url} target="_blank" rel="noreferrer">
              <div className="Project">
                <div className="image">
                  <img src={pro.image} alt="" className="ImageSize" />
                </div>
                <div className="Name">
                  <div className="ProjectName">{pro.project_name}</div>
                </div>
                <div className="Description">{pro.description}</div>
              </div>
            </a>
          );
        })}
      </div>
    </ProjectStyle>
  );
}
