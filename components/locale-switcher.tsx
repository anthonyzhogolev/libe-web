"use client";

import { useLocale, useTranslations } from "next-intl";

import { Button } from "@/components/ui/button";
import { Link, usePathname } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

export function LocaleSwitcher() {
  const t = useTranslations("localeSwitcher");
  const locale = useLocale();
  const pathname = usePathname();

  return (
    <div
      className="flex items-center justify-center gap-2"
      aria-label={t("label")}
    >
      {routing.locales.map((item) => (
        <Button
          key={item}
          variant={item === locale ? "secondary" : "ghost"}
          size="sm"
          render={
            <Link href={pathname} locale={item}>
              {item.toUpperCase()}
            </Link>
          }
        />
      ))}
    </div>
  );
}
