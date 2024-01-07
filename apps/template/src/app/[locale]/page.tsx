/* Style */
import style from "@bitshop/buyer/app/[locale]/page.module.css";
import { Button, LogoExtended, LogoMark } from "@bitshop/ui";
import clsx from "clsx";

/* Symbols */
import { useTranslations } from "next-intl";

/* Page */

export default function Home() {
  const t = useTranslations("Home");

  return (
    <div className={clsx(style.wrapper, "flex gap-4")}>
      <Button>{t("button")}</Button>
      <Button type="primary">{t("button")}</Button>
      <Button type="accent">{t("button")}</Button>
      <LogoMark />
      <LogoExtended />
    </div>
  );
}
