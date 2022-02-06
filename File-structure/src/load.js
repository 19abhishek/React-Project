import React, { useState } from "react";

import Folder from "./Folder";

function Load({ data }) {
  const [expand, setExpand] = useState(false);

  if (data.isFolder) {
    return (
      <div>
        <div onClick={() => setExpand(!expand)} style={{ padding: "0px" }}>
          {data.name}
        </div>
        <div style={{ display: expand ? "block" : "none", marginLeft: "15px" }}>
          {data.items.map((cd, idx) => (
            <div key={idx}>
              <Load data={cd} />
            </div>
          ))}
        </div>
      </div>
    );
  } else {
    return <div>{data.name}</div>;
  }
}

export default Load;
