"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  id?: string;
  className?: string;
  children: React.ReactNode;
  title?: string;
};

export default function Section({ id, className, children, title }: Props) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setVisible(true);
        });
      },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section id={id} ref={ref} className={["container mx-auto px-4 md:px-6 py-12 md:py-20", className].filter(Boolean).join(" ")}>
      <div className={["transition-all duration-700", visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"].join(" ") }>
        {title ? (
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6 md:mb-10">
            {title}
          </h2>
        ) : null}
        {children}
      </div>
    </section>
  );
}
