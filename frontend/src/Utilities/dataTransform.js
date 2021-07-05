import { getPercentage, countHashKeys } from "./common";

const prizePoolTransform = (data) => {
  const prizePoolCountHash = countHashKeys(data, "prizePool");

  return Object.entries(prizePoolCountHash).map(([key, value]) => {
    return {
      x: `${key} \n ${getPercentage(value, data.length)}%`,
      y: value,
    };
  });
};

export { prizePoolTransform };
