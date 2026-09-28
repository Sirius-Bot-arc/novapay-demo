import { spawn } from "node:child_process";
import { createRequire } from "node:module";
const require = createRequire(import.meta.url);
const port = process.env.PORT || "4000";
const next = require.resolve("next/dist/bin/next");
spawn(process.execPath, [next, process.argv[2], "-p", port], { stdio: "inherit" })
  .on("exit", (c) => process.exit(c ?? 0));
