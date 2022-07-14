import CardElement from './card';
import Offer from '../../../../types/offer';

type CardsListProps = {
    appartments : Offer[];
  }

function CardsListComponent({appartments}:CardsListProps):JSX.Element{
  const cards = [];

  for (let i = 0; i < appartments.length; i++){
    cards.push(<CardElement appartment = {appartments[i]}/>);
  }

  return (
    <div className="cities__places-list places__list tabs__content">
      {cards}
    </div>
  );
}


export default CardsListComponent;
