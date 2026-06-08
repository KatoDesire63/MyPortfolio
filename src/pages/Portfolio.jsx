import { Link } from "react-router-dom";

export default function Portfolio() {
  const projects = [
    {
      title: "Events Recommendation App",
      description: "AWS Amplify powered recommendation platform."
    },
    {
      title: "Cloud Portfolio Website",
      description: "Personal portfolio built with React and deployed online."
    }
  ];

  return (
    <div className="container py-5">
      <Link to="/" className="btn btn-outline-secondary mb-4">
        Back Home
      </Link>

      <h1 className="mb-4">My Portfolio</h1>

      <div className="row">
        {projects.map((project, index) => (
          <div className="col-md-6 mb-4" key={index}>
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h4>{project.title}</h4>
                <p>{project.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}