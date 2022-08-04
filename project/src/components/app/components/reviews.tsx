import {useAppSelector} from '../../../hooks/index';
import { nanoid } from '@reduxjs/toolkit';
import dayjs from 'dayjs';
import ReviewComponent from './review-form';

type ReviesProps = {
  hotelId: string
}

function Reviews({hotelId} : ReviesProps):JSX.Element{
  const {comments} = useAppSelector((state) => state);

  const reviews = comments.map((review) =>
    (
      <li className="reviews__item" key={nanoid()}>
        <div className="reviews__user user" >
          <div className="reviews__avatar-wrapper user__avatar-wrapper">
            <img className="reviews__avatar user__avatar" src={review.user.avatarUrl} width="54" height="54" alt="Reviews avatar" />
            {/* <img className="reviews__avatar user__avatar" src="src="https://8.react.pages.academy/static/avatar/7.jpg" width="54" height="54" alt="Reviews avatar" /> */}
          </div>
          <span className="reviews__user-name">
            {review.user.name}
          </span>
        </div>
        <div className="reviews__info">
          <div className="reviews__rating rating">
            <div className="reviews__stars rating__stars">
              <span style={{width: review.rating * 20}}></span>
              <span className="visually-hidden">Rating</span>
            </div>
          </div>
          <p className="reviews__text">
            {review.comment}
          </p>
          <time className="reviews__time" dateTime={review.date}>{dayjs(review.date).format('MMMM DD')}</time>
        </div>
      </li>
    ));

  return(
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">1</span></h2>
      <ul className="reviews__list">
        {reviews}
      </ul>
      <ReviewComponent hotelId={hotelId} />
    </section>
  );
}

export default Reviews;
