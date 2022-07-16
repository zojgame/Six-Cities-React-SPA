/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { MouseEvent, useState } from 'react';
import { changeSortType, fillRentList } from '../../../../store/action';
import { SortOptions } from '../../../const';
import { useAppDispatch, useAppSelector} from '../../../../hooks';

const OptionSortComponent = () => {
  const { sortType, offersList } = useAppSelector((state) => state);
  const dispatch = useAppDispatch();
  const [isFormOpened, setForm] = useState(false);
  const setFormOpened = (e: MouseEvent) => {//
    e.preventDefault();
    setForm(true);
  };

  const setFormClosed = (e: MouseEvent) => {
    e.preventDefault();
    setForm(false);
  };

  const sortByPriceToHigh = (e: MouseEvent) => {
    e.preventDefault();
    dispatch(changeSortType(SortOptions.PRICE_LOW_TO_HIGH));
  };

  const sortByPriceToLow = (e: MouseEvent) => {
    e.preventDefault();
    dispatch(changeSortType(SortOptions.PRICE_HIGH_TO_LOW));
  };

  const sortByRating = (e: MouseEvent) => {
    e.preventDefault();
    dispatch(changeSortType(SortOptions.TOP_RATED_FIRST));
  };

  const sortByPopular = (e: MouseEvent) => {
    e.preventDefault();
    dispatch(changeSortType(SortOptions.POPULAR));
  };

  return (
    <form className="places__sorting" action="#" method="get" >
      <section onMouseOver={setFormOpened} onMouseOut={setFormClosed}>
        <span className="places__sorting-caption" >Sort by </span>
        <span className="places__sorting-type" tabIndex={0} >
                     Popular
          <svg className="places__sorting-arrow" width="7" height="4">
            <use href="#icon-arrow-select"></use>
          </svg>
        </span>
        <ul className={`places__options places__options--custom
         ${isFormOpened ? 'places__options--opened' : ''}`}

        >
          <li className={`places__option ${sortType === SortOptions.POPULAR ? 'places__option--active' : ''}`} tabIndex={0} onMouseUp={sortByPopular}>Popular</li>
          <li className={`places__option ${sortType === SortOptions.PRICE_LOW_TO_HIGH ? 'places__option--active' : ''}`} tabIndex={0}
            onMouseUp={sortByPriceToHigh}
          >Price: low to high
          </li>
          <li className={`places__option ${sortType === SortOptions.PRICE_HIGH_TO_LOW ? 'places__option--active' : ''}`} tabIndex={0} onMouseUp={sortByPriceToLow}>Price: high to low</li>
          <li className={`places__option ${sortType === SortOptions.TOP_RATED_FIRST ? 'places__option--active' : ''}`} tabIndex={0} onMouseUp={sortByRating}>Top rated first</li>
        </ul>
      </section>
    </form>
  );
};

export default OptionSortComponent;
