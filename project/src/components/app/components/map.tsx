import { MapContainer, TileLayer} from 'react-leaflet';
import { useMap } from 'react-leaflet';
import Markers from './markers';
import {Offer} from '../../../types/offer';
import DefaultMap from './default-map';

type MapProps = {
    points : Offer[]
}

function Map({points} : MapProps):JSX.Element{
  if(points.length === 0){
    return <DefaultMap/>;
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

export default Map;
