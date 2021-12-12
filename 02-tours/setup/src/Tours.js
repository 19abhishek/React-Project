import React, { useState, useEffect } from "react";

import Tour from "./Tour";
import Loading from "./Loading";
import classes from "./Tours.module.css";

const url = "https://course-api.com/react-tours-project";
const Tours = (props) => {
  const [isLoading, setLoading] = useState(true);
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
    setLoading(false);
  }
  useEffect(() => {
    fetchHandler();
  }, []);

  const removeTour = (id) => {
    const newTour = tourData.filter((currData) => currData.id !== id);
    setTourData(newTour);
  };

  return (
    <React.Fragment>
      <header className={classes.header}>Our Tours</header>
      {isLoading && <Loading />}
      {!isLoading && (
        <ul>
          {tourData.map((currTour) => {
            return (
              <li className={classes.tour} key={currTour.id}>
                <Tour
                  key={currTour.id}
                  image={currTour.image}
                  name={currTour.name}
                  price={currTour.price}
                  info={currTour.info}
                  remove={removeTour.bind(null, currTour.id)}
                />
              </li>
            );
          })}
        </ul>
      )}
      {!isLoading && tourData.length === 0 && <h3>Nothing to show.</h3>}
    </React.Fragment>
  );
};

export default Tours;
