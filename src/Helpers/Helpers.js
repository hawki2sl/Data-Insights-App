export const dateDelimiter = (item) => {
  if (item["StartTime"]) {
    const stringDate = item["StartTime"].split("T")[0];
    //const date = new Date(stringDate);
    return stringDate;
  } else {
    const stringDate = item["StartedAt"].split(/[\s]/)[0];
    //const date = new Date(stringDate);
    return stringDate;
  }
};

export const insightDurationParser = (stringDuration) => {
  const splitDuration = stringDuration.split(":"),
    hours = parseInt(splitDuration[0]),
    minutes = parseInt(splitDuration[1]),
    seconds = parseInt(splitDuration[2]);

  const totalMilliseconds =
    hours * 60 * 60 * 1000 + minutes * 60 * 1000 + seconds * 1000;

  return totalMilliseconds;
};

export const getForestMap = (forestData) => {
  const map = new Map();

  for (let i = 0; i < forestData.length; i++) {
    const stringDate = dateDelimiter(forestData[i]);

    if (map.has(stringDate)) {
      const value = map.get(stringDate);
      map.set(stringDate, value + 25);
    } else {
      map.set(stringDate, 25);
    }
  }
  return map;
};

export const getInsightTimerMap = (insightTimerData) => {
  const map = new Map();

  for (let i = 0; i < insightTimerData.length; i++) {
    const stringDate = dateDelimiter(insightTimerData[i]);
    // const date = new Date(stringDate);

    const duration = insightDurationParser(insightTimerData[i]["Duration"]);

    if (map.has(stringDate)) {
      const value = map.get(stringDate);
      map.set(stringDate, value + duration);
    } else {
      map.set(stringDate, duration);
    }
  }
  return map;
};

export const findAvgWorked = (forestData) => {
  console.log("findAvgWorked render");

  const forestMap = getForestMap(forestData);

  const daysTracked = forestMap.size;

  let sum = 0;
  forestMap.forEach((value) => {
    sum += value;
  });
  const average = sum / 60 / daysTracked;
  return average.toFixed(2);
};

export const findAvgMeditated = (insightTimerData) => {
  console.log("findAvgMeditated render");

  const insightTimerMap = getInsightTimerMap(insightTimerData);
  const daysTracked = insightTimerMap.size;

  let sum = 0;
  insightTimerMap.forEach((value) => {
    sum += value;
  });
  const average = sum / 1000 / 60 / daysTracked;
  return average.toFixed(2);
};

export const findDaysDidntWork = (forestData) => {
  const start = new Date(dateDelimiter(forestData[0])),
    end = new Date(dateDelimiter(forestData[forestData.length - 1]));

  const daysDif = (end - start) / 1000 / 60 / 60 / 24;

  const daysWorked = getForestMap(forestData).size;

  return (daysDif - daysWorked).toFixed(0);
};

export const findDaysDidntMeditate = (insightTimerData) => {
  const end = new Date(dateDelimiter(insightTimerData[0])),
    start = new Date(
      dateDelimiter(insightTimerData[insightTimerData.length - 2])
    );

  const daysDif = (end - start) / 1000 / 60 / 60 / 24;

  const daysMeditated = getInsightTimerMap(insightTimerData).size;

  return (daysDif - daysMeditated).toFixed(0);
};
