import CardElement from './card';
import { ApiOffer} from '../../../../types/offer';

type CardsListProps = {
    appartments : ApiOffer[];
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
