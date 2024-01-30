export default function JobPost({ job }) {
  return (
    <div className="job-post">
      <img className="company-logo" src={job.logo} alt={job.company} />
      <div>
        <div className="postedAt">
          {job.postedAt}
          <span className="separator"></span>
          {job.contract}
        </div>
      </div>
      <div className="position">{job.position}</div>
      <div className="componay-name">{job.company}</div>
      <div className="location">{job.location}</div>
    </div>
  );
}
