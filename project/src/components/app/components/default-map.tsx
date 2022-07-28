import { MapContainer, TileLayer} from 'react-leaflet';
import { useMap } from 'react-leaflet';

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

export default DefailtMap;
