const hashToVictoryJSArray = (hash) =>
  Object.entries(hash).map(([key, value]) => {
    return {
      x: key,
      y: value,
    };
  });

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

export { hashToVictoryJSArray, getPercentage, countHashKeys };
