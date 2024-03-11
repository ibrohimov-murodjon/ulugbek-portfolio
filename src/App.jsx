import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayouts from "./layouts/RootLayouts";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Me from "./pages/About";
import ProjectDetails from "./pages/ProjectDetails";

export default function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <RootLayouts />,
      children: [
        {
          index: true,
          path: "/",
          element: <Home />,
        },
        {
          path: "/me",
          element: <Me />,
        },
        {
          path: "/blog",
          element: <Blog />,
        },
        {
          path: "/:slug",
          element: <ProjectDetails />,
        },
      ],
    },
  ]);
  return <RouterProvider router={routes} />;
}
