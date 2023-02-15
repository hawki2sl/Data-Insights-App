import UploadDataForm from "../Upload/UploadDataForm";
import useDataParsing from "../CustomHooks/useDataParsing";
import useFetch from "../CustomHooks/useFetch";
import { useState } from "react";

const UploadForestData = (props) => {
  const [forestData, setForestData] = useState(null);
  const [parsedForestData, setParsedForestData] = useState(null);

  const { fetchingError, fetchRequest } = useFetch();

  const dataParserObj = useDataParsing();
  const { parseError, parseData } = dataParserObj;

  const forestURL =
    "https://qs-project-166f9-default-rtdb.firebaseio.com/datasets/forest.json";

  const handleFile = (event) => {
    parseData(event, "Forest", setParsedForestData);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    fetchRequest(
      {
        url: forestURL,
        method: "PUT",
        body: parsedForestData,
        header: {
          "Content-Type": "application/json",
        },
      }, null

    );

    setForestData(parsedForestData);

    console.log("Forest data added to DB and state.");
  };

  if (forestData) {
    props.setForestDataUploaded(true);
  }

  let content;
  if (parseError) {
    content = <p>Forest parsing error.</p>;
  } else if (fetchingError) {
    content = <p>{fetchingError}</p>;
  } else {
    content = (
      <UploadDataForm
        id={"forest"}
        type={"Forest"}
        onChange={handleFile}
        onSubmit={handleSubmit}
      />
    );
  }

  return <>{content}</>;
};

export default UploadForestData;
