import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar />

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
          I build modern web applications and help businesses deliver exceptional
          customer experiences through technology, communication, and problem-solving.
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

      <section
        id="about"
        className="mx-auto max-w-5xl px-6 py-20"
      >
        <h2 className="mb-8 text-center text-4xl font-bold text-cyan-400">
          About Me
        </h2>

        <p className="text-center text-lg leading-8 text-slate-300">
          I'm Seifudin, a passionate Software Developer and Virtual Assistant
          dedicated to building modern web applications and helping businesses
          solve problems through technology. I enjoy learning new skills,
          creating beautiful websites, and providing excellent customer support.
        </p>
      </section>
    </main>
  );
}