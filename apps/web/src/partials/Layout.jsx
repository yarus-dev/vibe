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
];

export function Layout() {
  return (
    <div>
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
