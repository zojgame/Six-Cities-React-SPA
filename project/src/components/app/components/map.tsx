import { MapContainer, TileLayer} from 'react-leaflet';
import { useMap } from 'react-leaflet';
import Markers from './markers';
import {Offer} from '../../../types/offer';

type MapProps = {
    points : Offer[]
}

function Map({points} : MapProps):JSX.Element{
  if(points.length === 0){
    return <DefailtMap/>;
  }
  const newCity = points[0].location;
  return (
    <MapContainer center={[newCity.latitude, newCity.longitude]} zoom={newCity.zoom} scrollWheelZoom>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url='https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png'
      />
      <ChangeMapView city={newCity} />
      <Markers points={points}/>
    </MapContainer>
  );
}

type ChangeMapViewProps = {
  city:{
    latitude: number,
      longitude: number,
      zoom: number
  }
}

function ChangeMapView({city} : ChangeMapViewProps):null{
  const map = useMap();
  const position : [number, number] = [city.latitude, city.longitude];
  map.setView(position, city.zoom);
  return null;
}

function DefailtMap():JSX.Element{
  const amsterdam = {
    latitude : 52.3909553943508,
    longitude: 4.90309666406198,
    zoom: 10
  };
  return (
    <MapContainer center={[52.3909553943508, 4.90309666406198]} zoom={12} scrollWheelZoom>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url='https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png'
      />
      <ChangeMapView city={amsterdam} />
    </MapContainer>
  );
}

export default Map;
