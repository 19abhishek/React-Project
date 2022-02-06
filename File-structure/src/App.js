import data from "./data";

import Load from "./load";

function App() {
  console.log(data);
  return (
    <div>
      <Load data={data} />
    </div>
  );
}

export default App;
