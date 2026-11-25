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
  section?: string;
  keywords?: string[];
  about?: string[];
  crumbs: { name: string; path: string }[];
  faqs: { question: string; answer: string }[];
  webApp?: { name: string; category?: string };
}

function buildAboutNodes(about?: string[], section?: string) {
  const terms = about && about.length > 0 ? about : section ? [section] : [];
  return terms.slice(0, 8).map((term) => ({
    "@type": "Thing",
    name: term,
  }));
}

/** WebPage + Article + BreadcrumbList + optional FAQPage / WebApplication graph for a content page. */
export function buildContentJsonLd({
  path,
  title,
  description,
  image,
  published,
  updated,
  inLanguage = "en",
  homeLabel = "Home",
  section,
  keywords,
  about,
  crumbs,
  faqs,
  webApp,
}: JsonLdArgs) {
  const url = `${SITE_URL}${path}`;
  const publishedDate = published ?? updated;
  const aboutNodes = buildAboutNodes(about, section);

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
      publishingPrinciples: `${SITE_URL}/editorial-policy`,
      isPartOf: { "@type": "WebSite", "@id": `${SITE_URL}/#website`, name: SITE_NAME, url: SITE_URL },
      ...(aboutNodes.length > 0 ? { about: aboutNodes } : {}),
    },
    {
      "@type": "Article",
      "@id": `${url}#article`,
      headline: title,
      description,
      inLanguage,
      ...(image ? { image: `${SITE_URL}${image}` } : {}),
      dateModified: updated,
      datePublished: publishedDate,
      mainEntityOfPage: { "@type": "WebPage", "@id": url },
      isPartOf: { "@id": `${SITE_URL}/#website` },
      publishingPrinciples: `${SITE_URL}/editorial-policy`,
      ...(section ? { articleSection: section } : {}),
      ...(keywords && keywords.length > 0 ? { keywords: keywords.slice(0, 12).join(", ") } : {}),
      ...(aboutNodes.length > 0 ? { about: aboutNodes } : {}),
      author: {
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        name: `${SITE_NAME} Editorial Desk`,
        url: SITE_URL,
      },
      publisher: {
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        name: SITE_NAME,
        url: SITE_URL,
        publishingPrinciples: `${SITE_URL}/editorial-policy`,
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
  ];

  if (faqs.length > 0) {
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
      publisher: { "@id": `${SITE_URL}/#organization` },
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
  keywords?: string[];
  about?: string[];
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
  keywords,
  about,
  crumbs,
  faqs,
  article,
}: PageJsonLdArgs) {
  const url = `${SITE_URL}${path}`;
  const publishedDate = article?.published ?? article?.updated;
  const aboutNodes = buildAboutNodes(about, article?.section);

  const graph: Record<string, unknown>[] = [
    {
      "@type": "WebPage",
      "@id": url,
      url,
      name: title,
      description,
      ...(article ? { datePublished: publishedDate, dateModified: article.updated } : {}),
      inLanguage,
      publishingPrinciples: `${SITE_URL}/editorial-policy`,
      isPartOf: { "@type": "WebSite", "@id": `${SITE_URL}/#website`, name: SITE_NAME, url: SITE_URL },
      ...(aboutNodes.length > 0 ? { about: aboutNodes } : {}),
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
      "@id": `${url}#article`,
      headline: title,
      description,
      inLanguage,
      mainEntityOfPage: { "@type": "WebPage", "@id": url },
      isPartOf: { "@id": `${SITE_URL}/#website` },
      publishingPrinciples: `${SITE_URL}/editorial-policy`,
      datePublished: publishedDate,
      dateModified: article.updated,
      ...(article.section ? { articleSection: article.section } : {}),
      ...(keywords && keywords.length > 0 ? { keywords: keywords.slice(0, 12).join(", ") } : {}),
      ...(aboutNodes.length > 0 ? { about: aboutNodes } : {}),
      author: {
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        name: `${SITE_NAME} Editorial Desk`,
        url: SITE_URL,
      },
      publisher: {
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        name: SITE_NAME,
        url: SITE_URL,
        publishingPrinciples: `${SITE_URL}/editorial-policy`,
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
