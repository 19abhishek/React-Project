import React, { useState } from "react";

import Tour from "./Tour";
import Card from "./components/Card";
import classes from "./Tours.module.css";

const url = "https://course-api.com/react-tours-project";
const Tours = (props) => {
  const [tourData, setTourData] = useState([]);

  async function fetchHandler() {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Something went wrong");
      }
      const data = await response.json();
      setTourData(data);
    } catch (error) {
      console.log(error);
    }
  }
  fetchHandler();

  return (
    <React.Fragment>
      <header className={classes.header}>Our Tours</header>
      <ul>
        {tourData.map((currTour) => {
          return (
            <li className="tour">
              <Tour
                key={currTour.id}
                image={currTour.image}
                name={currTour.name}
                price={currTour.price}
                info={currTour.info}
              />
            </li>
          );
        })}
      </ul>
    </React.Fragment>
  );
};

export default Tours;
