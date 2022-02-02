interface CountdownButtonProps {
  isActive: boolean;
  hasFinished: boolean;
  toggleStartCountdown: () => void;
  togglePauseCountdown: () => void;
  resetCountdown: () => void;
}

export default function CountdownButton({ isActive,  hasFinished, toggleStartCountdown, togglePauseCountdown, resetCountdown }: CountdownButtonProps) {
  return (
    <>
      {
        hasFinished ? (
          <button 
            className="w-full h-16 mt-8 rounded-lg flex flex-col items-center justify-center bg-blue-700 text-2xl font-medium text-white hover:opacity-90 transition-opacity"
            type="button"
            onClick={resetCountdown}
          >
            <p>Reset</p>
          </button>
        ) : (
          <>
            {isActive ? (
              <button 
                className="w-full h-16 mt-8 rounded-lg flex flex-col items-center justify-center bg-slate-300 text-2xl font-medium hover:opacity-90 transition-opacity"
                type='button'
                onClick={togglePauseCountdown}
              >
                <p>Pause</p>
              </button>
            ) : (
              <button 
                className="w-full h-16 mt-8 rounded-lg flex flex-col items-center justify-center bg-blue-700 text-2xl font-medium text-white hover:opacity-90 transition-opacity"
                type='button'
                onClick={toggleStartCountdown}
              >
                <p>Start</p>
              </button>
            )}
          </>
        )
      }
    </>
  );
}
