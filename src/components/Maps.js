import React, { useEffect, useState } from "react";
import GoogleMapReact from 'google-map-react';
import  {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";


const AnyReactComponent = ({ text }) => <div style={{fontSize:20}}>{text}</div>;

export default function SimpleMap({business}){
  const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
  const [mapInstance, setMapInstance] = useState(null)
  const [coords,setCoords] = useState(null)

  const handleApiLoaded = (map, maps) => {
    // use map and maps objects
    // console.log(map)
    setMapInstance(map)
  };

  const defaultProps = {
    center: {
      lat: 31.099787506864693, 
      lng: -97.72813596158248
    },
    zoom: 14
  };
  
  useEffect(()=>{
    

    if (mapInstance && business.address){
      
      getGeocode({ address: business.address })
        .then ((results) => {
        const { lat, lng } = getLatLng(results[0]);
        
        mapInstance.panTo({lat,lng});
        mapInstance.setZoom(18)
        setCoords({lat,lng});
      })
      .catch ((error) => {
        console.error("Error getting geocode:", error);
      })
    }
  }, [mapInstance, business])


  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '400px', width: '450px' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: apiKey}}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
        yesIWantToUseGoogleMapApiInternals

      >
        {coords &&
        <AnyReactComponent
        lat= {coords.lat}
        lng={coords.lng}
        text={business.name}
        />
      }
      </GoogleMapReact>
    </div>
  );
}


