'use client';
import { useEffect, useRef, useState } from "react";
import AboutPage from "./components/About";
import ContactPage from "./components/Contact";
import ExperiencePage from "./components/Experience";
import HeroPage from "./components/Hero";
import Navbar from "./components/Navbar";
import ProjectsPage from "./components/Projects";
import ReviewsPage from "./components/Reviews";
import SkillPage from "./components/Skills";

export default function Home() {
  const [id, setId] = useState<number | string>(0);
  const compsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = compsRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const intersecting = entry.isIntersecting
          if (intersecting) {
            setId(entry.target.id)
          }
        })
      }, { threshold: 0.3 },
    )

    const compsArr = Array.from(container.children);
    compsArr.forEach((comp) => {
      observer.observe(comp)
    })
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar id={id} />
      <div ref={compsRef}>
        <HeroPage />
        <AboutPage />
        <ExperiencePage />
        <SkillPage />
        <ProjectsPage />
        <ReviewsPage />
        <ContactPage />
      </div>

    </>
  );
}
