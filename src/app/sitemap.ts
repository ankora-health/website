import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const homePage = `https://ankora.health`;
  const vals = ['/', '/about', '/contact', '/faqs', '/terms', '/privacy'];

  const pages: MetadataRoute.Sitemap = vals.map((el) => ({
    url: `${homePage}${el}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: el === "/" ? 1 : 0.8,
  }));

  return pages
}
