import { getElementWordBasedOnIndex } from "./common";

export const spinFileFormatter = (text) => {
  const textArray = text.replace(/(\r\n|\n|\r)/gm, "").split(" ");
  const textInBrackets = text
    .match(/\(([^()]*)\)/g)
    .map(($0) => $0.substring(1, $0.length - 1));

  const buyInInfo = getElementWordBasedOnIndex(
    textArray,
    "Hold'emBuy-In:"
  ).split("/");

  const tournamentNumber = getElementWordBasedOnIndex(
    textArray,
    "Tournament"
  ).replace(/[^0-9]/g, "");

  const buyIn = buyInInfo[0];
  const rake = buyInInfo[1];

  const totalBuyIn =
    "$" +
    (Number(buyIn.replace("$", "")) + Number(rake.replace("$", ""))).toString();

  const numberOfPlayers = getElementWordBasedOnIndex(
    textArray,
    "playersTotal",
    -1
  ).slice(-1);

  const prizePool = getElementWordBasedOnIndex(textArray, "Pool:");
  const currency = getElementWordBasedOnIndex(textArray, "started", -2);
  const dateStarted = getElementWordBasedOnIndex(textArray, "started");
  const timeStarted = getElementWordBasedOnIndex(textArray, "started", 2);
  const timeRegion = getElementWordBasedOnIndex(textArray, "started", 3);
  const first = getElementWordBasedOnIndex(textArray, "1:");
  const firstCountry =
    textInBrackets[1] === "100%" ? textInBrackets[0] : textInBrackets[2];
  const second = getElementWordBasedOnIndex(textArray, "2:");
  const secondCountry =
    textInBrackets[1] === "100%" ? textInBrackets[2] : textInBrackets[1];
  const third = getElementWordBasedOnIndex(textArray, "3:");
  const thirdCountry =
    textInBrackets[1] === "100%" ? textInBrackets[3] : textInBrackets[2];
  const result = getElementWordBasedOnIndex(textArray, "finished", 2);

  return {
    tournamentNumber,
    buyIn,
    rake,
    totalBuyIn,
    numberOfPlayers,
    prizePool,
    currency,
    dateStarted,
    timeStarted,
    timeRegion,
    first,
    firstCountry,
    second,
    secondCountry,
    third,
    thirdCountry,
    result,
  };
};
