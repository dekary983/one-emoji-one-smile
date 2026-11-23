import { mkdir, writeFile } from 'node:fs/promises';
import { join } from 'node:path';

const EMOJI = '🫶';
const ENTRY_FILE = 'entry.txt';
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

await mkdir(outputDir, { recursive: true });
await writeFile(join(outputDir, ENTRY_FILE), EMOJI, 'utf8');
