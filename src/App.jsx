import { useEffect, useState } from "react";
import HomeScreen from "../components/HomeScreen";
import Maps from "../components/Maps";
import axios from "axios";
import './index.css';
function App() {
  const [fireData, setfiredata] = useState([]);
  useEffect(() => {
    axios.get("https://eonet.gsfc.nasa.gov/api/v2.1/events").then((res) => {
      setfiredata(res.data.events);
    });
  }, []);

  return (
    <div>
      <div className="relative">
        <div className="bg">
          <HomeScreen />
        </div>
        <Maps fireData={fireData} />
      </div>
    </div>
  );
}

export default App;
