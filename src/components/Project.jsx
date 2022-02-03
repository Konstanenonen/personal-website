/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';

function Project(props) {
  return (
    <div className="project--container">
      <div className="placeHolderBox" />
      <h3>{props.name}</h3>
      <a href={props.gitHub}>Git Hub</a>
      <a href={props.linkki}>{props.linkName}</a>
      <p>{props.about}</p>
    </div>
  );
}

export default Project;
