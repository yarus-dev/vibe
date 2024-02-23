import { LoginPage } from "@/pages/Login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "*",
    element: <LoginPage />,
  },
]);

if (import.meta.hot) {
  import.meta.hot.dispose(() => router.dispose());
}

export function App() {
  return <RouterProvider router={router} />;
}
