import React, { useEffect, useState } from "react";
import Speaker from "./Speaker";
import { data } from "../../SpeakerData";

const SpeakersList = ({ showSessions }) => {
  const [speakerData, setSpeakerData] = useState([]);

  function onFavoriteToggle(id) {
    const speakerRecPrevious = speakerData.find(function (rec) {
      return rec.id === id;
    });
    const speakerRecUpdated = {
      ...speakerRecPrevious,
      favorite: !speakerRecPrevious.favorite,
    };
    const speakerDataNew = speakerData.map(function (rec) {
      return rec.id === id ? speakerRecUpdated : rec;
    });

    setSpeakerData(speakerDataNew);
  }

  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  useEffect(() => {
    async function delayFunc() {
      await delay(2000);
      setSpeakerData(data);
    }

    delayFunc();
  }, []);
  return (
    <div>
      <div className="container speakers-list">
        <div className="row">
          {speakerData.map((speaker) => {
            return (
              <Speaker
                key={speaker.id}
                speaker={speaker}
                showSessions={showSessions}
                onFavoriteToggle={() => {
                  onFavoriteToggle(speaker.id);
                }}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SpeakersList;
