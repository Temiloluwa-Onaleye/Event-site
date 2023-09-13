import React from "react";
import { data } from "../../SpeakerData";
import SpeakersList from "./SpeakersList";
import Header from "./Header";
import SpeakersToolbar from "./SpeakersToolbar";
import { useState } from "react";
import Speakers from "./Speakers";

const App = () => {
  const [theme, setTheme] = useState("light");
  return (
    <div
      className={
        theme === "light" ? "container-fluid light" : "container-fluid dark"
      }
    >
      <Header theme={theme} />
      <Speakers theme={theme} setTheme={setTheme} data={data} />
    </div>
  );
};

export default App;
