import { useState } from "react";
import { Card } from "./components/Card";
import { tutorialData } from "./data/tutorialData";

function App() {
  const [step, setStep] = useState<number>(0);

  function handleNextStep() {
    setStep((curr) => curr + 1);
  }

  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <Card data={tutorialData[step]} onNextStep={handleNextStep} />
    </>
  );
}

export default App;
