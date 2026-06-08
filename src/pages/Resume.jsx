import { Link } from "react-router-dom";

export default function Resume() {
  return (
    <div className="container py-5">
      <Link to="/" className="btn btn-outline-secondary mb-4">
        Back Home
      </Link>

      <h1>Resume</h1>

      <iframe
        src="/Resume.pdf"
        title="Resume"
        width="100%"
        height="700px"
        style={{ border: "none" }}
      />
    </div>
  );
}