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
    <div className="section w-full min-h-screen bg-dark-background">
      <h1 className="text-white font-bold text-4xl">{hero.title}</h1>
      <p className="text-white-hover">{hero.body}</p>
      <button className="cta">{contact}</button>
    </div>
  );
}
