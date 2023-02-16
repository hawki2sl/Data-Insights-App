import Papa from "papaparse";
import { useState } from "react";

const useDataParsing = () => {
  const [parseError, setParseError] = useState(null);

  const parseData = (event, appName, applyData) => {
    setParseError(null);

    try {
      Papa.parse(event.target.files[0], {
        header: true,
        skipEmptyLines: appName === "Forest" ? true : "greedy",
        transformHeader: function (h) {
          return h.replace(" ", "");
        },
        complete: function (results) {
          if (results === null || results === undefined) {
            throw new Error("Request failed.");
          }
          applyData(results.data);
        },
      });
    } catch (error) {
      setParseError(error.message || "Something went wrong!");
    }
  };

  return {
    parseError,
    parseData,
  };
};

export default useDataParsing;