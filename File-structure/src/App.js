import data from "./data";

import Load from "./Load";

function App() {
  console.log(data);
  return (
    <div>
      <Load data={data} />
    </div>
  );
}

export default App;
