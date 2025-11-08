"use client";

import Image from "next/image";
import Section from "./Section";

export default function About() {
  const skills: { name: string; level: number }[] = [
    { name: "JavaScript/TypeScript", level: 89 },
    { name: "React / Next.js", level: 88 },
    { name: "Node.js / APIs", level: 80 },
    { name: "Tailwind CSS", level: 85 },

  ];

  return (
    <Section id="About" title="About Me">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-10 md:gap-14 items-start">
        <div className="md:col-span-2">
          <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-84 md:h-114 rounded-2xl overflow-hidden ring-2 ring-blue-500/40">
            <Image
              src="/me.png"
              alt="Profile"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
        <div className="md:col-span-3 text-white/90 space-y-8">
          <div>
            <h3 className="text-white font-semibold text-lg mb-3">About Me</h3>
            <p className="text-base sm:text-lg leading-relaxed">
              I’m Thando Nkala, a dedicated Software developer focused on building clean, responsive web experiences. I bring solid foundations in HTML, CSS, SCSS and JavaScript, and I’m constantly learning new tools and frameworks to push my craft further.
            </p>
            <p className="text-base sm:text-lg leading-relaxed mt-3">
              On my GitHub I’ve built a variety of small-to-medium web projects (for example a timer-demo and stylish portfolio template) that help me sharpen my UI design, layout and styling skills. 
              <a href="https://github.com/ThandoNkala" className="text-blue-400 hover:underline">(GitHub)</a>
            </p>
            <p className="text-base sm:text-lg leading-relaxed mt-3">
              I’m passionate about turning design ideas into live, accessible apps that people enjoy using. I’m also committed to writing maintainable, well-structured code and refining UX & performance wherever I can.
            </p>
          </div>
          <div className="mt-8" id="Skills">
            <h3 className="text-white font-semibold text-lg mb-4">Skills</h3>
            <div className="space-y-4">
              {skills.map((s) => (
                <div key={s.name}>
                  <div className="flex items-center justify-between text-sm text-white/80">
                    <span>{s.name}</span>
                    <span>{s.level}%</span>
                  </div>
                  <div className="mt-2 h-2 rounded-full bg-white/10 overflow-hidden">
                    <div
                      className="h-full bg-blue-500 transition-all duration-700"
                      style={{ width: `${s.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-white font-semibold text-lg mb-3">Skills & Technologies</h3>
            <ul className="list-disc list-inside space-y-1 text-white/90">
              <li>HTML5, CSS3, SCSS — for building and styling strong layouts and components</li>
              <li>JavaScript fundamentals & DOM manipulation</li>
              <li>Responsive design & mobile-first layouts</li>
              <li>Git/GitHub — version control and open source contribution</li>
              <li>UI/UX mindset — creating visually-pleasing, easy-to-use interfaces</li>
              <li>(Bonus) Exploring deployment, hosting and optimization via platforms like Vercel</li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-lg mb-3">Projects & Experience</h3>
            <ul className="list-disc list-inside space-y-1 text-white/90">
              <li>Built a calculator web app using HTML to sharpen logic + UI structure. <a href="https://thandonkala.github.io/Calculator/" className="text-blue-400 hover:underline">(link)</a></li>
              <li>Designed a coffee website project (using SCSS) to practice styling and layout finesse. <a href="https://thandonkala.github.io/Coffee-Website/" className="text-blue-400 hover:underline">(link)</a></li>
              <li>Designed a Jmaeson demo website project <a href="https://thandonkala.github.io/Jameson-demo/" className="text-blue-400 hover:underline">(link)</a></li>
              <li>Hosted projects and experiments on Vercel under the account “thando-nkalas-projects” — showing comfort with modern deployment workflows.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-lg mb-3">My Goals</h3>
            <ul className="list-disc list-inside space-y-1 text-white/90">
              <li>Work on real-world applications that impact users</li>
              <li>Expand into frameworks (e.g., React, Next.js) and modern toolchains</li>
              <li>Collaborate with designers and developers to build polished, production-ready products</li>
              <li>Keep refining my craft so my portfolio not only showcases what I can do, but who I am as a developer</li>
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}
