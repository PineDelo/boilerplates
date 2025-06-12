import type { RouteObject } from "react-router-dom";

import MainLayout from "@/components/MainLayout";
import Home from "@/pages/Home";

export const routes: RouteObject[] = [
  {
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
];
