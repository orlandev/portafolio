import React from "react";

// components
import Navbar from "../../components/Navbar/Navbar";

// sections
import Hero from "./Sections/Hero";
import Work from "./Sections/Work";
import AboutMe from "./Sections/AboutMe";

export default function Home() {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <Navbar />
      <Hero />
      <Work />
      <AboutMe />
    </div>
  );
}
