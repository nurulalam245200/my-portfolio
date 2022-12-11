import React from "react";
import { Link } from "react-router-dom";

const ProjectCard = ({ project }) => {
  const { id, img, name, details, tech, liveLink } = project;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={img} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>Technology: {tech}</p>
        <p>Detail: {details}</p>
        <Link className="btn btn-sm" to={liveLink}>
          Live Link
        </Link>
        <div className="card-actions justify-end">
          <Link to={`/details/${id}`}>
            <button className="btn btn-primary">Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
