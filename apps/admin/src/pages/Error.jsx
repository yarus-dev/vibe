import { useRouteError } from "react-router-dom";
import { NotFound } from "@/partials/NotFound";

function Center({ children }) {
  return (
    <div className="flex w-full h-full min-h-screen">
      <div className="m-auto max-w-prose w-full px-7 py-8">{children}</div>
    </div>
  );
}

export function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  if (error.status === 404) {
    return (
      <Center>
        <NotFound />
      </Center>
    );
  }

  return (
    <Center>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </Center>
  );
}
