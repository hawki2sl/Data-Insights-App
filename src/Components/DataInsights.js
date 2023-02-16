import { useState, useEffect, useRef } from "react";
import useFetch from "../CustomHooks/useFetch";
import UploadForestData from "./Applications/UploadForestData";
import UploadInsightTimerData from "./Applications/UploadInsightTimerData";
import Insights from "./Insights";
import MyAttempt from "../Visualizations/MyAttempt";
import classes from "../Components/Home.module.css";

const DataInsights = () => {
  const [forestData, setForestData] = useState(null);
  const [insightTimerData, setInsightTimerData] = useState(null);

  const forestURL =
    "https://qs-project-166f9-default-rtdb.firebaseio.com/datasets/forest.json";
  const insightTimerURL =
    "https://qs-project-166f9-default-rtdb.firebaseio.com/datasets/insightTimer.json";

  const renderCount = useRef(1);
  console.log("Number of Home renders: ", renderCount.current++);

  const { fetchingError, isLoading, fetchRequest } = useFetch();

  useEffect(() => {
    fetchRequest({ url: forestURL }, setForestData);
    fetchRequest({ url: insightTimerURL }, setInsightTimerData);
  }, [fetchRequest]);

  let uploadArea = (
    <>
      {forestData ? (
        <p>Forest data uploaded!</p>
      ) : (
        <UploadForestData setForestData={setForestData} />
      )}
      {insightTimerData ? (
        <p>InsightTimer data uploaded!</p>
      ) : (
        <UploadInsightTimerData setInsightTimerData={setInsightTimerData} />
      )}
    </>
  );

  // console.log(content);

  return (
    <>
      <div>
        {isLoading ? (
          <p>Data loading</p>
        ) : fetchingError ? (
          <p>{fetchingError}</p>
        ) : forestData && insightTimerData ? (
          <div className={classes.container}>
            <Insights
              forestData={forestData}
              insightTimerData={insightTimerData}
            />
            <div className={classes.visHolder} id="visHolder">
              <MyAttempt
                forestData={forestData}
                insightTimerData={insightTimerData}
              />
            </div>
          </div>
        ) : (
          <div>
            <h1>Upload Data Files</h1>
            {uploadArea}
          </div>
        )}
      </div>
    </>
  );
};

export default DataInsights;