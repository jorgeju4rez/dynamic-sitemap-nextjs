import { MetadataRoute } from 'next'

async function getCountProducts() {
  const res = await fetch(process.env.API_URL_LOCAL + `/v1/products/count`, { cache: 'force-cache' })
  return res.json()
}

async function getProducts(id: number) {
  const res = await fetch(process.env.API_URL_LOCAL + `/v1/products/sitemap/${id}`, { cache: 'force-cache' })
  return res.json()
}

export async function generateSitemaps() {
  try {
    const count = await getCountProducts();
    const pages = Math.ceil(count / 50000);
    const sitemaps = Array.from({ length: pages }, (_, i) => ({ id: i }));

    return sitemaps;
  } catch (error) {
    console.error("Error generating sitemaps: ", error);
    return [];
  }
}

export default async function sitemap({
  id,
}: {
  id: number
}): Promise<MetadataRoute.Sitemap> {

  const products = await getProducts(id);

  return products?.map((item: any) => {
    return {
      url: `${process.env.SITE_URL}/product/${item.ean}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    }
  })
}