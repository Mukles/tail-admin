import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import * as Icons from "@/icons";
import Image from "next/image";
import Link from "next/link";
import { dashboardMenu } from "./data";

export default function ProfileDashboardMenu() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <button className="flex items-center gap-2 [&>svg]:data-[state=open]:rotate-180">
          <Image
            src={"/images/avatar.png"}
            alt="avatar"
            width={44}
            height={44}
          />
          <span className="text-foreground max-md:hidden">Emirhan Boruch</span>
          <Icons.ChevronDown className="transition-transform" />
        </button>
      </PopoverTrigger>
      <PopoverContent align="end">
        {dashboardMenu.map((child) => (
          <Link
            key={child.name}
            href={child.url}
            className="link block whitespace-nowrap rounded-md px-3 py-2 text-sm"
          >
            {child.name}
          </Link>
        ))}
      </PopoverContent>
    </Popover>
  );
}
