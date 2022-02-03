/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import Project from './Project';

function Main(props) {
  const projects = props.languageProjects.map((project) => (
    <Project
      key={project.name}
      name={project.name}
      gitHub={project.gitHub}
      linkName={project.linkName}
      linkki={project.link}
      about={project.about}
    />
  ));

  return (
    <main className="main--container">
      <h2>{props.language[0]}</h2>
      <div className="placeHolderArea">{props.language[3]}</div>
      <h2>{props.language[1]}</h2>
      <div className="placeHolderArea">{props.language[4]}</div>
      <h2>{props.language[2]}</h2>
      {projects}
    </main>
  );
}

export default Main;
