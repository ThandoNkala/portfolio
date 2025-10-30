"use client";

import { useState } from "react";
import Section from "./Section";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const mailto = `mailto:nkalathando01@gmail.com?subject=Portfolio%20Contact%20from%20${encodeURIComponent(
      form.name || ""
    )}&body=${encodeURIComponent(form.message + "\n\nFrom: " + form.email)}`;
    window.location.href = mailto;
  }

  return (
    <Section id="Contact" title="Contact">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <form onSubmit={onSubmit} className="space-y-4">
          <div>
            <label className="block text-sm text-white/70">Name</label>
            <input
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="mt-1 w-full rounded-md bg-white/10 text-white placeholder-white/40 border border-white/15 px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your name"
              required
            />
          </div>
          <div>
            <label className="block text-sm text-white/70">Email</label>
            <input
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="mt-1 w-full rounded-md bg-white/10 text-white placeholder-white/40 border border-white/15 px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="you@example.com"
              required
            />
          </div>
          <div>
            <label className="block text-sm text-white/70">Message</label>
            <textarea
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              rows={5}
              className="mt-1 w-full rounded-md bg-white/10 text-white placeholder-white/40 border border-white/15 px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="How can I help?"
              required
            />
          </div>
          <button type="submit" className="px-5 py-2.5 rounded-md bg-blue-500 text-white hover:bg-blue-600 transition-colors">
            Send Message
          </button>
        </form>

        <div className="text-white/90">
          <p className="leading-relaxed">
            I'm open to freelance work, internships, and full‑time opportunities. Feel free to reach out on any of my socials below as well.
          </p>
          <div className="mt-6 flex gap-4">
            <a aria-label="GitHub" href="#" className="p-2 rounded-md bg-white/10 hover:bg-white/20 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6 text-white"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.486 2 12.021c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.01-1.022-.014-1.854-2.782.607-3.369-1.193-3.369-1.193-.455-1.158-1.11-1.467-1.11-1.467-.908-.62.069-.607.069-.607 1.004.071 1.532 1.033 1.532 1.033.892 1.541 2.341 1.096 2.91.839.091-.648.35-1.096.636-1.349-2.22-.254-4.555-1.114-4.555-4.956 0-1.094.39-1.988 1.03-2.689-.104-.253-.447-1.272.098-2.65 0 0 .84-.27 2.75 1.027A9.564 9.564 0 0 1 12 6.84c.85.004 1.705.115 2.504.337 1.909-1.297 2.748-1.027 2.748-1.027.546 1.378.203 2.397.1 2.65.64.701 1.028 1.595 1.028 2.69 0 3.852-2.338 4.699-4.565 4.95.36.31.682.922.682 1.858 0 1.34-.012 2.42-.012 2.75 0 .268.18.58.688.481A9.996 9.996 0 0 0 22 12.021C22 6.486 17.523 2 12 2Z" clipRule="evenodd"/></svg>
            </a>
            <a aria-label="LinkedIn" href="#" className="p-2 rounded-md bg-white/10 hover:bg-white/20 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6 text-white"><path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V24h-4V8zm7.5 0h3.8v2.2h.1c.5-1 1.9-2.2 3.9-2.2 4.2 0 5 2.8 5 6.5V24h-4v-6.7c0-1.6 0-3.6-2.2-3.6s-2.5 1.7-2.5 3.5V24h-4V8z"/></svg>
            </a>
            <a aria-label="X" href="#" className="p-2 rounded-md bg-white/10 hover:bg-white/20 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6 text-white"><path d="M13.545 10.697 20.97 3h-1.767l-6.45 6.864L7.108 3H1l7.808 11.137L1 21h1.767l6.7-7.121L16.892 21H23l-9.455-10.303Zm-2.371 2.518-.776-1.107-6.177-8.82h2.66l4.987 7.117.776 1.107 6.47 9.233h-2.66l-5.28-7.53Z"/></svg>
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}
