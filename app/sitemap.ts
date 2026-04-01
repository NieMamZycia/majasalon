import type { MetadataRoute } from "next";

const base = "https://basestudio.pl";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/uslugi/manicure-wloclawek",
    "/uslugi/pedicure-wloclawek",
    "/uslugi/hybryda",
    "/cennik",
    "/galeria",
    "/kontakt",
  ];
  return routes.map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.8,
  }));
}
