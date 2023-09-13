import React from "react";
import SpeakersToolbar from "./SpeakersToolbar";
import SpeakersList from "./SpeakersList";
import { useState } from "react";

const Speakers = ({ theme, setTheme }) => {
  const [showSessions, setShowSessions] = useState(true);
  return (
    <div>
      <SpeakersToolbar
        theme={theme}
        setTheme={setTheme}
        setShowSessions={setShowSessions}
        showSessions={showSessions}
      />
      <SpeakersList showSessions={showSessions} />
    </div>
  );
};

export default Speakers;
