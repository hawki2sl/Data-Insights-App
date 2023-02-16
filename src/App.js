import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./Pages/RootLayout";
import ErrorPage from "./Pages/ErrorPage";
import HomePage from "./Pages/HomePage";
import DataInsightsPage from "./Pages/DataInsightsPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <ErrorPage />,
      children: [{ index: true, element: <HomePage /> }, { path: "dataInsights", element: <DataInsightsPage /> }],
    },
  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;
