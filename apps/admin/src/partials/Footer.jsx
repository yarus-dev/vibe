export function Footer({ children, ...props }) {
  return (
    <footer className="container max-w-prose mx-auto text-center mb-3 mt-3">
      Made with&nbsp;❤️&nbsp;by{" "}
      <a className="text-blue-600 underline" href="https://yarus.app">
        Yaroslav Usenko
      </a>
    </footer>
  );
}
