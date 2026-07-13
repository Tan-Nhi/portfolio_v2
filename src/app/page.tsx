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
import Toggle from "./components/subs/Toggle";
import Loading from "./components/subs/Load";

export default function Home() {
  const [id, setId] = useState<number | string>(0);
  const compsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = compsRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setId(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: "-45% 0px -45% 0px", // chỉ còn 1 dải ngang ~10% ở giữa màn hình
        threshold: 0,
      }
    );

    const compsArr = Array.from(container.children);
    compsArr.forEach((comp) => {
      observer.observe(comp);
    });
    return () => observer.disconnect();
  }, []);
  return (
    <>
      <Loading />
      <Toggle >
        <Navbar id={id} />
        <div className="w-full" ref={compsRef}>
          <HeroPage />
          <AboutPage />
          <ExperiencePage />
          <SkillPage />
          <ProjectsPage />
          <ReviewsPage />
          <ContactPage />
        </div>
      </Toggle >

    </>
  );
}
