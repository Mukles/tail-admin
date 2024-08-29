import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../components/ui/button";
import { sidebarMenu } from "./header/data";
export default function Sidebar() {
  return (
    <div className="h-full overflow-auto px-5 pt-8">
      <div className="mb-7">
        <Link href="/">
          <Image src={"/images/logo.png"} alt="logo" width={154} height={32} />
        </Link>
      </div>

      <nav className="grid gap-y-6">
        {sidebarMenu.map((menu) => {
          return (
            <div key={menu.name}>
              <div className="text-xs text-muted-foreground uppercase mb-3.5">
                {menu.label}
              </div>
              <Accordion type="single" collapsible className="w-full">
                {menu.children.map((menu) => {
                  const Icon = menu.icon;
                  return (
                    <AccordionItem
                      disabled={!menu.children?.length}
                      value={menu.name}
                      className="border-b-0"
                    >
                      <AccordionTrigger className="text-primary hover:no-underline font-medium py-2 px-3 text-sm">
                        <>
                          <span>
                            <Icon className="size-6 mr-3" />
                          </span>
                          <span className="text-foreground flex-1 text-left">
                            {menu.name}
                          </span>
                        </>
                      </AccordionTrigger>
                      {menu.children && (
                        <AccordionContent>
                          {menu.children.map((child) => (
                            <Link
                              key={child.name}
                              className="nav-link block ml-7 group rounded"
                              href={child.url}
                            >
                              <span className="text-foreground group-hover:text-primary">
                                {child.name}
                              </span>
                            </Link>
                          ))}
                        </AccordionContent>
                      )}
                    </AccordionItem>
                  );
                })}
              </Accordion>
            </div>
          );
        })}
      </nav>

      <Card className="bg-background text-center mt-auto">
        <CardHeader className="pb-4">
          <CardTitle className="font-semibold text-base">
            TailAdmin Pro
          </CardTitle>
          <CardDescription>
            Get all dashboard and 300+ essential UI elements
          </CardDescription>
        </CardHeader>

        <CardFooter>
          <Button className="mx-auto" size={"lg"}>
            Upgrade Plan
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
