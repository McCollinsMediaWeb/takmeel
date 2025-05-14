// components/FullpageWrapper.js
"use client";

import { useEffect } from "react";
import fullpage from "fullpage.js";
import "fullpage.js/dist/fullpage.min.css";

export default function FullpageWrapper({ children }) {
  useEffect(() => {
    new fullpage("#fullpage", {
      autoScrolling: true,
      scrollHorizontally: true,
      navigation: true,
      scrollingSpeed: 700,
    });

    return () => {
      fullpage.destroy("all");
    };
  }, []);

  return (
    <div id="fullpage">
      {children}
    </div>
  );
}
