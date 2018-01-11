const add = a => b => a + b;
export const increm = add(1);

export const concatThrow = (s1, s2) => {
  if (s1.match(/X/)) throw new Error('Forbidden concat');
  return `${s1} - ${s2}`;
};

export const concatCallback = (s1, s2, callback) => {
  try {
    return callback(null, concatThrow(s1, s2));
  } catch (e) {
    return callback(e);
  }
};

export const concatAsync = (s1, s2, callback) => {
  setTimeout(() => {
    try {
      return callback(null, concatThrow(s1, s2));
    } catch (e) {
      return callback(e);
    }
  }, 1000);
};
