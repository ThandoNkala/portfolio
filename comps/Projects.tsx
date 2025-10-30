"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import Section from "./Section";

type Project = {
  id: string;
  title: string;
  description: string;
  image: string;
  tech: string[];
  tags: string[];
  demo?: string;
  github?: string;
};

const ALL_PROJECTS: Project[] = [
  {
    id: "p1",
    title: "Portfolio Website",
    description: "Personal portfolio built with Next.js and Tailwind CSS.",
    image: "/project-1.jpg",
    tech: ["Next.js", "Tailwind", "TypeScript"],
    tags: ["web", "frontend"],
    demo: "#",
    github: "#",
  },
  {
    id: "p2",
    title: "E‑commerce API",
    description: "RESTful API for products, orders, and payments.",
    image: "",
    tech: ["Node.js", "Express", "MongoDB"],
    tags: ["backend", "api"],
    demo: "#",
    github: "#",
  },
  {
    id: "p3",
    title: "School Website",
    description: "A responsive website for a local school.",
    image: "",
    tech: ["React", "Tailwind", "Chart.js"],
    tags: ["frontend", "ui"],
    demo: "#",
    github: "#",
  },
];

const TAGS = ["all", "frontend", "backend", "web", "api", "ui"];

export default function Projects() {
  const [active, setActive] = useState<string>("all");
  const filtered = useMemo(() => {
    if (active === "all") return ALL_PROJECTS;
    return ALL_PROJECTS.filter((p) => p.tags.includes(active));
  }, [active]);

  return (
    <Section id="Projects" title="Projects">
      <div className="flex flex-wrap gap-2 sm:gap-3 mb-6">
        {TAGS.map((t) => (
          <button
            key={t}
            onClick={() => setActive(t)}
            className={[
              "px-3 py-1.5 rounded-full text-sm transition-colors",
              active === t ? "bg-blue-500 text-white" : "bg-white/10 text-white hover:bg-white/20",
            ].join(" ")}
          >
            {t}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
        {filtered.map((p) => (
          <article key={p.id} className="group bg-white/5 rounded-2xl overflow-hidden ring-1 ring-white/10 hover:ring-white/20 transition-all">
            <div className="relative aspect-[16/9]">
              <Image src={p.image} alt={p.title} fill className="object-cover" />
            </div>
            <div className="p-5">
              <h3 className="text-white text-lg font-semibold">{p.title}</h3>
              <p className="mt-2 text-white/80 text-sm leading-relaxed">{p.description}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span key={t} className="px-2 py-1 rounded-md bg-blue-500/15 text-blue-300 text-xs">
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-4 flex gap-3">
                {p.demo ? (
                  <a href={p.demo} className="px-4 py-2 rounded-md bg-blue-500 text-white text-sm hover:bg-blue-600 transition-colors">
                    Live Demo
                  </a>
                ) : null}
                {p.github ? (
                  <a href={p.github} className="px-4 py-2 rounded-md border border-white/20 text-white text-sm hover:bg-white/10 transition-colors">
                    GitHub
                  </a>
                ) : null}
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
