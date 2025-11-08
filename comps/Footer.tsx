export default function Footer() {
    return(
        <footer className="border border-blue-500 border-l-0 border-r-0 text-white py-10">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h1 className="mt-2 text-3xl sm:text-4xl font-bold">Get In <span className="text-blue-500">Touch</span></h1>
              <p className="mt-3 text-base sm:text-xl leading-relaxed">
                Have a project in mind or just want to chat? I'd love to hear from you.
                Let's create <span className="whitespace-nowrap">something amazing</span> together!
              </p>
            </div>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h2 className="text-lg sm:text-xl font-bold">Contact</h2>
                <p className="text-gray-400"><a href="mailto:nkalathando01@gmail.com">nkalathando01@gmail.com</a></p>
                <p className="text-gray-400 mt-2">+263 784366265</p>
              </div>
              <nav className="">
                <h2 className="text-lg sm:text-xl font-bold">Quick Links</h2>
                <ul className="mt-2 space-y-2 text-white/85">
                  <li><a className="hover:underline" href="#Home">Home</a></li>
                  <li><a className="hover:underline" href="#About">About</a></li>
                  <li><a className="hover:underline" href="#Projects">Projects</a></li>
                  <li><a className="hover:underline" href="#Experience">Experience</a></li>
                  <li><a className="hover:underline" href="#Contact">Contact</a></li>
                </ul>
              </nav>
              <div>
                <h2 className="text-lg sm:text-xl font-bold">Follow</h2>
                <div className="mt-6 flex gap-4">
            <a
              aria-label="GitHub"
              href="https://github.com/ThandoNkala"
              className="p-2 rounded-md bg-white/10 hover:bg-white/20 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-6 w-6 text-white"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.486 2 12.021c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.01-1.022-.014-1.854-2.782.607-3.369-1.193-3.369-1.193-.455-1.158-1.11-1.467-1.11-1.467-.908-.62.069-.607.069-.607 1.004.071 1.532 1.033 1.532 1.033.892 1.541 2.341 1.096 2.91.839.091-.648.35-1.096.636-1.349-2.22-.254-4.555-1.114-4.555-4.956 0-1.094.39-1.988 1.03-2.689-.104-.253-.447-1.272.098-2.65 0 0 .84-.27 2.75 1.027A9.564 9.564 0 0 1 12 6.84c.85.004 1.705.115 2.504.337 1.909-1.297 2.748-1.027 2.748-1.027.546 1.378.203 2.397.1 2.65.64.701 1.028 1.595 1.028 2.69 0 3.852-2.338 4.699-4.565 4.95.36.31.682.922.682 1.858 0 1.34-.012 2.42-.012 2.75 0 .268.18.58.688.481A9.996 9.996 0 0 0 22 12.021C22 6.486 17.523 2 12 2Z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <a
              aria-label="LinkedIn"
              href="https://www.linkedin.com/in/thando-nkala-6baa08239/"
              className="p-2 rounded-md bg-white/10 hover:bg-white/20 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-6 w-6 text-white"
              >
                <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V24h-4V8zm7.5 0h3.8v2.2h.1c.5-1 1.9-2.2 3.9-2.2 4.2 0 5 2.8 5 6.5V24h-4v-6.7c0-1.6 0-3.6-2.2-3.6s-2.5 1.7-2.5 3.5V24h-4V8z" />
              </svg>
            </a>
            <a
              aria-label="WhatsApp"
              href="https://wa.me/+263784366265"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-md bg-white/10 hover:bg-white/20 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                fill="currentColor"
                className="h-6 w-6 text-white"
              >
                <path d="M380.9 97.1C339-12.3 210.4-31.6 123.5 36.4 59.6 86.5 33.8 168.1 57.9 242.1L24.1 387.4l148.7-39.1c70.2 37.8 157.8 25.3 213.2-34.6 64.6-68.5 64.6-176.3-5.1-216.6zM223.9 338.3c-31.2 0-61.6-8.2-88.3-23.7l-6.3-3.8-88.1 23.1 23.6-86-4-6.6C40.8 203.8 48 146.7 87.8 110.1c66.3-59.4 172.2-41.4 217.5 35.6 47.3 80.5 2.4 192.6-81.4 192.6zm98.6-106.2c-5.3-2.7-31.3-15.5-36.2-17.3-4.9-1.8-8.4-2.7-12 2.7s-13.8 17.3-16.9 20.8c-3.1 3.6-6.2 4.1-11.5 1.4-5.3-2.7-22.5-8.3-42.8-26.6-15.8-14.1-26.4-31.4-29.5-36.7-3.1-5.3-.3-8.2 2.3-10.8 2.4-2.4 5.3-6.2 7.9-9.3 2.7-3.1 3.6-5.3 5.4-8.9 1.8-3.6.9-6.7-.5-9.3-1.4-2.7-12-28.9-16.4-39.7-4.3-10.3-8.7-8.9-12-9.1-3.1-.2-6.7-.2-10.3-.2s-9.3 1.3-14.1 6.7c-4.9 5.3-18.4 18-18.4 43.9s18.8 50.9 21.4 54.5c2.7 3.6 36.9 56.4 89.3 79.1 12.5 5.4 22.3 8.6 29.9 11 12.6 4 24 3.4 33.1 2.1 10.1-1.5 31.3-12.8 35.7-25.2 4.4-12.5 4.4-23.2 3.1-25.2-1.3-1.8-4.9-3.1-10.2-5.8z" />
              </svg>
            </a>
          </div>
              </div>
            </div>

            <div className="mt-10 border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center gap-3 justify-between text-white/70 text-sm">
              <p>© {new Date().getFullYear()} Thando Nkala. All rights reserved.</p>
              <div className="flex gap-4">
                <a href="#Privacy" className="hover:underline">Privacy</a>
                <a href="#Imprint" className="hover:underline">Imprint</a>
              </div>
            </div>
          </div>
        </footer>
    );
}
