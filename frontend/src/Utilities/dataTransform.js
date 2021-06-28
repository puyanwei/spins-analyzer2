import { hashToVictoryJSArray, getPercentage } from "./common";

const prizePoolTransform = (data) => {
  const hash = {};
  let total = 0;

  data.forEach((obj) => {
    total = total + 1;
    const prizePool = obj.prizePool;
    hash[prizePool] = hash[prizePool] ? hash[prizePool] + 1 : 1;
  });

  return Object.entries(hash).map(([key, value]) => {
    return {
      x: `${key} \n ${getPercentage(value, total)}%`,
      y: value,
    };
  });
};

const finishPositionTransform = (data) => {
  const hash = {};
  data.forEach((obj) => {
    const result = obj.result;
    hash[result] = hash[result] ? hash[result] + 1 : 1;
  });
  return hashToVictoryJSArray(hash);
};

export { prizePoolTransform, finishPositionTransform };
