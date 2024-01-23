
async function getCountProducts() {
    const res = await fetch(process.env.API_URL_LOCAL + `/v1/products/count`, { cache: 'force-cache' })
    return res.json()
}

export default async function sitemap() {
    const count = await getCountProducts();
    const pages = Math.ceil(count / 50000);
    const sitemaps = Array.from({ length: pages }, (_, i) => ({ id: i }));

    return sitemaps.map((item: any) => ({
        url: `${process.env.SITE_URL}/product/sitemap/${item.id}.xml`,
        lastModified: new Date(),
        changeFrequency: 'daily',
        priority: 1,
    }))
}