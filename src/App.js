import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./Pages/RootLayout";
import ErrorPage from "./Pages/Error";
import HomePage from "./Pages/Home";
import DataInsightsPage from "./Pages/DataInsights";
import About from "./Pages/About";
import Logout from "./Pages/Logout";
import Blog from "./Pages/Blog";
import BlogPosts from "./Pages/BlogPosts";
import { loader as insightsLoader } from "./Components/DataInsights";
import Visualizations from "./Pages/Visualizations";

function App() {
  //console.log(test);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <ErrorPage />,
      children: [
        { index: true, element: <HomePage /> },
        { path: "about", element: <About /> },
        {
          path: "dataInsights",
          element: <DataInsightsPage />,
          loader: insightsLoader,
        },
        {
          path: "visuals",
          element: <Visualizations />,
        },
        {
          path: "blog",
          children: [
            { index: true, element: <Blog /> },
            { path: ":postID", element: <BlogPosts /> },
          ],
        },
        { path: "logout", element: <Logout /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
