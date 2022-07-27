import { ApiDispatch } from '../../../../store/state';
import { changeCity } from '../../../../store/action';

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

function ChangeCity(city: string, dispatch: ApiDispatch) :void{
  dispatch(changeCity(city));
}

export default CitiesList;
