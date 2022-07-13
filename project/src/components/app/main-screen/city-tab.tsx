import {changeCity, fillRentList} from '../../../store/action';
import { ApiDispatch } from '../../../store/state';
import { offers } from '../mocks/offers';

type CityTabComponentProps = {
    city: string,
    dispatch: ApiDispatch
}

function CityTabComponent({city, dispatch} : CityTabComponentProps):JSX.Element{
  return (
    <li className="locations__item">
      <a className={`locations__item-link tabs__item ${ city === 'Hamburg' ? 'tabs__item--active' : ''}`} href="http://localhost:3000"
        onClick={
          (evt) => {
            evt.preventDefault();
            SwitchCity('Hamburg', dispatch);
            SwitchOffers('Hamburg', dispatch);
          }
        }
      >
        <span>Hamburg</span>
      </a>
    </li>
  );
}

function SwitchCity(city: string, dispatch: ApiDispatch):void{
  dispatch(changeCity(city));
}


function SwitchOffers(city: string, dispatch: ApiDispatch){
  const updatedOffers = offers[city];
  dispatch(fillRentList(updatedOffers));
}

export default CityTabComponent;
