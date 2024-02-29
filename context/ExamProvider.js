import { createContext, useContext, useState } from "react";

const ExamContext = createContext();

const ExamProvider = ({ children }) => {
  const [isTestRunning, setIsTestRunning] = useState(true);

  return (
    <ExamContext.Provider value={{ isTestRunning, setIsTestRunning }}>
      {children}
    </ExamContext.Provider>
  );
};

export const useExam = () => useContext(ExamContext);
export default ExamProvider;
