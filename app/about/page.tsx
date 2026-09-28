import { Page } from "@/components/Shell";
export const metadata = { title: "About | NovaPay Technologies" };
export default function About() {
  return (
    <Page title="A small team with a long view." lead="NovaPay was founded to make business payments fast without making them fragile.">
      <div className="grid gap-5 md:grid-cols-3">
        {[["2021", "Founded by three engineers who had all fixed a payment outage at 3 a.m."],
          ["120+", "Businesses moving money through NovaPay across two regions."],
          ["24/7", "Support and monitoring staffed by people, not just dashboards."]].map(([a, b]) => (
          <div key={a} className="glass card p-6"><div className="display text-4xl text-petal">{a}</div><p className="mt-2 text-lilac">{b}</p></div>
        ))}
      </div>
    </Page>
  );
}
