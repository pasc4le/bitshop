/* Lib */
import {
  createLocalizedPathnamesNavigation,
  Pathnames,
} from "next-intl/navigation";
import { localePrefix, locales } from "./intl";

/* Navigation */
export const pathnames = {
  "/": "/",
} satisfies Pathnames<typeof locales>;

export const { Link, redirect, usePathname, useRouter, getPathname } =
  createLocalizedPathnamesNavigation({ locales, localePrefix, pathnames });
