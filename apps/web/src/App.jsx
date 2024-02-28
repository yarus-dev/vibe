import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { JournalPage } from "@/pages/Journal";
// import { LoadingPage } from "@/pages/Loading";
import { LoginPage } from "@/pages/Login";
import { SettingsPage } from "@/pages/Settings";
import { Layout } from "@/partials/Layout";


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
          Component: Layout,
          children: [
            { index: true, element: <JournalPage /> },
            { path: "/profile", element: <SettingsPage /> },
          ],
        },
        {
          path: "/login",
          element: <LoginPage />,
        },
      ],
);

if (import.meta.hot) {
  import.meta.hot.dispose(() => router.dispose());
}

export function App() {
  return <RouterProvider router={router} />;
}
