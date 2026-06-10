import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Contact";

export function HomeLayout() {
  return (
    <>
      <Header variant="home" />
      <Outlet />
      <Footer />
    </>
  );
}

export function LegalLayout() {
  return (
    <>
      <Header variant="legal" />
      <Outlet />
      <Footer />
    </>
  );
}
