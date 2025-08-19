import { lazy } from "react";
import type { RouteObject } from "react-router-dom";

const Home = lazy(() => import("@/app/Home"));
const SinglePage = lazy(() => import("@/app/Single"));
const ContactPage = lazy(() => import("@/app/Contact"));
const FaqPage = lazy(() => import("@/app/Faq"));
const BlogPage = lazy(() => import("@/app/Blog"));
const SinglePost = lazy(() => import("@/app/Blog/singlePost"));

const router: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/contact",
    element: <ContactPage />,
  },
  {
    path: "/faq",
    element: <FaqPage />,
  },
  {
    path: "/blog",
    element: <BlogPage />,
  },
  {
    path: "/blog/:id/:slug",
    element: <SinglePost />,
  },
  {
    path: "/:slug",
    element: <SinglePage />,
  },
];

export default router;
