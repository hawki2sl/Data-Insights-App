import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./Pages/RootLayout";
import ErrorPage from "./Pages/ErrorPage";
import HomePage from "./Pages/HomePage";
import DataInsightsPage from "./Pages/DataInsightsPage";
import About from "./Pages/About";
import Logout from "./Pages/Logout";
import Blog from "./Pages/Blog";
import BlogPosts from "./Pages/BlogPosts";

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
        { path: "dataInsights", element: <DataInsightsPage /> },
        { path: "blog", element: <Blog /> },
        { path: "blog/:postID", element: <BlogPosts /> },
        { path: "logout", element: <Logout /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
