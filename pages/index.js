import React from "react";
import { data } from "../SpeakerData";
import Speakers from "../src/components/Speakers";

const Index = () => {
  return (
    <div className="container speakers-list">
      <div className="row">
        {data.map((speaker) => {
          return <Speakers key={speaker.id} speaker={speaker} />;
        })}
      </div>
    </div>
  );
};

export default Index;
