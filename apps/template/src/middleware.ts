/* Libs */
import createMiddleware from "next-intl/middleware";
import { defaultLocale, localePrefix, locales } from "@bitshop/buyer/lib/intl";
import { pathnames } from "@bitshop/buyer/lib/navigation";

export default createMiddleware({
  locales,
  localePrefix,
  pathnames,
  defaultLocale,
});

export const config = {
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
