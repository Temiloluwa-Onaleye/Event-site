import { createContext } from "react";

const SpeakerContext = createContext();

const SpeakerProvider = ({
  speaker,
  children,
  updateRecord,
  deleteRecord,
  insertRecord,
}) => {
  return (
    <SpeakerContext.Provider
      value={{ speaker, updateRecord, insertRecord, deleteRecord }}
    >
      {children}
    </SpeakerContext.Provider>
  );
};

export { SpeakerContext, SpeakerProvider };
