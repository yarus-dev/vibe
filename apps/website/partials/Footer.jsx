export function Footer({ children, className, ...props }) {
  return (
    <footer
      className={[
        "container max-w-prose mx-auto text-center pb-3 pt-3",
        className,
      ].join(" ")}
    >
      Made with&nbsp;❤️&nbsp;by{" "}
      <a className="text-blue-600 underline" href="https://yarus.app">
        Yaroslav Usenko
      </a>
    </footer>
  );
}
