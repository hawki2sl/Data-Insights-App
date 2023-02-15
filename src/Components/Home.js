import { useState, useEffect, useRef } from "react";
import UploadData from "./Upload/UploadData";
import useFetch from "./CustomHooks/useFetch";

const Home = () => {
  const [data, setData] = useState(null);
  const [dataUploaded, setDataUploaded] = useState(false);

  const URL =
    "https://qs-project-166f9-default-rtdb.firebaseio.com/datasets.json";

  const renderCount = useRef(1);
  console.log("Number of Home renders: ", renderCount.current++);

  const { fetchingError, isLoading, fetchRequest } = useFetch();

  useEffect(() => {
    fetchRequest({ url: URL }, setData);
  }, [fetchRequest]);

  let content;
  if (isLoading) {
    content = <>Data is loading...</>;
  } else if (fetchingError) {
    content = <p>{fetchingError}</p>;
  } else if (dataUploaded) {
    content = <p>Data is uploaded!</p>;
  } else {
    content = (
      <UploadData setData={setData} setDataUploaded={setDataUploaded} />
    );
  }

  // console.log(content);

  return <>{content}</>;
};

export default Home;
