import { Outlet } from "react-router";
import Nav from "./Nav";
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
