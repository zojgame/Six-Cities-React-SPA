import Comment from '../../../types/comment';

const comments: Comment[] = [
  {description: `A quiet cozy and picturesque that hides behind a a river
     * by the unique lightness of Amsterdam. The 
     * building is green and from 18th century.`,
  rating: 4,
  commentatorName: 'Max',
  photo: 'img/avatar-max.jpg',
  date: new Date(2001, 12, 20)},
  {description: 'Awesome',
    rating: 5,
    commentatorName: 'Mathway',
    photo: 'img/avatar-max.jpg',
    date: new Date(2022, 12, 20)}
];

export default comments;
