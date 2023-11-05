// Генерация рандомного числа в диапозоне
const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
};

//Получение случайного значения из массива
const getRandomArrayElement = (items) => items[getRandomInteger(0, items.length - 1)];

// Генерация ID
const generateId = () => {
  let id = 0;

  return () => {
    id++;
    return id;
  };
};

const generatePhotoId = generateId();
const generateCommentId = generateId();

export {getRandomInteger, getRandomArrayElement, generatePhotoId, generateCommentId};
