//How much more productive are you on days when you meditate for at least 20 minutes?
// 1. Split your dataset into two separate arrays - one for days when you meditated for at least twenty minutes, and another for days when you didn't.
// 2. Calculate the average number of minutes worked per day for each of the two arrays.
// 3. Calculate the difference between the average number of minutes worked for the two arrays. This will give you an estimate of how much more productive you are on days when you meditate for at least twenty minutes.

const getDates = (insightTimerData) => {
  const dateDurations = {};

  // Iterate over the insightTimerData array and combine durations for each unique date
  for (const data of insightTimerData) {
    const date = data.StartedAt.split(" ")[0]; // Extract date from StartedAt string
    const [hours, minutes, seconds] = data.Duration.split(":").map(Number); // Extract hours, minutes and seconds from Duration string and convert to numbers

    const totalDuration = hours * 3600 + minutes * 60 + seconds; // Calculate total duration in seconds

    if (!dateDurations[date]) {
      dateDurations[date] = {
        date,
        totalDuration,
      };
    } else {
      const prevTotalDuration = dateDurations[date].totalDuration;
      const newTotalDuration = prevTotalDuration + totalDuration; // Calculate new total duration in seconds

      dateDurations[date].totalDuration = newTotalDuration;
    }
  }

  // Convert the dateDurations object into an array of objects
  const datesAndDurations = Object.values(dateDurations).reverse();

  const datesOverTwenty = [];
  const datesUnderTwenty = [];

  datesAndDurations.forEach((element) => {
    if (element.totalDuration > 1200) {
      datesOverTwenty.push(element.date);
    } else {
      datesUnderTwenty.push(element.date);
    }
  });

  return { datesOverTwenty, datesUnderTwenty };
};

const compareProductivityWithDates = (datesOverTwenty, datesUnderTwenty) => {



};

export const atLeastTwentyMin = (forestData, insightTimerData) => {
  const { datesOverTwenty, datesUnderTwenty } = getDates(insightTimerData);

  console.log(compareProductivityWithDates(datesOverTwenty, datesUnderTwenty));
};
