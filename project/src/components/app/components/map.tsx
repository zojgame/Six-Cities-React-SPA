import { MapContainer, TileLayer} from 'react-leaflet';
import Markers from './markers';
import Offer from '../../../types/offer';
import {CITY} from '../mocks/cities';

type MapProps = {
    points : Offer[]
}

function Map({points} : MapProps):JSX.Element{
  return (
    <MapContainer center={CITY.position} zoom={12} scrollWheelZoom>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url='https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png'
      />
      <Markers points={points}/>
    </MapContainer>
  );
}

export default Map;
