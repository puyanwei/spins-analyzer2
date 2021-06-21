const transformForPrizepool = (data) => {
  const hash = {};
  const array = [];
  // Initial data is a array of objects of all data, prizepool data is extracted and then put into another hash where the key is the prizepool and the value is the count of prizepools that it has seen. Then this data needs to be transformed into {x: key, y: value} format for victory.js Pie chart's data prop

  data.forEach((obj) => {
    const prizePool = obj.prizePool;
    console.log(`obj`, obj.prizePool);
    hash[prizePool] = hash[prizePool] ? hash[prizePool] + 1 : 1;
  });

  for (const [key, value] of Object.entries(hash)) {
    array.push({ x: key, y: value });
  }

  return array;
};

export { transformForPrizepool };
