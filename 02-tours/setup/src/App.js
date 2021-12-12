import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tours-project";
function App() {
  const [tourData, setTourData] = useState([]);

  async function call() {
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
  call();
  return (
    <React.Fragment>
      <Tours tours={tourData} />
    </React.Fragment>
  );
}

export default App;
