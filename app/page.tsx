import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
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

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center p-8">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>shadcn/ui подключён</CardTitle>
          <CardDescription>
            Tailwind CSS v4 + стиль base-nova, цвет neutral
          </CardDescription>
          <CardAction>
            <Badge variant="secondary">проверка</Badge>
          </CardAction>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <Input placeholder="Введите текст…" />
          <div className="flex gap-2">
            <Button>Default</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
          </div>
        </CardContent>
        <CardFooter>
          <Button variant="secondary" className="w-full">
            Secondary
          </Button>
        </CardFooter>
      </Card>
    </main>
  );
}
