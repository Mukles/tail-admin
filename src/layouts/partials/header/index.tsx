import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import * as Icons from "@/icons";
import Sidebar from "../sidebar";
import ProfileDashboardMenu from "./profile-menu";

export default function Header() {
  return (
    <header className="py-4 px-6 flex-1 bg-white">
      <nav className="flex items-center gap-6 justify-between">
        <div className="flex flex-1 gap-4 items-center">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                className="bg-white w-11 h-11"
                variant={"outline"}
                size={"icon"}
              >
                <Icons.Hamburger className="w-5 h-5" />
              </Button>
            </SheetTrigger>
            <SheetContent className="px-0" side="left">
              <Sidebar />
            </SheetContent>
          </Sheet>

          <div className="flex flex-1 relative  max-w-[430px] max-md:hidden">
            <Label
              className="absolute top-0 left-2 px-2 h-11 inline-flex items-center justify-center text-muted-foreground"
              htmlFor="search"
            >
              <Icons.SearchIcon className="w-5 h-5" />
            </Label>
            <Input
              className="pl-11 h-11"
              id="search"
              type="search"
              placeholder="Search or type command..."
            />
            <span className="absolute right-2.5 top-1/2 -translate-y-1/2 flex items-center justify-center text-muted-foreground text-xs font-medium tracking-[3px] border border-input w-10 h-7 font-secondary rounded-md">
              ⌘K
            </span>
          </div>
        </div>

        <div className="">
          <ul className="flex items-center gap-3">
            <li className="relative flex items-center md:hidden">
              <Button
                className="rounded-full border border-border bg-transparent "
                variant={"outline"}
                size={"icon"}
              >
                <Icons.SearchIcon
                  stroke="#667085"
                  className="w-5 h-5 md:hidden"
                />
              </Button>
            </li>
            <li className="relative flex items-center">
              <Button
                className="rounded-full border border-border bg-transparent"
                variant={"outline"}
                size={"icon"}
              >
                <Icons.Dark />
              </Button>
            </li>
            <li className="relative flex items-center">
              <Button
                className="rounded-full border border-border bg-transparent"
                variant={"outline"}
                size={"icon"}
              >
                <Icons.Notification />
              </Button>
            </li>
            <li className="relative flex items-center">
              <ProfileDashboardMenu />
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
