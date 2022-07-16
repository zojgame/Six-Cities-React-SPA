import { MouseEvent, useState } from 'react';

const OptionSortComponent = () => {
  const [isFormOpened, setForm] = useState(false);
  const setFormOpened = (e: MouseEvent) => {
    e.preventDefault();
    setForm(true);
  };
  const setFormClosed = (e: MouseEvent) => {
    e.preventDefault();
    setForm(false);
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
          <li className="places__option places__option--active" tabIndex={0}>Popular</li>
          <li className="places__option" tabIndex={0}>Price: low to high</li>
          <li className="places__option" tabIndex={0}>Price: high to low</li>
          <li className="places__option" tabIndex={0}>Top rated first</li>
        </ul>
      </section>

    </form>
  );
};

export default OptionSortComponent;
