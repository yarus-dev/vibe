import { Apple, Google } from "@/assets/Icons";
import { Button } from "@/components/Button";
import { Footer } from "@/partials/Footer";
import { Link } from "react-router-dom";

export function LoginPage() {
  return (
    <div className="flex flex-col size-full min-h-screen">
      <div className="container max-w-prose m-auto px-7 py-8">
        <header className="mb-8 text-center">
          <h1 className="mb-4 text-3xl font-bold">Welcome to Vibe</h1>
          <p>
            Sign in to your account and start building good habits with Vibe
          </p>
        </header>
        <nav className="flex flex-col gap-4">
          <Link to="/" className="block">
            <Button className="w-full">
              <Apple />
              Continue with Apple
            </Button>
          </Link>

          <Link to="/" className="block">
            <Button className="w-full">
              <Google />
              Continue with Google
            </Button>
          </Link>
        </nav>
      </div>
      <Footer />
    </div>
  );
}
