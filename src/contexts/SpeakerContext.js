import { createContext } from "react";

const SpeakerContext = createContext();

const SpeakerProvider = ({ speaker, children, updateRecord }) => {
  return (
    <SpeakerContext.Provider value={{ speaker, updateRecord }}>
      {children}
    </SpeakerContext.Provider>
  );
};

export { SpeakerContext, SpeakerProvider };
