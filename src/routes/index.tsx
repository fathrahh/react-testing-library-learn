import * as React from "react";
import { useRoutes } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

const Loading = () => <div>Loading</div>;

const Loadable = (Component: React.ElementType) => (props: any) => {
  return (
    <React.Suspense fallback={<Loading />}>
      <Component {...props} />
    </React.Suspense>
  );
};

export default function Router() {
  return useRoutes([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          path: "",
          element: <Home />,
        },
        {
          path: "about",
          element: <About />,
        },
      ],
    },
  ]);
}

const Home = Loadable(React.lazy(() => import("../pages/Home")));
const About = Loadable(React.lazy(() => import("../pages/About")));
