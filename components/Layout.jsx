"use client";
import Titlebar from "../components/Titlebar";
import Sidebar from "../components/Sidebar";
import Explorer from "../components/Explorer";
import Bottombar from "../components/Bottombar";
import Tabsbar from "./Tabsbar";
import styles from "../styles/Layout.module.css";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { Analytics } from "@vercel/analytics/react";
// import { SpeedInsights } from "@vercel/speed-insights/next";

const Layout = ({ children }) => {
  // set scroll to top of main content on url pathname change
  const router = useRouter();
  useEffect(() => {
    const main = document.getElementById("main-editor");
    main.scrollTop = 0;
  }, [router.pathname]);
  return (
    <>
      <Titlebar />
      <div className={styles.main}>
        <Sidebar />
        <Explorer />
        <div style={{ width: "100%" }}>
          <Tabsbar />
          <main id="main-editor" className={styles.content}>
            {children}
            <Analytics mode={"production"} />
            {/* <SpeedInsights /> */}
          </main>
        </div>
      </div>
      <Bottombar />
    </>
  );
};

export default Layout;
