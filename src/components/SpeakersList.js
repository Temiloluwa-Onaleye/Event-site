import Speaker from "./Speaker";
import { data } from "../../SpeakerData";
import useRequestDelay, { REQUEST_STATUS } from "../hooks/useRequestDelay";
import { useContext } from "react";
import { SpeakerFilterContext } from "../contexts/SpeakerFilterContext.";
import SpeakerAdd from "./SpeakerAdd";

const SpeakersList = () => {
  const {
    data: speakerDat,
    requestStatus,
    error,
    updateRecord,
    deleteRecord,
    insertRecord,
  } = useRequestDelay(2000, data);

  const { searchQuery, eventYear } = useContext(SpeakerFilterContext);

  if (requestStatus === REQUEST_STATUS.FAILURE) {
    return (
      <div className="text-danger">
        ERROR:<b>loading Speaker Data Failed{error}</b>
      </div>
    );
  }
  return (
    <>
      {requestStatus === REQUEST_STATUS.LOADING ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <div className="container speakers-list">
            <SpeakerAdd eventYear={eventYear} insertRecord={insertRecord} />
            <div className="row">
              {speakerData
                .filter(function (speaker) {
                  return (
                    speaker.first.toLowerCase().includes(searchQuery) ||
                    speaker.last.toLowerCase().includes(searchQuery)
                  );
                })
                .filter(function (speaker) {
                  return speaker.sessions.find((session) => {
                    return session.eventYear === eventYear;
                  });
                })
                .map((speaker) => {
                  return (
                    <Speaker
                      key={speaker.id}
                      speaker={speaker}
                      updateRecord={updateRecord}
                      insertRecord={insertRecord}
                      deleteRecord={deleteRecord}
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
