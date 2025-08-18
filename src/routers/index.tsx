import { lazy } from "react";
import type { RouteObject } from "react-router-dom";

const Home = lazy(() => import("@/app/Home"));
const SinglePage = lazy(() => import("@/app/Single"));

const router: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/:slug",
    element: <SinglePage />,
  },
];

export default router;
