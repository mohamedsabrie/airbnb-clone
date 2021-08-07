import { useState } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import getCenter from "geolib/es/getCenter";

function Map({ searchResults }) {
const [selectedLocation, setSelectedLocation] = useState({});
console.log(selectedLocation)


  const coordinates = searchResults.map((result) => ({
    latitude: result.lat,
    longitude: result.long,
  }));

  const center = getCenter(coordinates);
  console.log(center);
  const [viewport, setViewport] = useState({
    latitude: center.latitude,
    longitude: center.longitude,
    zoom: 8,
  });
  return (
    <ReactMapGL
      mapStyle="mapbox://styles/mohamedsabryabosaad/cks0u5eg26clq18nxudq34c97"
      mapboxApiAccessToken={process.env.mapbox_key}
      onViewportChange={(viewport) => setViewport(viewport)}
      {...viewport}
      width="100%"
      height="100%"
    >
      {searchResults.map((result) => (
        <div key={result.long}>
          <Marker
            longitude={result.long}
            latitude={result.lat}
            offsetLeft={-20}
            offsetTop={-10}
          >
            <span className="flex h-4 w-4 cursor-pointer" onClick = {() => setSelectedLocation(result)}>
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500"></span>
            </span>
          </Marker>

          {selectedLocation.long === result.long && (
              <Popup 
              closeOnClick = {true}
              onClose = {() => setSelectedLocation({})}
              latitude={result.lat}
              longitude = {result.long}
              anchor="bottom-left"
              >

                  {result.title}

              </Popup>
          )}
        </div>
      ))}
    </ReactMapGL>
  );
}

export default Map;
