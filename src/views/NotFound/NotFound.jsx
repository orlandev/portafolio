import React, { useMemo } from "react";
import { Link } from "react-router-dom";

// contexts
import { useLanguage } from "../../contexts/LanguageProvider";

// styles
import "./style.css";

export default function NotFound({ index }) {
  const { languageState } = useLanguage();

  const notFound = useMemo(() => {
    return languageState.texts.notFound;
  }, [languageState]);

  return (
    <div>
      <div className="w-full not-found-container flex items-center dark:bg-dark-background2 bg-light-background2">
        <div className="not-found flex-1 w-full h-full flex flex-col gap-3 items-center justify-center">
          <h1 className="text-h3 font-bold dark:text-white text-dark-background2">
            {notFound.title} 404
          </h1>
          <p className="dark:text-white-hover text-dark-background2">
            {notFound.body}
          </p>
          <Link to={index || "/"}>
            <button className="bg-primary font-medium text-white rounded-button p-button text-background transition dark:hover:bg-pdark hover:bg-pdark gap-2 flex items-center">
              {languageState.texts.buttons.home}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
