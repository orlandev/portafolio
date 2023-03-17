import React, { useMemo, useCallback } from "react";
import { useLocation } from "react-router-dom";

// javascript
import { scrollTo } from "some-javascript-utils/browser";

// contexts
import { useLanguage } from "../../contexts/LanguageProvider";

export default function Navbar() {
  const { languageState } = useLanguage();

  const links = useMemo(() => {
    return languageState.texts.links;
  }, [languageState]);

  const location = useLocation();

  const printLinks = useCallback(() => {
    const { hash } = location;
    return links.map((item) => (
      <a
        key={item.to}
        href={item.to}
        className={`${
          hash === item.hash && !item.primary
            ? "text-plight font-bold"
            : "text-white-hover hover:text-primary"
        } transition p-button rounded-button ${
          item.primary
            ? "bg-primary hover:bg-plight text-white hover:text-white"
            : ""
        }`}
      >
        {item.label}
      </a>
    ));
  }, [location, links]);

  return (
    <div className="flex justify-between items-center h-20 w-full bg-dark-background2 px-5 ">
      <a href="/" className="text-white" onClick={() => scrollTo(0)}>
        LOGO
      </a>
      <div className="flex items-center gap-2">{printLinks()}</div>
    </div>
  );
}
