import Speaker from "./Speaker";

import useRequestSpeakers from "../hooks/useRequestSpeakers";

const SpeakersList = ({ showSessions }) => {
  const { speakerData, isLoading, hasErrored, error, onFavoriteToggle } =
    useRequestSpeakers(2000);

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
