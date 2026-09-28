"use client";
import { useState } from "react";
export default function DemoForm({ fields, cta, done }: { fields: [string, string, string][]; cta: string; done: string }) {
  const [sent, setSent] = useState(false);
  return (
    <div className="glass max-w-md p-6">
      <div className="space-y-4">
        {fields.map(([label, type, name]) => (
          <label key={name} className="block text-sm text-lilac">{label}
            <input className="field mt-1" type={type} name={name} autoComplete="off" />
          </label>
        ))}
        <button className="btn w-full" onClick={() => setSent(true)}>{cta}</button>
        {sent && <p role="status" className="text-sm text-petal">{done}</p>}
      </div>
    </div>
  );
}
