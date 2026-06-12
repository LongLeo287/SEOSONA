import { spawnSync } from "node:child_process";
import { existsSync } from "node:fs";
import { homedir } from "node:os";
import { join } from "node:path";

const connector = join(homedir(), ".seosona", "1_CORE", "scripts", "project_connector.js");

if (!existsSync(connector)) {
  console.error("SEOSONA project connector not found. Run `seosona setup` first.");
  process.exit(1);
}

const args = process.argv.slice(2);
const result = spawnSync(process.execPath, [connector, ...args, process.cwd()], {
  stdio: "inherit",
});

process.exit(result.status ?? 1);
