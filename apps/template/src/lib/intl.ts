import { getRequestConfig } from "next-intl/server";

export const locales = ["en", "it"] as const;
export const localePrefix = "always";
export const defaultLocale = locales[0];

export default getRequestConfig(async ({ locale }) => ({
  messages: (await import(`../../messages/${locale}.json`)).default,
}));
