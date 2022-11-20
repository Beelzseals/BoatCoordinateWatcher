import Map from "ol/Map.js";
import OSM from "ol/source/OSM.js";
import TileLayer from "ol/layer/Tile.js";
import View from "ol/View.js";
import { useEffect, useState, useRef } from "react";

function App() {

  const [currentMap, setCurrentMap] = useState(new Map());
  const mapElement = useRef();
  const mapRef = useRef();
  mapRef.current = currentMap;

  useEffect(() => {
    const initialMap = new Map({
      target: mapElement.current,
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
      ],
      view: new View({
        center: [0, 0],
        zoom: 2,
      }),
    });
    setCurrentMap(initialMap);
  }, []);

  
  return <div id="map" ref={mapElement} className="map-container"></div>;
}

export default App;
