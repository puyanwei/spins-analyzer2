const getPercentage = (numerator, total) =>
  ((numerator / total) * 100).toFixed(2);

const countHashKeys = (data, keyToCount) => {
  const hash = {};
  data.forEach((obj) => {
    const key = obj[keyToCount];
    hash[key] = hash[key] ? hash[key] + 1 : 1;
  });
  return hash;
};

const getElementWordBasedOnIndex = (array, string, elementMovement = 1) =>
  array[array.indexOf(string) + elementMovement];

export { getPercentage, countHashKeys, getElementWordBasedOnIndex };
