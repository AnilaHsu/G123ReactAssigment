import { BrowserRouter, Routes, Route } from "react-router-dom";
import StepOne from "./pages/StepOne";
import StepTwo from "./pages/StepTwo";
import StepThree from "./pages/StepThree";
import StepFour from "./pages/StepFour";
import { useAppSelector } from "./app/hooks";

const App = () => {
  const step = useAppSelector((state) => state.step);
  const stepElements: JSX.Element[] = [1, 2, 3, 4].map((i) => {
    return (
      <li key={i} className={`${i <= step ? "step-info" : ""}  step`}>
        {i < 4 ? `Step ${i}` : "Review"}
      </li>
    );
  });
  return (
    <div className="flex flex-col items-center space-y-20 p-20 ">
      <ul className="steps w-80">{stepElements}</ul>
      <BrowserRouter>
        <Routes location={`/${step}`}>
          <Route path={`/1`} element={<StepOne />} />
          <Route path={`/2`} element={<StepTwo />} />
          <Route path={`/3`} element={<StepThree />} />
          <Route path={`/4`} element={<StepFour />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
