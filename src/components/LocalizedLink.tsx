import { Link } from "@tanstack/react-router";
import { useLanguage } from "@/lib/language";
import { isMirroredLocalizedPath, localizePath } from "@/locales";

export function LocalizedLink({ to, params, ...props }: any) {
  const [language] = useLanguage();

  if (typeof to !== "string") {
    return <Link to={to} params={params} {...props} />;
  }

  let targetTo = to;
  let targetParams = params;

  if (isMirroredLocalizedPath(to)) {
    let interpolated = to;
    if (params && typeof params === "object" && to.includes("$")) {
      interpolated = to.replace(/\$([A-Za-z0-9_]+)/g, (match, key) => {
        if (key in params && params[key] != null) {
          return encodeURIComponent(String(params[key]));
        }
        return match;
      });
    }

    const localized = localizePath(interpolated, language);
    if (localized !== interpolated) {
      targetTo = localized;
      if (interpolated !== to) {
        targetParams = undefined;
      }
    }
  }

  return <Link to={targetTo} params={targetParams} {...props} />;
}

export { LocalizedLink as Link };
