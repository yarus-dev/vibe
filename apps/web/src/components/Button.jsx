import { clsx } from "clsx";

export function Button({ className, color = "dark", children, ...props }) {
  return (
    <div
      type="button"
      className={clsx(
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
      )}
      {...props}
    >
      {children}
    </div>
  );
}
