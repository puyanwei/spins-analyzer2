export const spinFileFormatter = (text) => {
  const textArray = text.replace(/(\r\n|\n|\r)/gm, "").split(" ");

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
  const second = getElementWordBasedOnIndex(textArray, "2:");
  const third = getElementWordBasedOnIndex(textArray, "3:");
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
    second,
    third,
    result,
  };
};

const getElementWordBasedOnIndex = (array, string, elementMovement = 1) =>
  array[array.indexOf(string) + elementMovement];
