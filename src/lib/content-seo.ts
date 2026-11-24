import { SITE_URL, SITE_NAME } from "@/lib/site";

interface JsonLdArgs {
  path: string;
  title: string;
  description: string;
  image?: string;
  published?: string;
  updated: string;
  inLanguage?: string;
  homeLabel?: string;
  crumbs: { name: string; path: string }[];
  faqs: { question: string; answer: string }[];
  webApp?: { name: string; category?: string };
}

/** WebPage + Article + BreadcrumbList + FAQPage (+ optional WebApplication) graph for a content page. */
export function buildContentJsonLd({
  path,
  title,
  description,
  image,
  published,
  updated,
  inLanguage = "en",
  homeLabel = "Home",
  crumbs,
  faqs,
  webApp,
}: JsonLdArgs) {
  const url = `${SITE_URL}${path}`;
  const publishedDate = published ?? updated;
  const graph: Record<string, unknown>[] = [
    {
      "@type": "WebPage",
      "@id": url,
      url,
      name: title,
      description,
      datePublished: publishedDate,
      dateModified: updated,
      inLanguage,
      isPartOf: { "@type": "WebSite", name: SITE_NAME, url: SITE_URL },
    },
    {
      "@type": "Article",
      headline: title,
      description,
      inLanguage,
      ...(image ? { image: `${SITE_URL}${image}` } : {}),
      dateModified: updated,
      datePublished: publishedDate,
      mainEntityOfPage: url,
      author: { "@type": "Organization", name: `${SITE_NAME} Editorial Desk`, url: SITE_URL },
      publisher: {
        "@type": "Organization",
        name: SITE_NAME,
        url: SITE_URL,
        logo: { "@type": "ImageObject", url: `${SITE_URL}/logo.webp` },
      },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: homeLabel, item: SITE_URL },
        ...crumbs.map((c, i) => ({
          "@type": "ListItem",
          position: i + 2,
          name: c.name,
          item: `${SITE_URL}${c.path}`,
        })),
      ],
    },
    {
      "@type": "FAQPage",
      inLanguage,
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.question,
        acceptedAnswer: { "@type": "Answer", text: f.answer },
      })),
    },
  ];

  if (webApp) {
    graph.push({
      "@type": "WebApplication",
      name: webApp.name,
      url,
      inLanguage,
      datePublished: publishedDate,
      dateModified: updated,
      applicationCategory: webApp.category ?? "LifestyleApplication",
      operatingSystem: "Any",
      description,
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    });
  }

  return {
    "@context": "https://schema.org",
    "@graph": graph,
  };
}

/** Standard title/description/OG/Twitter/canonical meta for a content page. */
export function buildContentMeta({
  path,
  title,
  description,
  keywords,
  image,
  exactTitle = false,
  locale,
}: {
  path: string;
  title: string;
  description: string;
  keywords: string[];
  image?: string;
  exactTitle?: boolean;
  locale?: string;
}) {
  const url = `${SITE_URL}${path}`;
  const absoluteImage = image ? `${SITE_URL}${image}` : undefined;
  return [
    { title: exactTitle ? title : `${title} | ${SITE_NAME}` },
    { name: "description", content: description },
    { name: "keywords", content: keywords.join(", ") },
    { name: "robots", content: "index, follow, max-image-preview:large" },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:type", content: "article" },
    { property: "og:url", content: url },
    { property: "og:site_name", content: SITE_NAME },
    ...(locale ? [{ property: "og:locale", content: locale }] : []),
    ...(absoluteImage ? [{ property: "og:image", content: absoluteImage }] : []),
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    ...(absoluteImage ? [{ name: "twitter:image", content: absoluteImage }] : []),
  ];
}

interface PageJsonLdArgs {
  path: string;
  title: string;
  description: string;
  inLanguage?: string;
  homeLabel?: string;
  /** Breadcrumb trail after Home. */
  crumbs: { name: string; path: string }[];
  faqs?: { question: string; answer: string }[];
  /** Adds an Article node for editorial pages (guides, policies). */
  article?: { published?: string; updated: string; section?: string };
}

/** WebPage (+ Breadcrumb, optional FAQPage / Article) graph for a static page. */
export function buildPageJsonLd({
  path,
  title,
  description,
  inLanguage = "en",
  homeLabel = "Home",
  crumbs,
  faqs,
  article,
}: PageJsonLdArgs) {
  const url = `${SITE_URL}${path}`;
  const publishedDate = article?.published ?? article?.updated;
  const graph: Record<string, unknown>[] = [
    {
      "@type": "WebPage",
      "@id": url,
      url,
      name: title,
      description,
      ...(article ? { datePublished: publishedDate, dateModified: article.updated } : {}),
      inLanguage,
      isPartOf: { "@type": "WebSite", name: SITE_NAME, url: SITE_URL },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: homeLabel, item: SITE_URL },
        ...crumbs.map((c, i) => ({
          "@type": "ListItem",
          position: i + 2,
          name: c.name,
          item: `${SITE_URL}${c.path}`,
        })),
      ],
    },
  ];

  if (article) {
    graph.push({
      "@type": "Article",
      headline: title,
      description,
      inLanguage,
      mainEntityOfPage: url,
      datePublished: publishedDate,
      dateModified: article.updated,
      ...(article.section ? { articleSection: article.section } : {}),
      author: { "@type": "Organization", name: `${SITE_NAME} Editorial Desk`, url: SITE_URL },
      publisher: {
        "@type": "Organization",
        name: SITE_NAME,
        url: SITE_URL,
        logo: { "@type": "ImageObject", url: `${SITE_URL}/logo.webp` },
      },
    });
  }

  if (faqs && faqs.length > 0) {
    graph.push({
      "@type": "FAQPage",
      inLanguage,
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.question,
        acceptedAnswer: { "@type": "Answer", text: f.answer },
      })),
    });
  }

  return { "@context": "https://schema.org", "@graph": graph };
}
