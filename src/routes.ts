import { lazy } from "solid-js";

export const routes = [
  {
    path: "/",
    component: lazy(() => import("./pages/home")),
  },
  {
    path: "/team",
    component: lazy(() => import("./pages/team")),
  },
  {
    path: "/party-center",
    component: lazy(() => import("./pages/party-center")),
  },
  {
    path: "/restaurant",
    component: lazy(() => import("./pages/restaurant")),
  },
  {
    path: "*",
    component: lazy(() => import("./pages/404")),
  },
];
