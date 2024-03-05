import { createContext, useContext, useState } from "react";

const ExamContext = createContext();

const ExamProvider = ({ children }) => {
  const [isTestRunning, setIsTestRunning] = useState(false);
  const [module, setModule] = useState(1);
  const [level, setLevel] = useState(1);

  return (
    <ExamContext.Provider
      value={{
        isTestRunning,
        module,
        level,
        setIsTestRunning,
        setModule,
        setLevel,
      }}
    >
      {children}
    </ExamContext.Provider>
  );
};

export const useExam = () => useContext(ExamContext);
export default ExamProvider;
