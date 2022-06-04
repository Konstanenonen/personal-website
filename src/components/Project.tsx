import React from "react";

interface Props {
  name: string;
  gitHub: string;
  linkki: string;
  linkName: string;
  about: string;
}

function Project({ name, gitHub, linkki, linkName, about }: Props) {
  return (
    <div className="project--container">
      <h3>{name}</h3>
      <div className="link-wrapper">
        <a href={gitHub}>GitHub</a>
        <a href={linkki}>{linkName}</a>
      </div>
      <p>{about}</p>
    </div>
  );
}

export default Project;
