import React, { useMemo } from "react";

// contexts
import { useLanguage } from "../../../contexts/LanguageProvider";

export default function Hero() {
  const { languageState } = useLanguage();

  const { hero, contact } = useMemo(() => {
    return {
      hero: languageState.texts.home.hero,
      contact: languageState.texts.buttons.contact,
    };
  }, [languageState]);

  return (
    <div className="section w-full min-h-screen">
      <h1>{}</h1>
    </div>
  );
}
