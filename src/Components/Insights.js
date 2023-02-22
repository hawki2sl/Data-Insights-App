import { findAvgWorked, findAvgMeditated } from "../Helpers/Helpers";
import { atLeastTwentyMin } from "../Helpers/Helpers2";

const AverageInsights = (props) => {
    const { forestData, insightTimerData } = props;

    const avgWorked = findAvgWorked(forestData);
  const avgMeditated = findAvgMeditated(insightTimerData);
  const atLeastTwenty = atLeastTwentyMin(forestData, insightTimerData);

  return (
    <>
      <div>
        <h3>Productivity</h3>
        <p>You worked for an average of {avgWorked} hours per day. </p>
      </div>
      <div>
        <h3>Meditation</h3>
        <p>You meditated an average of {avgMeditated} minutes per day. </p>
      </div>
      <div>
        <h3>The Relationship Between Meditation and Productivity for You</h3>
        <p>You are {atLeastTwenty? atLeastTwenty : "?"} more productive on days when you meditate for at least 20 minutes.</p>
      </div>
    </>
  );
};

export default AverageInsights;
