import { mkdir, writeFile } from 'node:fs/promises';

const EMOJI = '🫶';
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

await mkdir(outputDir, { recursive: true });
await writeFile(`${outputDir}/entry.txt`, EMOJI, 'utf8');
