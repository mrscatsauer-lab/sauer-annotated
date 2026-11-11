import type { APIRoute } from 'astro';
import { getPosts } from '../../utils';
import { SHELVES, SERIES } from '../../consts';
import { renderOg } from '../../lib/og';

export async function getStaticPaths() {
  const posts = await getPosts();
  const postPaths = posts.map((post) => {
    const shelf = SHELVES[post.data.shelf as keyof typeof SHELVES]?.label;
    const series = post.data.series ? SERIES[post.data.series as keyof typeof SERIES]?.label : undefined;
    return {
      params: { slug: `posts/${post.id}` },
      props: { title: post.data.title, eyebrow: series ?? shelf },
    };
  });
  return [
    ...postPaths,
    { params: { slug: 'site' }, props: { title: 'Books, writing, teaching, and the dinner table.', eyebrow: undefined } },
  ];
}

export const GET: APIRoute = async ({ props }) => {
  const png = await renderOg(props as { title: string; eyebrow?: string });
  return new Response(png, { headers: { 'Content-Type': 'image/png' } });
};
