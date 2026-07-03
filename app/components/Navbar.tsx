export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-slate-900 text-white shadow-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <h1 className="text-xl font-bold text-cyan-400">
          Seifudin
        </h1>

        <ul className="flex gap-6">
          <li className="cursor-pointer hover:text-cyan-400">Home</li>
          <li className="cursor-pointer hover:text-cyan-400">About</li>
          <li className="cursor-pointer hover:text-cyan-400">Projects</li>
          <li className="cursor-pointer hover:text-cyan-400">Contact</li>
        </ul>
      </div>
    </nav>
  );
}