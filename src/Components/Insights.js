import { findAvgWorked, findAvgMeditated } from "../Helpers/Helpers";

const AverageInsights = (props) => {
    const { forestData, insightTimerData } = props;

    const avgWorked = findAvgWorked(forestData);
  const avgMeditated = findAvgMeditated(insightTimerData);

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
    </>
  );
};

export default AverageInsights;
