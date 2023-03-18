import React, { useMemo, useState } from "react";

// @fortawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGraduationCap,
  faClover,
  faUserAstronaut,
} from "@fortawesome/free-solid-svg-icons";

// sito components
import SitoImage from "sito-image";

// contexts
import { useLanguage } from "../../../contexts/LanguageProvider";

// images
import orlando from "../../../assets/images/orlando.jpg";

// styles
import "./styles.css";

export default function AboutMe() {
  const { languageState } = useLanguage();

  const { aboutMe } = useMemo(() => {
    return {
      aboutMe: languageState.texts.home.aboutMe,
    };
  }, [languageState]);

  return (
    <div id="about-me" className="section about-me w-full min-h-screen bg-dark-background flex flex-col items-center justify-center gap-10">
      <h2 className="text-white font-bold text-2xl">{aboutMe.title}</h2>
      <div className="flex items-start justify-center gap-10">
        <div className="card">
          <FontAwesomeIcon
            className="text-4xl text-white"
            icon={faGraduationCap}
          />
          <p className="">{aboutMe.body1}</p>
        </div>
        <div className="card">
          <FontAwesomeIcon className="text-4xl text-white" icon={faClover} />
          <p className="">{aboutMe.body2}</p>
        </div>
        <div className="card">
          <FontAwesomeIcon
            className="text-4xl text-white"
            icon={faUserAstronaut}
          />
          <p className="">{aboutMe.body3}</p>
        </div>
      </div>
    </div>
  );
}
