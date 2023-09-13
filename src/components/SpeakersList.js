import React from "react";
import Speaker from "./Speaker";

const SpeakersList = ({ data, showSessions }) => {
  return (
    <div>
      <div className="container speakers-list">
        <div className="row">
          {data.map((speaker) => {
            return (
              <Speaker
                key={speaker.id}
                speaker={speaker}
                showSessions={showSessions}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SpeakersList;
