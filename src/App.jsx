import { useState } from "react";
import HomeScreen from "../components/HomeScreen";
function App() {
  return (
    <div>
      <div className="relative">
        <HomeScreen />
        <div className="absolute w-[100%] bottom-[60%] right-45 inset-0 gradient-01" />
      </div>
    </div>
  );
}

export default App;
