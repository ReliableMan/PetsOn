import React from "react";
import { GoogleMap } from "@react-google-maps/api";
//import s from './map.module.css'

const containerStyle = {
  width: "50%",
  height: "30%",
};

const defaultOptions ={
panControl: true,
zoomControl:true,
mapTypeControl:true,
scaleControl:false,
streetViewControl: false,
rotateControl:false,
clickableIcons:false,
}

const Map = ({center}) => {
  const mapRef = React.useRef(undefined);

  const onLoad = React.useCallback(function callback(map) {
    mapRef.current = map;
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    mapRef.current = undefined;
  }, []);

  return (
    <div className="s.container">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
        options={defaultOptions}
      >
        {/* Child components, such as markers, info windows, etc. */}
        <></>
      </GoogleMap>
    </div>
  );
};

export { Map };
