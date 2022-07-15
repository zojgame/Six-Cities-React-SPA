import { ApiDispatch } from '../../../../store/state';
import { offers } from '../../mocks/offers';
import { fillRentList, changeCity } from '../../../../store/action';

type CitiesListProps = {
  city: string,
  dispatch: ApiDispatch,
}

function CitiesList({city, dispatch} : CitiesListProps):JSX.Element{
  return (
    <section className="locations container" >
      <ul className="locations__list tabs__list">
        <li key='1' className="locations__item" >
          <a className={`locations__item-link tabs__item ${ city === 'Paris' ? 'tabs__item--active' : ''}`} href="http://localhost:3000"
            onClick={
              (evt) => {
                evt.preventDefault();
                ChangeCity('Paris', dispatch);
                ChangeOffers('Paris', dispatch);
              }
            }
          >
            <span>Paris</span>
          </a>
        </li>
        <li key='2' className="locations__item" >
          <a className={`locations__item-link tabs__item ${ city === 'Cologne' ? 'tabs__item--active' : ''}`} href="http://localhost:3000"
            onClick={
              (evt) => {
                evt.preventDefault();
                ChangeCity('Cologne', dispatch);
                ChangeOffers('Cologne', dispatch);
              }
            }
          >
            <span>Cologne</span>
          </a>
        </li>
        <li key='3' className="locations__item" >
          <a className={`locations__item-link tabs__item ${ city === 'Brussels' ? 'tabs__item--active' : ''}`} href="http://localhost:3000"
            onClick={
              (evt) => {
                evt.preventDefault();
                ChangeCity('Brussels', dispatch);
                ChangeOffers('Brussels', dispatch);
              }
            }
          >
            <span>Brussels</span>
          </a>
        </li>
        <li key='4' className="locations__item" >
          <a className={`locations__item-link tabs__item ${ city === 'Amsterdam' ? 'tabs__item--active' : ''}`} href="http://localhost:3000"
            onClick={
              (evt) => {
                evt.preventDefault();
                ChangeCity('Amsterdam', dispatch);
                ChangeOffers('Amsterdam', dispatch);
              }
            }
          >
            <span>Amsterdam</span>
          </a>
        </li>
        <li key='5' className="locations__item" >
          <a className={`locations__item-link tabs__item ${ city === 'Hamburg' ? 'tabs__item--active' : ''}`} href="http://localhost:3000"
            onClick={
              (evt) => {
                evt.preventDefault();
                ChangeCity('Hamburg', dispatch);
                ChangeOffers('Hamburg', dispatch);
              }
            }
          >
            <span>Hamburg</span>
          </a>
        </li>
        <li key='6' className="locations__item" >
          <a className={`locations__item-link tabs__item ${ city === 'Dusseldorf' ? 'tabs__item--active' : ''}`} href="http://localhost:3000"
            onClick={
              (evt) => {
                evt.preventDefault();
                ChangeCity('Dusseldorf', dispatch);
                ChangeOffers('Dusseldorf', dispatch);
              }
            }
          >
            <span>Dusseldorf</span>
          </a>
        </li>
      </ul>
    </section>
  );
}

function ChangeCity(city: string, dispatch: ApiDispatch):void{
  dispatch(changeCity(city));
}

function ChangeOffers(city: string, dispatch: ApiDispatch):void{
  const updatedOffers = offers[city];
  dispatch(fillRentList(updatedOffers));
}

export default CitiesList;
