import React from "react";
import UploadDataForm from "../UploadDataForm";
import useDataParsing from "../../CustomHooks/useDataParsing";
import { useState } from "react";
import useFetch from "../../CustomHooks/useFetch";

const UploadInsightTimerData = (props) => {
  const [parsedInsightTimerData, setParsedInsightTimerData] = useState(null);

  const { fetchingError, fetchRequest } = useFetch();

  const dataParserObj = useDataParsing();
  const { parseError, parseData } = dataParserObj;

  const insightTimerURL =
    "https://qs-project-166f9-default-rtdb.firebaseio.com/datasets/insightTimer.json";

  const handleFile = (event) => {
    parseData(event, "Insight Timer", setParsedInsightTimerData);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    fetchRequest(
      {
        url: insightTimerURL,
        method: "PUT",
        body: parsedInsightTimerData,
        header: {
          "Content-Type": "application/json",
        },
      },
      null
    );

    props.setInsightTimerData(parsedInsightTimerData);

    console.log("Insight Timer data added to DB and state.");
  };

  let content;
  if (parseError) {
    content = <p>Insight Timer parsing error.</p>;
  } else if (fetchingError) {
    content = <p>{fetchingError}</p>;
  } else {
    content = (
      <UploadDataForm
        id={"insightTimer"}
        type={"Insight Timer"}
        onChange={handleFile}
        onSubmit={handleSubmit}
      />
    );
  }

  return <>{content}</>;
};

export default UploadInsightTimerData;
