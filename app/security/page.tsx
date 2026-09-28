import { Page } from "@/components/Shell";
export const metadata = { title: "Security | NovaPay Technologies" };
const items = [
  ["Encryption", "Data is encrypted in transit and at rest."],
  ["Access control", "Role-based permissions and audit trails for every action."],
  ["Monitoring", "Continuous anomaly detection on payment activity."],
  ["Responsible disclosure", "Report issues to security@novapay.example. See /.well-known/security.txt."],
];
export default function Security() {
  return (
    <Page title="Security is part of the product." lead="How NovaPay protects money, data and the people who depend on both.">
      <div className="grid gap-5 sm:grid-cols-2">
        {items.map(([t, d]) => <div key={t} className="glass card p-6"><h3 className="display text-2xl">{t}</h3><p className="mt-2 text-lilac">{d}</p></div>)}
      </div>
      <p className="mt-8 text-sm text-lilac/70">Platform: Next.js 14, React 18, Node.js, Tailwind CSS.</p>
    </Page>
  );
}
