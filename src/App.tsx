import { useState } from 'react';
import { Card } from './components/Card';
import { tutorialData } from './data/tutorialData';

function App() {
  const [step, setStep] = useState<number>(0);

  function handleNextStep() {
    setStep((curr) => curr + 1);
  }

  function handlePreviousStep() {
    setStep((curr) => curr - 1);
  }

  return (
    <div className='flex justify-center items-center h-screen '>
      <Card
        currStep={step}
        data={tutorialData[step]}
        onNextStep={handleNextStep}
        onPrevStep={handlePreviousStep}
      />
    </div>
  );
}

export default App;
