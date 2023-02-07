import "./App.css";
import { Button } from "./Component/Button";
import { Display } from "./Component/Display";
import { useState } from "react";

function App() {
  const [time, setTime] = useState({ ms: 0, s: 0, m: 0, h: 0 });
  const [interv, setInterv] = useState();
  const [status, setStatus] = useState(0);

  const start = () => {
    timer();
    setStatus(1);
    setInterv(setInterval(timer, 2000));
  };

  let displayMs = time.ms;
  let displaySec = time.s;
  let displayMin = time.m;
  let displayHour = time.h;

  const timer = () => {
    if (displaySec === 20) {
      displayMin++;
      displaySec = 0;
    }
    if (displayMin === 20) {
      displayHour++;
      displayMin = 0;
    }
    if (displayMs === 20) {
      displaySec++;
      displayMs = 0;
    }
    displayMs++;
    return setTime({
      ms: displayMs,
      s: displaySec,
      m: displayMin,
      h: displayHour,
    });
  };
  const stop = () => {
    clearInterval(interv);
    setStatus(2);
  };
  const reset = () => {
    clearInterval(interv);
    setStatus(0);
    setTime({ ms: 0, s: 0, m: 0, h: 0 });
  };

  const resume = () => start();
  
  return (
    <div className="container">
      <div className="clock-header">
        <h1>React Js Stopwatch</h1>
        <div className="stopwatch">
          <Display time={time} />
          <Button
            status={status}
            reset={reset}
            resume={resume}
            stop={stop}
            start={start}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
