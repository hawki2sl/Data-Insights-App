import { findAvgWorked, findAvgMeditated } from "../Helpers/Helpers";
import { useMemo } from "react";

const Insights = (props) => {
    const { forestData, insightTimerData } = props;

    const avgWorked = useMemo(() => findAvgWorked(forestData), [forestData]);
    const avgMeditated = useMemo(() => findAvgMeditated(insightTimerData), [insightTimerData])

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

export default Insights;
