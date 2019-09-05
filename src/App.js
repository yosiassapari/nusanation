import React, {useState} from 'react';
import ReactMapGL from "react-map-gl";

function App() {
  const [viewport, setViewport] = useState({
    latitude: -2.483383,
    longitude: 117.890285,
    width: "100vw", //view width
    height: "100vh", //view height
    zoom: 4.5
  })
  return (
    <div>
      <ReactMapGL {...viewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        mapStyle="mapbox://styles/papuanengineer/ck06ijf1p2eu81dpbjqe547el"
        onViewportChange={(viewport)=>{setViewport(viewport);}}
      >
        Select a province
      </ReactMapGL>
    </div>
  );
}

export default App;
