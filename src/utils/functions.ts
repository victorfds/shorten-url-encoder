import { customAlphabet } from 'nanoid';
import alphanumeric from 'nanoid-dictionary/alphanumeric';

const generateShortUrl = (leng = 5) => {
  if (leng < 5) {
    const generateId = customAlphabet(alphanumeric, 5);
    return generateId();
  }
  if (leng > 15) {
    const generateId = customAlphabet(alphanumeric, 15);
    return generateId();
  }

  const generateId = customAlphabet(alphanumeric, leng);
  return generateId();
};

const verifyEmptyObj = (obj) => {
  return Boolean(
    obj && Object.keys(obj).length === 0 && obj.constructor === Object
  );
};

export { generateShortUrl, verifyEmptyObj };
