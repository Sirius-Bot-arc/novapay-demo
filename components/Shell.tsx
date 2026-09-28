import Link from "next/link";
import Flower from "./Flower";
const links = [["Home", "/"], ["About", "/about"], ["Security", "/security"], ["Contact", "/contact"]];
export function Nav() {
  return (
    <header className="relative z-10 mx-auto flex max-w-6xl items-center justify-between px-5 py-5">
      <Link href="/" className="flex items-center gap-2 font-semibold"><Flower size={30} />NovaPay</Link>
      <nav className="flex items-center gap-4 text-sm text-lilac sm:gap-7">
        {links.map(([t, h]) => <Link key={h} href={h} className="hover:text-white">{t}</Link>)}
        <Link href="/login" className="btn btn-ghost !px-4 !py-2">Log in</Link>
      </nav>
    </header>
  );
}
export function Footer() {
  return (
    <footer className="relative z-10 mx-auto mt-24 max-w-6xl border-t border-white/10 px-5 py-8 text-sm text-lilac/70">
      <p>© 2026 NovaPay Technologies. Fictional company created as a demo target.</p>
      <p className="mt-1">Built with Next.js, React and Tailwind CSS. Hosted on Node.js.</p>
    </footer>
  );
}
export function Page({ title, lead, children }: { title: string; lead: string; children?: React.ReactNode }) {
  return (
    <main className="relative z-10 mx-auto max-w-6xl px-5 pt-14">
      <h1 className="display rise text-4xl sm:text-6xl">{title}</h1>
      <p className="rise mt-4 max-w-xl text-lg text-lilac" style={{ animationDelay: ".1s" }}>{lead}</p>
      <div className="rise mt-10" style={{ animationDelay: ".2s" }}>{children}</div>
    </main>
  );
}
