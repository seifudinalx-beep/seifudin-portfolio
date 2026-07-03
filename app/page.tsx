import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="flex min-h-screen flex-col items-center justify-center px-6 pt-24 text-center">
        <p className="mb-4 text-lg text-cyan-400">
          Hello, I'm
        </p>

        <h1 className="text-6xl font-bold">
          Seifudin
        </h1>

        <h2 className="mt-4 text-2xl text-slate-300">
          Software Developer | Virtual Assistant | Customer Support
        </h2>

        <p className="mt-6 max-w-2xl text-slate-400">
          I build modern web applications and help businesses deliver
          exceptional customer experiences through technology,
          communication, and problem-solving.
        </p>

        <div className="mt-10 flex gap-4">
          <button className="rounded-lg bg-cyan-500 px-6 py-3 font-semibold text-black hover:bg-cyan-400">
            View Projects
          </button>

          <button className="rounded-lg border border-white px-6 py-3 hover:bg-white hover:text-black">
            Contact Me
          </button>
        </div>
      </section>

      {/* About */}
      <section
        id="about"
        className="min-h-screen bg-slate-900 flex items-center justify-center px-6"
      >
        <div className="max-w-4xl">
          <h2 className="mb-8 text-center text-4xl font-bold text-cyan-400">
            About Me
          </h2>

          <p className="text-center text-lg leading-8 text-slate-300">
            I'm Seifudin, a passionate Software Developer and Virtual Assistant
            dedicated to building modern web applications and helping businesses
            solve problems through technology. I enjoy learning new skills,
            creating beautiful websites, and providing excellent customer
            support.
          </p>
        </div>
      </section>

      {/* Skills */}
      <section
        id="skills"
        className="min-h-screen bg-slate-950 flex flex-col justify-center px-6"
      >
        <h2 className="mb-10 text-center text-4xl font-bold text-cyan-400">
          Skills
        </h2>

        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-6 md:grid-cols-3">
          <div className="rounded-xl bg-slate-800 p-6 text-center">HTML</div>
          <div className="rounded-xl bg-slate-800 p-6 text-center">CSS</div>
          <div className="rounded-xl bg-slate-800 p-6 text-center">JavaScript</div>
          <div className="rounded-xl bg-slate-800 p-6 text-center">TypeScript</div>
          <div className="rounded-xl bg-slate-800 p-6 text-center">React</div>
          <div className="rounded-xl bg-slate-800 p-6 text-center">Next.js</div>
          <div className="rounded-xl bg-slate-800 p-6 text-center">Tailwind CSS</div>
          <div className="rounded-xl bg-slate-800 p-6 text-center">Git & GitHub</div>
          <div className="rounded-xl bg-slate-800 p-6 text-center">Customer Support</div>
        </div>
      </section>

      {/* Projects */}
      <section
        id="projects"
        className="min-h-screen bg-slate-900 flex flex-col justify-center px-6"
      >
        <h2 className="mb-10 text-center text-4xl font-bold text-cyan-400">
          Projects
        </h2>

        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2">
          <div className="rounded-xl bg-slate-800 p-6">
            <h3 className="mb-3 text-2xl font-bold">
              Personal Portfolio
            </h3>
            <p className="text-slate-300">
              A responsive portfolio built with Next.js and Tailwind CSS to
              showcase my skills and projects.
            </p>
          </div>

          <div className="rounded-xl bg-slate-800 p-6">
            <h3 className="mb-3 text-2xl font-bold">
              Customer Support Projects
            </h3>
            <p className="text-slate-300">
              Experience providing customer support, communication, and virtual
              assistance for businesses.
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="min-h-screen bg-slate-950 flex flex-col items-center justify-center px-6"
      >
        <h2 className="mb-8 text-4xl font-bold text-cyan-400">
          Contact Me
        </h2>

        <p className="mb-6 text-lg text-slate-300">
          Let's work together!
        </p>

        <a
          href="mailto:youremail@example.com"
          className="rounded-lg bg-cyan-500 px-8 py-4 font-bold text-black hover:bg-cyan-400"
        >
          Send Email
        </a>
      </section>
    </main>
  );
}