import { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import JobPost from "../components/JobPost/JobPost";
import { useContext } from "react";
import { ThemeContext } from "../context/context";
import { Link } from "react-router-dom";

export default function Home() {
  const { jobs, jobList, setJobList } = useContext(ThemeContext);

  const setAllJobs = () => {
    setJobList(jobs);
  };

  useEffect(() => {
    setAllJobs();
  }, []);

  return (
    <main>
      <div className="jobs">
        {jobList.map((job) => {
          const id = uuidv4();
          return (
            <Link to={`/devjobs-web-app/jobs/${job.id}`} key={id}>
              <JobPost job={job} />
            </Link>
          );
        })}
      </div>
      <button className="more">Load More</button>
    </main>
  );
}
