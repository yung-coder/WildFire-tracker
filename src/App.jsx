import { useState } from "react";
import HomeScreen from "../components/HomeScreen";
import Maps from "../components/Maps";
function App() {
  return (
    <div>
      <div className="relative">
        <div className="absolute w-[100%] bottom-[80%]  inset-0 gradient-01 z-0" />
        <HomeScreen />
        <Maps />
      </div>
    </div>
  );
}

export default App;
