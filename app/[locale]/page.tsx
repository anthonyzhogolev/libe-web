import { notFound } from "next/navigation";
import { hasLocale, useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { use } from "react";

import { LocaleSwitcher } from "@/components/locale-switcher";
import { Badge } from "@/components/ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Link } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

type Props = {
  params: Promise<{ locale: string }>;
};

export default function Home({ params }: Props) {
  const { locale } = use(params);
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  setRequestLocale(locale);

  const t = useTranslations("home");

  return (
    <main className="flex min-h-screen items-center justify-center p-8">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>{t("cardTitle")}</CardTitle>
          <CardDescription>{t("cardDescription")}</CardDescription>
          <CardAction>
            <Badge variant="secondary">{t("badge")}</Badge>
          </CardAction>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <Input placeholder={t("inputPlaceholder")} />
          <div className="flex gap-2">
            <Button>{t("buttonDefault")}</Button>
            <Button variant="outline">{t("buttonOutline")}</Button>
            <Button variant="ghost">{t("buttonGhost")}</Button>
          </div>
        </CardContent>
        <CardFooter className="flex-col items-stretch gap-2">
          <Button variant="secondary" className="w-full">
            {t("buttonSecondary")}
          </Button>
          <div className="flex gap-2">
            <Link href="/login" className={buttonVariants({ className: "flex-1" })}>
              {t("login")}
            </Link>
            <Link
              href="/register"
              className={buttonVariants({ variant: "outline", className: "flex-1" })}
            >
              {t("register")}
            </Link>
          </div>
          <LocaleSwitcher />
        </CardFooter>
      </Card>
    </main>
  );
}
