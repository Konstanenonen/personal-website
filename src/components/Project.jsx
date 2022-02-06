import React from 'react';
import PropTypes from 'prop-types';

function Project(props) {
  const {
    name, gitHub, linkki, linkName, about,
  } = props;

  return (
    <div className="project--container">
      <h3>{name}</h3>
      <div className="link-wrapper">
        <a href={gitHub}>Git Hub</a>
        <a href={linkki}>{linkName}</a>
      </div>
      <p>{about}</p>
    </div>
  );
}
Project.propTypes = {
  name: PropTypes.string.isRequired,
  gitHub: PropTypes.string.isRequired,
  linkki: PropTypes.string.isRequired,
  linkName: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired,
};

export default Project;
