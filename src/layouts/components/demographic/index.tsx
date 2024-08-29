import { Card, CardDescription, CardHeader } from "@/components/ui/card";
import * as Icons from "@/icons";
import { Button } from "../ui/button";

export function Demographic() {
  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between">
          <div>
            <h3 className="text-title text-lg font-semibold">
              Customers Demographic
            </h3>
            <CardDescription>
              Number of customer based on country
            </CardDescription>
          </div>
          <Button className="flex-none" variant="outline" size={"icon"}>
            <Icons.Hamburger className="w-5 h-5" />
          </Button>
        </div>
      </CardHeader>
    </Card>
  );
}
