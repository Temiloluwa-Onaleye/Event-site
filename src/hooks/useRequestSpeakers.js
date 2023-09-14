import { useEffect, useState } from "react";
import { data } from "../../SpeakerData";

export const REQUEST_STATUS = {
  LOADING: "loading",
  SUCCESS: "Success",
  FAILURE: "failure",
};

const useRequestSpeakers = (delayTime = 1000) => {
  const [speakerData, setSpeakerData] = useState([]);
  const [requestStatus, setRequestStatus] = useState(REQUEST_STATUS.LOADING);
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
        await delay(delayTime);
        setRequestStatus(REQUEST_STATUS.SUCCESS);
        setSpeakerData(data);
      } catch (e) {
        setRequestStatus(REQUEST_STATUS.FAILURE);
        setError(e);
      }
    }

    delayFunc();
  }, []);
  return { speakerData, requestStatus, error, onFavoriteToggle };
};

export default useRequestSpeakers;
