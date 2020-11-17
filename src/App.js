import React from "react";
import "./App.css";
import Contact from "./components/Contact";
import TabUser from "./components/TabUser";

function App() {
  return (
    <div className="App">
      {TabUser.map((user) => {
        return <Contact key={user.id} user={user} />;
      })}
    </div>
  );
}

export default App;
