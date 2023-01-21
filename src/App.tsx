import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { useState } from "react";
import StepOne from "./pages/StepOne";
import StepTwo from "./pages/StepTwo";
import StepThree from "./pages/StepThree";
import StepFour from "./pages/StepFour";

const App = () => {
  const [step, setStep] = useState<number>(1);

  const previousButton: JSX.Element = (
    <button
      className="btn"
      onClick={() => {
        setStep(step - 1);
      }}
    >
      Previous
    </button>
  );

  const nextButton: JSX.Element = (
    <button
      className="btn"
      onClick={() => {
        setStep(step + 1);
      }}
    >
      Next
    </button>
  );
  const submitButton: JSX.Element = <button className="btn">Submit</button>;
  const stepElements: JSX.Element[] = [1, 2, 3, 4].map((i) => {
    return (
      <li key={i} className={`${i <= step ? "step-primary" : ""} step`}>
        Step {i}
      </li>
    );
  });
  return (
    <div className="flex flex-col items-center space-y-20 p-10">
      <ul className="steps">{stepElements}</ul>
      <BrowserRouter>
        <Routes location={`/${step}`}>
          <Route path={`/1`} element={<StepOne />} />
          <Route path={`/2`} element={<StepTwo />} />
          <Route path={`/3`} element={<StepThree />} />
          <Route path={`/4`} element={<StepFour />} />
        </Routes>
      </BrowserRouter>
      <div className="flex w-1/2">
        {step > 1 ? previousButton : ""}
        <div className="grow" />
        {step < 4 ? nextButton : ""}
        {step === 4 ? submitButton : ""}
      </div>
    </div>
  );
};

export default App;
