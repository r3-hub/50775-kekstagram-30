import {getRandomInteger, getRandomArrayElement, generatePhotoId, generateCommentId} from './util.js';

const AVATAR_COUNT = 6;
const PHOTO_COUNT = 25;
const LIKE_MIN = 15;
const LIKE_MAX = 200;
const COMMENT_COUNT = 30;
const COMMENTS = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];
const DESCRIPTIONS = [
  'Готовлю завтрак',
  'На природе',
  'Гуляем с друзьями',
  'Еду на дачу',
  'Работаю',
  'Доброе утро',
  'Приятные сюрпризы'
];
const NAMES = [
  'Денис',
  'Сергей',
  'Павел',
  'Константин',
  'Максим',
  'Надежда',
  'Александр',
  'Анастасия'
];

//Возвращение комментария в виде объекта
const createMessage = () => Array.from(
  {length: getRandomInteger(1, 2)},
  () => getRandomArrayElement(COMMENTS),
).join(' ');

const createComment = () => ({
  id: generateCommentId(),
  avatar: `img/avatar-${getRandomInteger(1, AVATAR_COUNT)}.svg`,
  message: createMessage(),
  name: getRandomArrayElement(NAMES)
});

//Возвращение фотографии в виде объекта
const createPhoto = () => ({
  id: generatePhotoId(),
  url: `photos/${getRandomInteger(1, PHOTO_COUNT)}.jpg`,
  likes: getRandomInteger(LIKE_MIN, LIKE_MAX),
  description: getRandomArrayElement(DESCRIPTIONS),
  comments: Array.from(
    {length: getRandomInteger(0, COMMENT_COUNT)},
    createComment
  )
});

export {createPhoto};
