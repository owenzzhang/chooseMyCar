import { Outlet } from "react-router";
import Nav from "./nav";
import Footer from "./Footer";

function RootLayout() {
  return (
    <>
      <Nav />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default RootLayout;
