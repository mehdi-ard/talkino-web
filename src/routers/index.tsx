import { lazy } from "react";
import type { RouteObject } from "react-router-dom";

const Home = lazy(() => import("@/app/Home"));

const router: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
];

export default router;
