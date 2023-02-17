import { useState, useEffect, useRef } from "react";
import UploadForestData from "./Applications/UploadForestData";
import UploadInsightTimerData from "./Applications/UploadInsightTimerData";
import Insights from "./Insights";
import MyAttempt from "../Visualizations/MyAttempt";
import classes from "../Components/Home.module.css";
import { useLoaderData, json } from "react-router-dom";

const DataInsights = () => {
  const [forestData, setForestData] = useState(null);
  const [insightTimerData, setInsightTimerData] = useState(null);

  const data = useLoaderData();
  const fetchedForestData = data.forest;
  const fetchedITData = data.insightTimer;

  useEffect(() => {
    setForestData(fetchedForestData);
  }, [fetchedForestData]);

  useEffect(() => {
    setInsightTimerData(fetchedITData);
  }, [fetchedITData]);

  const renderCount = useRef(1);
  console.log("Number of Home renders: ", renderCount.current++);

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


  return (
    <>
      {forestData && insightTimerData ? (
        <div className={classes.container}>
          <Insights
            forestData={fetchedForestData}
            insightTimerData={fetchedITData}
          />
          <div className={classes.visHolder} id="visHolder">
            <MyAttempt
              forestData={fetchedForestData}
              insightTimerData={fetchedITData}
            />
          </div>
        </div>
      ) : (
        <div>
          <h1>Upload Data Files</h1>
          {uploadArea}
        </div>
      )}
    </>
  );
};

export default DataInsights;

export const loader = async () => {
  const response = await fetch(
    "https://qs-project-166f9-default-rtdb.firebaseio.com/datasets.json"
  );

  if (!response.ok) {
    return json({ message: "Data fetching error!" }, { status: 500 });
  } else {
    return response;
  }
};
