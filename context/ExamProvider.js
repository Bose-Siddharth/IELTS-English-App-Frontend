import { createContext, useContext, useState } from "react";

const ExamContext = createContext();

const ExamProvider = ({ children }) => {
  const [isTestRunning, setIsTestRunning] = useState(false);
  const [module, setModule] = useState(1);
  const [level, setLevel] = useState(1);
  const [passage, setPassage] = useState();
  const [instructions, setInstructions] = useState();

  return (
    <ExamContext.Provider
      value={{
        isTestRunning,
        module,
        level,
        passage,
        instructions,
        setIsTestRunning,
        setModule,
        setLevel,
        setPassage,
        setInstructions,
      }}
    >
      {children}
    </ExamContext.Provider>
  );
};

export const useExam = () => useContext(ExamContext);
export default ExamProvider;
