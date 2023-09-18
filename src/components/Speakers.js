import React, { useContext } from "react";
import SpeakersToolbar from "./SpeakersToolbar";
import SpeakersList from "./SpeakersList";
import { useState } from "react";
import { ThemeContext } from "./App";

const Speakers = () => {
  const [showSessions, setShowSessions] = useState(true);
  return (
    <div>
      <SpeakersToolbar
        setShowSessions={setShowSessions}
        showSessions={showSessions}
      />
      <SpeakersList showSessions={showSessions} />
    </div>
  );
};

export default Speakers;
