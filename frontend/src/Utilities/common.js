const hashToVictoryJSArray = (hash) =>
  Object.entries(hash).map(([key, value]) => {
    return {
      x: key,
      y: value,
    };
  });

const getPercentage = (numerator, total) =>
  ((numerator / total) * 100).toFixed(2);

export { hashToVictoryJSArray, getPercentage };
