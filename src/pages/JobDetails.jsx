import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ThemeContext } from "../context/context";
import { v4 as uuidv4 } from "uuid";

export default function JobDetails() {
  const { jobs, setJobId } = useContext(ThemeContext);
  const { id } = useParams();
  const job = jobs.find((job) => {
    return job.id === Number(id);
  });

  useEffect(() => {
    setJobId(id);
  });

  return (
    <main className="job-details">
      <div className="company-info">
        <img
          className="company-logo"
          src={`../${job.logo}`}
          alt={job.company}
        />
        <div className="company-section">
          <div className="company-name">{job.company}</div>
          <a className="company-url" href={job.website}>
            {job.company.toLowerCase()}.com
          </a>
        </div>
        <button className="company-cta">Company Site</button>
      </div>
      <div className="position-details">
        <div className="about-position">
          <div className="position-wrapper">
            <div className="postedAt">
              {job.postedAt}
              <span className="separator"></span>
              {job.contract}
            </div>
            <div className="position">{job.position}</div>
            <div className="location">{job.location}</div>
          </div>
          <button>Apply Now</button>
        </div>

        <p>{job.description}</p>
        <h3>Requirements</h3>
        <p>{job.requirements.content}</p>
        <ul>
          {job.requirements.items.map((item) => {
            const id = uuidv4();
            return <li key={id}>{item}</li>;
          })}
        </ul>
        <h3>What You Will Do</h3>
        <p>{job.role.content}</p>
        <ol>
          {job.role.items.map((item) => {
            const id = uuidv4();
            return <li key={id}>{item}</li>;
          })}
        </ol>
      </div>
      <div className="button-container">
        <div className="position-container">
          <div className="position">
            <div>Senior Software Engineer</div>
            <div>So Digital Inc.</div>
          </div>
          <button>Apply Now</button>
        </div>
      </div>
    </main>
  );
}
