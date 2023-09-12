import React from "react";
import { data } from "../../SpeakerData";
import Speaker from "./Speaker";

const Speakers = () => {
  return (
    <div>
      <div className="container speakers-list">
        <div className="row">
          {data.map((speaker) => {
            return <Speaker key={speaker.id} speaker={speaker} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Speakers;
