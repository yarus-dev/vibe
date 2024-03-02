import { Link, Outlet } from "react-router-dom";

const Links = [
  {
    to: "/",
    label: "Journal",
  },
  {
    to: "/login",
    label: "Login",
  },
  {
    to: "/profile",
    label: "profile",
  },
];

export function Layout() {
  return (
    <div className="size-full flex flex-row">
      <nav>
        <ul>
          {Links.map(({ to, label }) => (
            <li key={`${to}-${label}`}>
              <Link to={to}>{label}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}
