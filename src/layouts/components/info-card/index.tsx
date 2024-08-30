import { Badge, BadgeProps } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import * as Icons from "@/icons";
import { cn } from "@/lib/utils";

export default function InfoCard({
  title,
  amount,
  ratings,
  varients,
  icon,
}: {
  title: string;
  amount: string;
  ratings: string;
  varients: BadgeProps["variant"];
  icon: React.ReactNode;
}) {
  return (
    <Card className="p-6">
      <Button
        className="w-12 border-0 h-12 rounded-lg mb-4"
        variant={"outline"}
        size={"icon"}
      >
        {icon}
      </Button>
      <p className="mb-2 text-secondary-foreground">{title}</p>
      <div className="flex justify-between items-end">
        <h2 className="text-3xl text-card-foreground font-bold">{amount}</h2>
        <Badge
          className="flex-none w-[72px] items-center justify-center text-center"
          variant={varients}
        >
          <Icons.ArrowIcon
            className={cn("mr-1", varients === "destructive" && "rotate-180")}
          />
          {ratings}
        </Badge>
      </div>
    </Card>
  );
}
