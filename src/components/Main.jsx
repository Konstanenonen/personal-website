// font-awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import React from 'react';
import PropTypes from 'prop-types';
import Project from './Project';

function Main(props) {
  const { language, languageProjects } = props;

  const projects = languageProjects.map((project) => (
    <Project
      key={project.name}
      name={project.name}
      gitHub={project.gitHub}
      linkName={project.linkName}
      linkki={project.link}
      about={project.about}
      image={project.image}
    />
  ));

  return (
    <main>
      <div className="main--container">
        <FontAwesomeIcon icon={['fas', 'arrow-up']} size="2x" className="arrow-up" />
        <p className="arrow-text">{language[5]}</p>
        <h2 id="about">{language[0]}</h2>
        <div className="placeHolderArea">{language[3]}</div>
        <h2 id="experience">{language[1]}</h2>
        <div className="placeHolderArea">{language[4]}</div>
        <h2 id="projects">{language[2]}</h2>
      </div>
      <div className="allProjects">
        {projects}
      </div>
    </main>
  );
}
Main.propTypes = {
  language: PropTypes.arrayOf(PropTypes.string).isRequired,
  languageProjects: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Main;
