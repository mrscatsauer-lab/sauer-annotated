// Builds the share-preview image (1200x630) shown when a link is shared on
// Facebook, iMessage, Slack, etc. Rendered at build time with satori -> sharp.
import fs from 'node:fs';
import path from 'node:path';
import satori from 'satori';
import sharp from 'sharp';

const root = process.cwd();
const font = (p: string) => fs.readFileSync(path.join(root, 'node_modules', p));

let cache: { fonts: any[]; crow: string } | undefined;
async function assets() {
  if (cache) return cache;
  const crowPng = await sharp(path.join(root, 'src/assets/crow-logo.webp')).resize(240).png().toBuffer();
  cache = {
    fonts: [
      { name: 'Fraunces', data: font('@fontsource/fraunces/files/fraunces-latin-600-normal.woff'), weight: 600, style: 'normal' },
      { name: 'Fraunces', data: font('@fontsource/fraunces/files/fraunces-latin-400-italic.woff'), weight: 400, style: 'italic' },
      { name: 'Caveat', data: font('@fontsource/caveat/files/caveat-latin-600-normal.woff'), weight: 600, style: 'normal' },
    ],
    crow: `data:image/png;base64,${crowPng.toString('base64')}`,
  };
  return cache;
}

const h = (type: string, style: Record<string, any>, children?: any) => ({ type, props: { style, children } });

export async function renderOg({ title, eyebrow, note }: { title: string; eyebrow?: string; note?: string }) {
  const { fonts, crow } = await assets();
  const maroon = '#500000';
  const ink = '#2a2320';
  const size = title.length > 70 ? 54 : title.length > 42 ? 64 : 76;

  const tree = h(
    'div',
    { width: '100%', height: '100%', display: 'flex', background: '#f8f3ea', padding: 28 },
    h(
      'div',
      {
        flex: 1,
        display: 'flex',
        border: `4px solid ${maroon}`,
        padding: 8,
      },
      h(
        'div',
        {
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          border: `1.5px solid ${maroon}`,
          padding: '40px 56px',
          background: '#fffcf6',
        },
        [
          h('div', { display: 'flex', alignItems: 'center' }, [
            { type: 'img', props: { src: crow, width: 96, height: 96, style: { marginRight: 18 } } },
            h('div', { fontFamily: 'Fraunces', fontWeight: 600, fontSize: 40, color: ink }, 'Catherine,'),
            h('div', { fontFamily: 'Caveat', fontWeight: 600, fontSize: 52, color: maroon, marginLeft: 12, marginTop: -6 }, 'annotated'),
          ]),
          h('div', { display: 'flex', flexDirection: 'column' }, [
            eyebrow
              ? h('div', { fontFamily: 'Fraunces', fontWeight: 600, fontSize: 24, color: maroon, letterSpacing: 4, textTransform: 'uppercase', marginBottom: 14 }, eyebrow)
              : null,
            h('div', { fontFamily: 'Fraunces', fontWeight: 600, fontSize: size, lineHeight: 1.08, color: ink, letterSpacing: -1 }, title),
          ].filter(Boolean)),
          h('div', { display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }, [
            h('div', { fontFamily: 'Caveat', fontWeight: 600, fontSize: 34, color: maroon }, note ?? 'margin notes on books, writing, and everything else'),
            h('div', { fontFamily: 'Fraunces', fontStyle: 'italic', fontWeight: 400, fontSize: 24, color: '#5d524b' }, 'catherineannotated.com'),
          ]),
        ],
      ),
    ),
  );

  const svg = await satori(tree as any, { width: 1200, height: 630, fonts });
  return sharp(Buffer.from(svg)).png({ compressionLevel: 9 }).toBuffer();
}
