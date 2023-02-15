import React from "react";

const UploadDataForm = (props) => {
  return (
    <form onSubmit={props.onSubmit}>
      <label htmlFor={props.id}>Upload {props.type} Data</label>
      <input
        id={props.id}
        type="file"
        name="file"
        onChange={props.onChange}
        accept=".csv"
        style={{ display: "block", margin: "10px auto" }}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default UploadDataForm;