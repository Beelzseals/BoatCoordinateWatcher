import React, { useState, useEffect, useRef } from "react";
import { Map, View } from "ol";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";
import "ol/ol.css";
import { Fill, RegularShape, Stroke, Style } from "ol/style";

function App() {

  const [currentMap, setCurrentMap] = useState(new Map());
  const [coords, setCoords] = useState([])
  const mapElement = useRef();
  const mapRef = useRef();
  mapRef.current = currentMap;

  const stroke = new Stroke({ color: "black", width: 2 });
  const fillRed = new Fill({ color: "red" });
  const fillBlack = new Fill({color: "black"})

  const styles = {
    'square': new Style({
        image: new RegularShape({
            fill: fillBlack,
            stroke: stroke,
            points: 4,
            radius: 10,
            angle: Math.PI / 4
        }),
    }),
    'square2': new Style({
        image: new RegularShape({
            fill: fillRed,
            stroke: stroke,
            points: 4,
            radius: 10,
            angle: Math.PI/4
        })
    })
  }

  const styleKey = "square"

  const count = 250;
const features = new Array(count);
const e = 4500000;
for (let i = 0; i < count; ++i) {
  const coordinates = [2 * e * Math.random() - e, 2 * e * Math.random() - e];
  features[i] = new Feature(new Point(coordinates));
  features[i].setStyle(
    styles[styleKeys[Math.floor(Math.random() * styleKeys.length)]]
  );
}

const source = new VectorSource({
  features: features,
});

const vectorLayer = new VectorLayer({
  source: source,
});

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
