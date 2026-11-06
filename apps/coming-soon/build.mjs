import { cp, copyFile, mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

const source = new URL('./', import.meta.url);
const output = new URL('./dist/', source);
const copy = JSON.parse(await readFile(new URL('locales/pt-BR.json', source), 'utf8'));
const template = await readFile(new URL('index.html', source), 'utf8');
const escapes = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' };
const html = template.replace(/\{\{(\w+)\}\}/g, (_, key) => {
  if (typeof copy[key] !== 'string') {
    throw new Error(`Missing translation: ${key}`);
  }
  return copy[key].replace(/[&<>"']/g, (character) => escapes[character]);
});

await rm(output, { recursive: true, force: true });
await mkdir(output, { recursive: true });
await writeFile(new URL('index.html', output), html);
await copyFile(new URL('styles.css', source), new URL('styles.css', output));
await copyFile(
  new URL('../web/src/design-system/tokens/tokens.css', source),
  new URL('tokens.css', output),
);
await cp(new URL('assets/', source), new URL('assets/', output), { recursive: true });
await copyFile(new URL('robots.txt', source), new URL('robots.txt', output));
console.log(`Coming-soon page built at ${fileURLToPath(output)}`);
