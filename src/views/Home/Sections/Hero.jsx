import React, { useMemo } from "react";

// sito components
import SitoImage from "sito-image";

// contexts
import { useLanguage } from "../../../contexts/LanguageProvider";

// images
import olrando from "../../../assets/images/orlando.jpg";

// styles
import "./styles.css";

export default function Hero() {
  const { languageState } = useLanguage();

  const { hero, contact } = useMemo(() => {
    return {
      hero: languageState.texts.home.hero,
      contact: languageState.texts.buttons.contact,
    };
  }, [languageState]);

  return (
    <div className="section hero w-full min-h-screen bg-dark-background flex items-center justify-between ">
      <div className="communication flex flex-col items-start justify-center w-full gap-3">
        <h1 className="text-white font-bold text-4xl">{hero.title}</h1>
        <h2 className="text-white font-bold text-2xl">{hero.subtitle}</h2>
        <p className="text-white-hover">{hero.body}</p>
        <button className="cta">{contact}</button>
      </div>
      <div className="image">
        <SitoImage
          className="rounded-circle object-cover"
          src={olrando}
          alt="this is orlando"
        />
      </div>
    </div>
  );
}
