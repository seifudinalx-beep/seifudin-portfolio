export default function Footer() {
  return (
    <footer className="py-8 border-t border-slate-800 text-center text-gray-400">
      <p>
        © {new Date().getFullYear()} Seifudin Isaack.
        Built with Next.js, TypeScript and Tailwind CSS.
      </p>
    </footer>
  );
}