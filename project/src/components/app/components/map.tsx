import { MapContainer, TileLayer} from 'react-leaflet';
import { useMap } from 'react-leaflet';
import Markers from './markers';
import {Offer} from '../../../types/offer';
import {CitiesPosition} from '../mocks/cities';

type MapProps = {
    points : Offer[]
    city: string
}

function Map({points, city} : MapProps):JSX.Element{
  const newCity = CitiesPosition[city];
  return (
    <MapContainer center={newCity.position} zoom={newCity.zoom} scrollWheelZoom>
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
  city: {position: [number, number], zoom: number};
}
function ChangeMapView({city} : ChangeMapViewProps):null{
  const map = useMap();
  map.setView(city.position, city.zoom);
  return null;
}

export default Map;
