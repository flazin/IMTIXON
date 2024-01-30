import { createContext, useState } from "react";
import data from "../data.json";
export const ThemeContext = createContext();

export function ContextWrapper(props) {
  const [theme, setTheme] = useState("light");
  const [jobs, setJobs] = useState(data);
  const [jobList, setJobList] = useState([]);
  const [jobId, setJobId] = useState(0);

  //Changes app theme
  const handleTheme = () => {
    const app = document.querySelector(".App");
    const newTheme = theme === "light" ? "dark" : "light";
    app.classList.remove(theme);
    app.classList.add(newTheme);
    setTheme(newTheme);
    const switchEl = document.querySelector(".switch");
    switchEl.classList.toggle("active");
  };
  return (
    <ThemeContext.Provider
      value={{
        theme,
        handleTheme,
        jobs,
        jobList,
        setJobList,
        jobId,
        setJobId,
      }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
}
