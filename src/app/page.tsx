import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import * as Icons from "@/icons";

export default function Home() {
  return (
    <section>
      <div className="grid grid-cols-12 gap-6">
        <div className="md:col-span-7 col-span-12">
          <div className="grid gap-6 sm:grid-cols-2">
            <Card className="p-6">
              <Button
                className="w-12 h-12 rounded-lg mb-5"
                variant={"outline"}
                size={"icon"}
              >
                <Icons.UserIcon className="w-5 h-5" />
              </Button>
              <p className="mb-2 text-card-foreground">Customers</p>
              <div className="flex justify-between items-end">
                <h2 className="text-3xl font-bold text-title">3,782</h2>
                <Badge
                  className="flex-none w-[72px] items-center justify-center text-center"
                  variant={"success"}
                >
                  <Icons.ArrowIcon className="mr-1" />
                  11.01%
                </Badge>
              </div>
            </Card>
            <Card className="p-6">
              <Button
                className="w-12 h-12 rounded-lg mb-5"
                variant={"outline"}
                size={"icon"}
              >
                <Icons.UserIcon className="w-5 h-5" />
              </Button>
              <p className="mb-2 text-card-foreground">Customers</p>
              <div className="flex justify-between items-end">
                <h2 className="text-3xl font-bold text-title">3,782</h2>
                <Badge
                  className="flex-none w-[72px] items-center justify-center text-center"
                  variant={"success"}
                >
                  <Icons.ArrowIcon className="mr-1" />
                  11.01%
                </Badge>
              </div>
            </Card>
          </div>
        </div>
        <div className="md:col-span-5 col-span-12">
          <Card>
            <CardHeader>
              <CardTitle>Card Title</CardTitle>
              <CardDescription>Card Description</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Card Content</p>
            </CardContent>
            <CardFooter>
              <p>Card Footer</p>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
}
