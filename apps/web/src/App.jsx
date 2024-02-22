import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { ErrorPage } from "@/pages/Error";
import { LoginPage } from "@/pages/Login";
import { SettingsPage } from "@/pages/Settings";


const router = createBrowserRouter([{
  path: "/",
  element: <SettingsPage />,
  errorElement: <ErrorPage />,
}]);


if (import.meta.hot) {
  import.meta.hot.dispose(() => router.dispose());
}

export function App() {
  return (
    <RouterProvider router={router} />
  );
}

