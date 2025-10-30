"use client";

import Section from "./Section";

type Item = {
  role: string;
  company?: string;
  date: string;
  bullets: string[];
};

const ITEMS: Item[] = [
  {
    role: "Full‑Stack Developer",
    company: "Freelance",
    date: "2023 — Present",
    bullets: [
      "Built responsive web apps with Next.js and Node.js",
      "Implemented reusable UI systems and component libraries",
      "Collaborated with designers and stakeholders",
    ],
  },
  {
    role: "Frontend Intern",
    company: "Tech Co.",
    date: "2022 — 2023",
    bullets: [
      "Developed UI features and fixed bugs",
      "Improved performance and accessibility",
    ],
  },
];

export default function Experience() {
  return (
    <Section id="Experience" title="Experience">
      <div className="relative pl-6">
        <div className="absolute left-2 top-0 bottom-0 w-px bg-white/15" />
        <div className="space-y-8">
          {ITEMS.map((it, idx) => (
            <div key={idx} className="relative">
              <div className="absolute -left-[7px] top-1 h-3 w-3 rounded-full bg-blue-500 ring-2 ring-blue-500/30" />
              <div className="bg-white/5 rounded-xl p-5 ring-1 ring-white/10">
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <h3 className="text-white font-semibold">{it.role}</h3>
                  {it.company ? (
                    <span className="text-white/60">{it.company}</span>
                  ) : null}
                  <span className="ml-auto text-white/60 text-sm">{it.date}</span>
                </div>
                <ul className="mt-3 space-y-2 list-disc list-inside text-white/85 text-sm">
                  {it.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
