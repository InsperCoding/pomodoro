import Countdown from "./components/Countdown";

import logo from "./assets/inspercoding_logo.png";

export default function App() {
  return (
    <div className="bg-slate-900">
      <div className="h-screen max-w-xl mx-auto my-0 px-3 py-2 flex flex-col">
        <div className="flex flex-col items-center justify-center my-auto">
          <div className="flex w-full items-center justify-evenly">
            <img src={logo} alt="Insper Coding" className="max-w-20 max-h-20"/>
            <h1 className="font-medium text-center text-3xl text-white">
              Insper Coding Countdown Clock
            </h1>
          </div>
          <Countdown/>
        </div>
      </div>
    </div>
  )
}