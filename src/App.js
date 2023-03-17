/* eslint-disable react-hooks/exhaustive-deps */
import React, { lazy, Suspense, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// some-javascript-utils
import { getUserLanguage } from "some-javascript-utils/browser";

// components
import ToTop from "./components/ToTop/ToTop";
import Handler from "./components/Handler/Handler";
import Loading from "./components/Loading/Loading";

// contexts
import { useLanguage } from "./contexts/LanguageProvider";

const Home = lazy(() => import("./views/Home/Home"));
const NotFound = lazy(() => import("./views/NotFound/NotFound"));

export default function App() {
  const { setLanguageState } = useLanguage();

  useEffect(() => {
    try {
      setLanguageState({
        type: "set",
        lang: getUserLanguage("orlan-dev-portfolio-lan"),
      });
    } catch (err) {
      console.error(err);
    }
  }, []);

  return (
    <div className="App">
      <Handler>
        <Suspense
          fallback={
            <Loading visible className="fixed w-screen h-screen top-0 left-0" />
          }
        >
          <BrowserRouter>
            <ToTop />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </Suspense>
      </Handler>
    </div>
  );
}
