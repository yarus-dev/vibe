import { GitHub } from "../partials/Icons";

function Button({ children, to, className }) {
  return (
    <a
      href={to}
      className={[
        "relative",
        "isolate",
        "inline-flex",
        "items-center",
        "justify-center",
        "align-baseline",
        "gap-x-2",

        "px-8",
        "py-4",

        "text-base/6",
        "font-extrabold",
        "leading-none",
        "text-center",
        "uppercase",
        "tracking-wide",

        "cursor-pointer",

        "transition",
        "duration-100",
        "focus-visible:ring",

        "outline-none",
        "border-none",

        "rounded-md",

        "text-gray-800",
        "bg-white",
        "ring-2",
        "ring-gray-300",
        "hover:bg-gray-100",
        "active:bg-gray-200",
        className,
      ].join(" ")}
    >
      {children}
    </a>
  );
}
export default function Page() {
  return (
    <div className="m-auto">
      <div className="container max-w-prose m-auto px-7 py-8 text-center">
        <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
          Build Better Habits,
          <br />
          Build a Better Life
        </h1>

        <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
          Harness the power of our personalized habit tracker app to streamline
          your everyday routines and achieve your goals.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button to="https://vibe-app.yarus.app/">Try Vibe Free</Button>

          <Button to="https://github.com/yarus-dev/vibe">
            <GitHub />
            GitHub
          </Button>
        </div>
      </div>
    </div>
  );
}
