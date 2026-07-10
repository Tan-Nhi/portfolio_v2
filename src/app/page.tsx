'use client';
import AboutPage from "./components/About";
import ExperiencePage from "./components/Experience";
import HeroPage from "./components/Hero";
import ProjectsPage from "./components/Projects";
import ReviewsPage from "./components/Reviews";
import SkillPage from "./components/Skills";

export default function Home() {
  return (
    <>
      <HeroPage />
      <AboutPage />
      <ExperiencePage />
      <SkillPage />
      <ProjectsPage />
      <ReviewsPage />
    </>
  );
}
