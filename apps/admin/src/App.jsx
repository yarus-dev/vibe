import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import { LoadingPage } from "@/pages/Loading";
import { LoginPage } from "@/pages/Login";


const router = createBrowserRouter(
    [
        {
          id: "root",
          path: "/",
          Component: LoginPage,
        },
      ]
);

if (import.meta.hot) {
  import.meta.hot.dispose(() => router.dispose());
}

export function App() {
  return <RouterProvider router={router} />;
}
