import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "../components/ui/badge";
import { sidebarMenu } from "./header/data";
export default function Sidebar({ children }: { children?: React.ReactNode }) {
  return (
    <div className="h-full overflow-auto px-5 pt-8 relative">
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
                      key={menu.name}
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
                          <ul className="pt-1.5">
                            {menu.children.map((child, index) => (
                              <li key={child.name + "_" + index}>
                                <Link
                                  className="nav-link block ml-7 group rounded-md relative"
                                  href={child.url}
                                >
                                  <span className="text-foreground group-hover:text-primary">
                                    {child.name}
                                  </span>
                                  {/* @ts-ignore */}
                                  {child?.tag && (
                                    <Badge
                                      className="absolute top-1/2 -translate-y-1/2 right-2"
                                      variant={"default"}
                                    >
                                      {/* @ts-ignore */}
                                      {child.tag}
                                    </Badge>
                                  )}
                                </Link>
                              </li>
                            ))}
                          </ul>
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

      {children}
    </div>
  );
}
