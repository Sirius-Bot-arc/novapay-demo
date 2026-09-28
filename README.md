# NovaPay Technologies: Safe Demo Target for RiskOpt

NovaPay is a **fictional fintech** and an **authorized demonstration target** for RiskOpt (passive assessment). It contains **no exploitable vulnerabilities**: no injection, XSS, auth bypass, credentials or malware. The login and contact forms are visual only and send nothing.

## Install and run
```bash
npm install
npm run dev            # http://localhost:4000
PORT=5000 npm run dev  # custom port (Windows PowerShell: $env:PORT=5000; npm run dev)
npm run build && npm start
```

## Deploy to Vercel
1. Push this folder to GitHub. 2. In Vercel: New Project, import the repo, keep defaults (Next.js). 3. Deploy and give RiskOpt the resulting `https://...vercel.app` URL. No env vars, database or keys needed.

## Intentional, safe indicators
| Indicator | Where | Why it is safe |
|---|---|---|
| No Content-Security-Policy | all responses | Absence only; nothing is injectable |
| No Permissions-Policy | all responses | Absence only |
| No X-Content-Type-Options | all responses | Site serves no user content |
| Weak `Referrer-Policy: unsafe-url` | `next.config.mjs` | Site has no sensitive URLs |
| No HSTS | all responses | Local HTTP has none. **Vercel may add HSTS on its own domain**, so this finding may not appear when deployed there |
| Cookie `np_demo_theme=cosmic-dark` without Secure/HttpOnly/SameSite | `middleware.ts` | Holds a theme label only: no session, token or credential |
| `X-Powered-By: Next.js`, `X-NovaPay-Stack` | headers | Technology disclosure only |
| Stack named in footer, Security page, `generator` meta | HTML | Public info |
| `/robots.txt`, `/.well-known/security.txt` | `public/` | Normal public files (fictional contacts, `.example` domain) |
| `/api/demo`, `/health` | route handlers | Static fictional JSON |

## Expected RiskOpt findings
Missing Content-Security-Policy; Missing HSTS (local); Missing X-Content-Type-Options; Missing Permissions-Policy; Weak Referrer-Policy; Technology disclosure (headers, page, JSON); Cookie missing Secure/HttpOnly/SameSite; security.txt present (positive); robots.txt with normal paths; public demo API reachable.

Update the `Sitemap` and `Policy` URLs in `public/robots.txt` and `security.txt` to your deployed domain if you like.
