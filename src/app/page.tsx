'use client';
import AboutPage from "./components/About";
import ExperiencePage from "./components/Experience";
import HeroPage from "./components/Hero";
import SkillPage from "./components/Skills";

export default function Home() {
  return (
    <>
      <HeroPage />
      <AboutPage />
      <ExperiencePage />
      <SkillPage />
    </>
  );
}
