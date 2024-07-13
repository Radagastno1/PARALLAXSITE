import { Outlet } from "react-router-dom";
import Footer from "../components.tsx/Footer";
import ScrollToTop from "../components.tsx/ScrollToTop";
const RootLayout = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        flex: 1,
        minHeight: "100vh",
        alignItems: "center",
        width: "100%",
        margin: 0,
        padding: 0,
        flexGrow: 1,
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
      ></div>
      {/* {isMobile ? <MobileHeader /> : <Header />} */}

      <main
        style={{
          display: "flex",
          flexDirection: "column",
          flexGrow: 1,
          minHeight: "100vh",
          width: "100%",
          alignItems: "center",
        }}
      >
        <ScrollToTop />
        <Outlet />
      </main>

      <footer
        style={{
          width: "100%",
          display: "flex",
          flex: 1,
          flexDirection: "column",
          padding: 0,
          margin: 0,
          maxWidth: "none",
        }}
      >
        <Footer />
      </footer>
    </div>
  );
};

export default RootLayout;
