/* Style */
import style from "@bitshop/buyer/app/[locale]/page.module.css";
import { Button, LogoExtended, LogoMark } from "@bitshop/ui";
import clsx from "clsx";

/* Page */

export default function Home() {
  return (
    <div className={clsx(style.wrapper, "flex gap-4")}>
      <Button>Button</Button>
      <Button type="primary">Button</Button>
      <Button type="accent">Button</Button>
      <LogoMark />
      <LogoExtended />
    </div>
  );
}
