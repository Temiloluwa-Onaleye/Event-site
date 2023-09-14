import Speaker from "./Speaker";

import useRequestDelay, { REQUEST_STATUS } from "../hooks/useRequestDelay";

const SpeakersList = ({ showSessions }) => {
  const {
    data: speakerData,
    requestStatus,
    error,
    updateRecord,
  } = useRequestDelay(2000);

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
            <div className="row">
              {speakerData.map((speaker) => {
                return (
                  <Speaker
                    key={speaker.id}
                    speaker={speaker}
                    showSessions={showSessions}
                    onFavoriteToggle={() => {
                      updateRecord(speaker.id);
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
