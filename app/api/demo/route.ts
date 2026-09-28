export const dynamic = "force-dynamic";
export function GET() {
  return Response.json({
    company: "NovaPay Technologies",
    fictional: true,
    version: "2.4.1",
    stack: { framework: "Next.js", runtime: "Node.js" },
    regions: ["orbit-east", "orbit-west"],
    uptime: "99.98%",
  });
}
