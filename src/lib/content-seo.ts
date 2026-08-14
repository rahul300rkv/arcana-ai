import { SITE_URL, SITE_NAME } from "@/lib/site";

interface JsonLdArgs {
  path: string;
  title: string;
  description: string;
  image?: string;
  updated: string;
  crumbs: { name: string; path: string }[];
  faqs: { question: string; answer: string }[];
}

/** WebPage + Article + BreadcrumbList + FAQPage graph for a content page. */
export function buildContentJsonLd({
  path,
  title,
  description,
  image,
  updated,
  crumbs,
  faqs,
}: JsonLdArgs) {
  const url = `${SITE_URL}${path}`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": url,
        url,
        name: title,
        description,
        inLanguage: "en",
        isPartOf: { "@type": "WebSite", name: SITE_NAME, url: SITE_URL },
      },
      {
        "@type": "Article",
        headline: title,
        description,
        ...(image ? { image: `${SITE_URL}${image}` } : {}),
        dateModified: updated,
        datePublished: updated,
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
          { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
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
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.question,
          acceptedAnswer: { "@type": "Answer", text: f.answer },
        })),
      },
    ],
  };
}

/** Standard title/description/OG/Twitter/canonical meta for a content page. */
export function buildContentMeta({
  path,
  title,
  description,
  keywords,
  image,
}: {
  path: string;
  title: string;
  description: string;
  keywords: string[];
  image?: string;
}) {
  const url = `${SITE_URL}${path}`;
  const absoluteImage = image ? `${SITE_URL}${image}` : undefined;
  return [
    { title: `${title} | ${SITE_NAME}` },
    { name: "description", content: description },
    { name: "keywords", content: keywords.join(", ") },
    { name: "robots", content: "index, follow, max-image-preview:large" },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:type", content: "article" },
    { property: "og:url", content: url },
    { property: "og:site_name", content: SITE_NAME },
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
  /** Breadcrumb trail after Home. */
  crumbs: { name: string; path: string }[];
  faqs?: { question: string; answer: string }[];
  /** Adds an Article node for editorial pages (guides, policies). */
  article?: { updated: string; section?: string };
}

/** WebPage (+ Breadcrumb, optional FAQPage / Article) graph for a static page. */
export function buildPageJsonLd({
  path,
  title,
  description,
  crumbs,
  faqs,
  article,
}: PageJsonLdArgs) {
  const url = `${SITE_URL}${path}`;
  const graph: Record<string, unknown>[] = [
    {
      "@type": "WebPage",
      "@id": url,
      url,
      name: title,
      description,
      inLanguage: "en",
      isPartOf: { "@type": "WebSite", name: SITE_NAME, url: SITE_URL },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
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
      mainEntityOfPage: url,
      datePublished: article.updated,
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
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.question,
        acceptedAnswer: { "@type": "Answer", text: f.answer },
      })),
    });
  }

  return { "@context": "https://schema.org", "@graph": graph };
}
