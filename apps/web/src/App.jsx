import { ErrorPage } from "@/pages/Error";
import { JournalPage } from "@/pages/Journal";
// import { LoadingPage } from "@/pages/Loading";
import { LoginPage } from "@/pages/Login";
import { SettingsPage } from "@/pages/Settings";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
const router = createBrowserRouter(
  import.meta.env.PROD
    ? [
        {
          id: "root",
          path: "/",
          Component: LoginPage,
        },
      ]
    : [
        {
          id: "root",
          path: "/",
          children: [
            {
              index: true,
              Component: JournalPage,
            },
            {
              path: "/profile",
              Component: SettingsPage,
            },
            {
              path: "/login",
              Component: LoginPage,
            },
            {
              path: "*",
              element: <ErrorPage />,
            },
          ],
        },
      ],
);

if (import.meta.hot) {
  import.meta.hot.dispose(() => router.dispose());
}

export function App() {
  return <RouterProvider router={router} />;
}
