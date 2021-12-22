import React, { useState, useEffect } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
import classes from "./App.module.css";
const url = "https://course-api.com/react-tabs-project";

function App() {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [value, setValue] = useState(0);

  const fetchJobs = async () => {
    const reponse = await fetch(url);
    const newJobs = await reponse.json();
    setJobs(newJobs);
    setLoading(false);
  };
  useEffect(() => {
    fetchJobs();
  }, []);
  if (loading) {
    return (
      <section className="section loading">
        <h1>Loading...</h1>
      </section>
    );
  }
  const { company, dates, duties, title } = jobs[value];
  return (
    <div>
      <h2 className={classes.header}>Experience</h2>
      <header className={classes.nav}>
        {jobs.map((currData, idx) => {
          return (
            <button
              className={classes.btn}
              key={currData.id}
              onClick={() => setValue(idx)}
            >
              {currData.company}
            </button>
          );
        })}
      </header>
      <div className={classes.info}>
        <div className={classes.title}>{title}</div>
        <div className={classes.company}>{company}</div>
        <div className={classes.dates}>{dates}</div>
        <div>
          {duties.map((duty, idx) => {
            return (
              <div key={idx}>
                <FaAngleDoubleRight />
                <span>{duty}</span>
              </div>
            );
          })}
        </div>
      </div>
      <div className={classes.info}>
        <button>More Info</button>
      </div>
    </div>
  );
}

export default App;
