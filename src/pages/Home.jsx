import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="container text-center py-5">
      <img
        src="/profile.png"
        alt="Profile"
        className="profile-img"
      />

      <h1 className="mt-4">Kato Desire</h1>
      <p className="lead">Systems Developer & Cloud Enthusiast</p>

      <div className="d-flex justify-content-center gap-3 mt-4">
        <Link to="/portfolio" className="btn btn-dark">
          View Portfolio
        </Link>

        <Link to="/resume" className="btn btn-outline-dark">
          View Resume
        </Link>
      </div>
    </div>
  );
}