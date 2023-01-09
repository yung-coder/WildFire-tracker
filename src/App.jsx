import { useEffect, useState } from "react";
import HomeScreen from "../components/HomeScreen";
import Maps from "../components/Maps";
import axios from "axios";
function App() {
  const [fireData, setfiredata] = useState([]);
  useEffect(() => {
    axios.get("https://eonet.gsfc.nasa.gov/api/v2.1/events").then((res) => {
      console.log(res.data.events);
      setfiredata(res.data.events);
    });
  }, []);

  return (
    <div>
      <div className="relative">
        <div className="absolute w-[100%] bottom-[80%]  inset-0 gradient-01 z-0" />
        <HomeScreen   />
        <Maps fireData={fireData} />
      </div>
    </div>
  );
}

export default App;
