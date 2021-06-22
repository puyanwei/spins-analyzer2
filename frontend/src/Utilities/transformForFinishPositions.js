const transformForFinishPositions = (data) => {
  const hash = {};
  const array = [];

  data.forEach((obj) => {
    const result = obj.result;
    hash[result] = hash[result] ? hash[result] + 1 : 1;
  });

  for (let [key, value] of Object.entries(hash)) {
    array.push({
      x: `${key}`,
      y: value,
    });
  }
  return array;
};

export { transformForFinishPositions }