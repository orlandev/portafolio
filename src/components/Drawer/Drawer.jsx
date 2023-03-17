import React, { useMemo, useCallback, useEffect } from "react";
import { useLocation } from "react-router-dom";

// @emotion/css
import { css } from "@emotion/css";

// @fortawesome
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// javascript
import { scrollTo } from "some-javascript-utils/browser";

// contexts
import { useLanguage } from "../../contexts/LanguageProvider";

// styles
import "./styles.css";

export default function Drawer({ visible, onClose }) {
  const { languageState } = useLanguage();

  const links = useMemo(() => {
    return languageState.texts.links;
  }, [languageState]);

  const location = useLocation();

  const escapeHandler = useCallback(
    (e) => {
      const { keyCode } = e;
      if (keyCode === 27) {
        onClose();
        e.target.blur();
      }
    },
    [onClose]
  );

  useEffect(() => {
    window.addEventListener("keydown", escapeHandler);
    return () => {
      window.removeEventListener("keydown", escapeHandler);
    };
  }, [escapeHandler]);

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
            ? "w-full text-center bg-primary hover:bg-plight text-white hover:text-white"
            : "pl-0"
        }`}
      >
        {item.label}
      </a>
    ));
  }, [location, links]);

  return (
    <div
      onClick={onClose}
      className={`${
        visible
          ? "pointer-events-auto opacity-1"
          : "pointer-events-none opacity-0"
      } transition-all w-full h-screen fixed top-0 left-0 bg-dark-drawer-background`}
    >
      <div
        className="drawer"
        style={{ transform: visible ? "translateX(0)" : "translateX(-300px)" }}
      >
        <button className="w-icon h-icon hover:text-primary text-white transition absolute top-8 right-5">
          <FontAwesomeIcon className="text-2xl" icon={faClose} />
        </button>
        <a href="/" className="text-white" onClick={() => scrollTo(0)}>
          LOGO
        </a>
        <div className="flex items-start flex-col gap-2 mt-5">
          {printLinks()}
        </div>
      </div>
    </div>
  );
}
