import React, { useMemo } from "react";

// contexts
import { useLanguage } from "../../../contexts/LanguageProvider";

// styles
import "./styles.css";

export default function Work() {
  const { languageState } = useLanguage();

  const { work } = useMemo(() => {
    return {
      work: languageState.texts.home.work,
    };
  }, [languageState]);

  return (
    <div id="what-i-do" className="section work w-full min-h-screen bg-dark-background2 flex flex-col items-center justify-center gap-3">
      <h2 className="text-white font-bold text-2xl">{work.title}</h2>
    </div>
  );
}
