import { useState } from "react";
import UploadForestData from "../Applications/UploadForestData";
import UploadInsightTimerData from "../Applications/UploadInsightTimerData";

const UploadData = (props) => {
  const [forestDataUploaded, setForestDataUploaded] = useState(false);
  const [insightTimerDataUploaded, setInsightTimerDataUploaded] =
    useState(false);

  //if forestData and insightTimerData,
  //props.setData and props.setDataUploaded

  if (forestDataUploaded && insightTimerDataUploaded) {
    props.setDataUploaded(true);
  }

  return (
    <>
      {!(forestDataUploaded && insightTimerDataUploaded) && (
        <>
          <UploadForestData setForestDataUploaded={setForestDataUploaded} />
          <UploadInsightTimerData
            setInsightTimerDataUploaded={setInsightTimerDataUploaded}
          />
        </>
      )}
    </>
  );
};

export default UploadData;
