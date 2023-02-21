import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  let errorMessage = "Whoops!";
  
  if (error.status === 500) {
    errorMessage = error.data.message;
  }

  return (
    <>
      <h1>There was an error...</h1>
      {error.status}
      {errorMessage}
    </>
  );
};

export default ErrorPage;
