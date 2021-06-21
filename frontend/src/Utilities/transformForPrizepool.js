// Initial data is a array of objects of all data, prizepool data is extracted and then put into another hash where the key is the prizepool and the value is the count of prizepools that it has seen. Then this data needs to be transformed into {x: key, y: value} format for victory.js Pie chart's data prop

const transformForPrizepool = (data) => {
  const hash = {};
  const array = [];
  let total = 0;

  data.forEach((obj) => {
    total = total + 1;
    const prizePool = obj.prizePool;
    hash[prizePool] = hash[prizePool] ? hash[prizePool] + 1 : 1;
  });

  for (let [key, value] of Object.entries(hash)) {
    array.push({
      x: `${key} \n ${getPercentage(value, total)}%`,
      y: value,
    });
  }
  return array;
};

const getPercentage = (numerator, total) =>
  ((numerator / total) * 100).toFixed(2);

export { transformForPrizepool };
