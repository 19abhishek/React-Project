import React from "react";
import Load from "./load";

function load({ data }) {
  return (
    <div>
      {data.map((cData) =>
        cData.isFolder ? (
          <Load folder={cData} />
        ) : (
          <div>
            cData.name
            <br />
          </div>
        )
      )}
      {/* {data.map((cData) => (
        cData.isFolder ? (
          <Load folder={cData} />
        ) : (
          <div>
            cData.name
            <br />
          </div>
        );
      ))} */}
    </div>
  );
}

export default load;
