import "./App.css";
import React from "react";
import DragNDrop from "./components/DragNDrop";

const data = [
  { title: "group 1", items: ["1", "2", "3"] },
  { title: "group 2", items: ["4", "5"] },
  { title: "group 3", items: ["8", "7", "9", "6"] },
];

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <DragNDrop data={data} />
      </div>
    </div>
  );
}

export default App;
