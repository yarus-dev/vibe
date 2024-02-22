import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

import { BrowserRouter, Routes, Route, Outlet, Link } from "react-router-dom";

import { Layout } from "@/partials/Layout";

import { NotFoundPage } from "@/pages/NotFound";
import { LoadingPage } from "@/components/Loading";

const JournalPage = lazy(() => import("@/pages/Journal"));
const LoginPage = lazy(() => import("@/pages/Login"));
const ProfilePage = lazy(() => import("@/pages/Login"));

export function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          index
          element={
            <Suspense fallback={<LoadingPage />}>
              <JournalPage />
            </Suspense>
          }
        />
        <Route
          path="profile"
          element={
            <Suspense fallback={<LoadingPage />}>
              <ProfilePage />
            </Suspense>
          }
        />
        <Route
          path="*"
          element={<NotFoundPage />}
        />
      </Route>
      <Route path="login" element={<LoginPage />} />
    </Routes>
    </BrowserRouter>
  )
}
