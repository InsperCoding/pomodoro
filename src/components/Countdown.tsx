import { useEffect, useState } from "react";
import CountdownButton from "./CountdownButton";

let countdownTimeOut: NodeJS.Timeout;

export default function Countdown() {
  const [time, setTime] = useState(25 * 60);
  const [isActive, setIsActive] = useState(false);
  const [hasFinished, setHasFinished] = useState(false);
  
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, "0").split("");
  const [secondLeft, secondRight] = String(seconds).padStart(2, "0").split("");

  const toggleStartCountdown = () => {
    setIsActive(true);
  }

  const togglePauseCountdown = () => {
    setIsActive(false);
  }

  const resetCountdown = () => {
    clearTimeout(countdownTimeOut);
    setTime(25 * 60);
    setIsActive(false);
    setHasFinished(false);
  }

  useEffect(() => {
    if (isActive && time > 0) {
      countdownTimeOut = setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    } else if (isActive && time === 0) {
      setHasFinished(true);
      setIsActive(false);
    }
  }, [isActive, time]);
  
  return (
    <div className="mt-10 flex flex-col">
      <div className="flex flex-row items-center font-medium">
        <div className="flex items-center justify-evenly bg-slate-600 rounded-lg text-white p-5">
          <span className="text-9xl">{minuteLeft}</span>
          <span className="text-9xl">{minuteRight}</span>
  
          <span className="text-7xl text-white">:</span>
  
          <span className="text-9xl">{secondLeft}</span>
          <span className="text-9xl">{secondRight}</span>
        </div>
      </div>

      <CountdownButton 
        isActive={isActive} 
        toggleStartCountdown={toggleStartCountdown} 
        togglePauseCountdown={togglePauseCountdown}
        resetCountdown={resetCountdown}
        hasFinished={hasFinished}
      />
    </div>
  );
}
