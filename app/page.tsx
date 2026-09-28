import Link from "next/link";
import Flower from "@/components/Flower";
const features = [
  ["Instant settlement", "Move money between accounts in seconds, around the clock."],
  ["Fraud-aware routing", "Every payment is scored before it leaves your account."],
  ["Clear reporting", "One ledger that finance and compliance teams both understand."],
];
export default function Home() {
  return (
    <main className="relative z-10 mx-auto max-w-6xl px-5">
      <section className="relative grid items-center gap-10 pt-16 md:grid-cols-[1.2fr_1fr]">
        <div>
          <h1 className="display rise text-5xl leading-tight sm:text-7xl">Building safer ways to move money.</h1>
          <p className="rise mt-6 max-w-lg text-lg text-lilac" style={{ animationDelay: ".12s" }}>
            NovaPay gives growing businesses fast, transparent payments with security built into every transfer.
          </p>
          <div className="rise mt-8 flex gap-4" style={{ animationDelay: ".24s" }}>
            <Link href="/contact" className="btn">Talk to sales</Link>
            <Link href="/security" className="btn btn-ghost">How we protect you</Link>
          </div>
        </div>
        <div className="relative mx-auto h-72 w-72 sm:h-96 sm:w-96">
          <div className="absolute inset-0 rounded-full bg-iris/25 blur-3xl" />
          <Flower size={300} className="drift absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
          <Flower size={70} className="drift absolute right-0 top-4 opacity-70" />
          <Flower size={46} className="drift absolute bottom-6 left-2 opacity-60" />
        </div>
      </section>
      <section className="mt-24 grid gap-5 md:grid-cols-3">
        {features.map(([t, d]) => (
          <div key={t} className="glass card p-6">
            <h3 className="display text-2xl">{t}</h3>
            <p className="mt-2 text-lilac/90">{d}</p>
          </div>
        ))}
      </section>
      <p className="mt-10 text-sm text-lilac/70">Public status: <a className="underline" href="/health">/health</a> · <a className="underline" href="/api/demo">/api/demo</a></p>
    </main>
  );
}
