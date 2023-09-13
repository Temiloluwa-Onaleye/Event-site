import React, { useEffect, useState } from "react";
import Speaker from "./Speaker";
import { data } from "../../SpeakerData";

const SpeakersList = ({ showSessions }) => {
  const [speakerData, setSpeakerData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasErrored, setHasErrored] = useState(false);
  const [error, setError] = useState("");

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
      try {
        await delay(2000);
        setIsLoading(false);
        setSpeakerData(data);
      } catch (e) {
        setIsLoading(false);
        setHasErrored(true);
        setError(e);
      }
    }

    delayFunc();
  }, []);

  if (hasErrored === true) {
    return (
      <div className="text-danger">
        ERROR:<b>loading Speaker Data Failed{error}</b>
      </div>
    );
  }
  return (
    <>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
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
      )}
    </>
  );
};

export default SpeakersList;
