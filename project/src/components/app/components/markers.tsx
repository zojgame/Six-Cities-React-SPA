import { Marker, Popup, } from 'react-leaflet';
import { Icon } from 'leaflet';
import { URL_MARKER_DEFAULT, MarkerType, URL_MARKER_CURRENT} from '../../const';
import { Offer } from '../mocks/offers';

type MarkersProps = {
    points : Offer[],
}

function Markers({points} : MarkersProps):JSX.Element{
  const defaultIcon = new Icon({
    iconUrl: URL_MARKER_DEFAULT,
    iconSize: [40, 40],
  });

  const currentIcon = new Icon({
    iconUrl: URL_MARKER_CURRENT,
    iconSize: [40, 40]
  });

  return (
    <>
      {points.map((point) => (
        <Marker key={point.id} position={[point.y, point.x]} icon={point.markerType === MarkerType.DEFAULT
          ? defaultIcon : currentIcon}
        >
          <Popup>
            {point.name}
          </Popup>
        </Marker>))};
    </>);
}

export default Markers;
