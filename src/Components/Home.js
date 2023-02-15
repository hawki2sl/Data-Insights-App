import { useState, useEffect, useRef } from "react";
import UploadData from "./Upload/UploadData";
import useFetch from "./CustomHooks/useFetch";
import UploadForestData from "./Applications/UploadForestData";
import UploadInsightTimerData from "./Applications/UploadInsightTimerData";

const Home = () => {
  const [forestData, setForestData] = useState(null),
    [forestDataUploaded, setForestDataUploaded] = useState(false);
  const [insightTimerData, setInsightTimerData] = useState(null),
    [insightTimerDataUploaded, setInsightTimerDataUploaded] = useState(false);

  const URL =
    "https://qs-project-166f9-default-rtdb.firebaseio.com/datasets.json";

  const renderCount = useRef(1);
  console.log("Number of Home renders: ", renderCount.current++);

  const { fetchingError, isLoading, fetchRequest } = useFetch();

  // useEffect(() => {
  //   fetchRequest({ url: URL }, setData);
  // }, [fetchRequest]);

  let content = (
      <>
      <UploadForestData setForestData={setForestData} setForestDataUploaded={setForestDataUploaded}/>
      <UploadInsightTimerData setInsightTimerData={setInsightTimerData} setInsightTimerDataUploaded={setInsightTimerDataUploaded}/>
      </>
    );

  // console.log(content);

  return <>{content}</>;
};

export default Home;
