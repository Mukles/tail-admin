"use client";

import { EllipsisVertical, MoveDown, MoveUp } from "lucide-react";
import { Label, Pie, PieChart } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { ChartConfig, ChartContainer } from "@/components/ui/chart";
import { Separator } from "@/components/ui/separator";
import { Button } from "../ui/button";
const chartData = [
  { browser: "chrome", visitors: 500, fill: "var(--color-chrome)" },
  { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
];

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  chrome: {
    label: "Chrome",
    color: "hsl(var(--primary))",
  },
  safari: {
    label: "Safari",
    color: "hsl(var(--background))",
  },
} satisfies ChartConfig;

export default function MonthlyTarget() {
  const totalVisitors = 5000;

  return (
    <Card className="flex flex-col bg-background overflow-hidden h-full">
      <CardHeader className="bg-card">
        <div className="flex justify-between">
          <div>
            <h3 className="text-title text-lg font-semibold mb-1">
              Monthly Target
            </h3>
            <CardDescription>
              Number of customer based on country
            </CardDescription>
          </div>
          <Button className="flex-none" variant="ghost" size={"icon"}>
            <EllipsisVertical className="w-5 h-5" />
          </Button>
        </div>
      </CardHeader>
      <CardContent className="bg-card p-0 h-full">
        <ChartContainer
          config={chartConfig}
          className="mx-auto w-full  max-h-[220px] h-full"
        >
          <PieChart margin={{ top: 42 }}>
            <Pie
              width={350}
              height={323}
              data={chartData}
              innerRadius={100}
              outerRadius={110}
              startAngle={0}
              endAngle={180}
              cx={"50%"}
              strokeWidth={100}
              dataKey="visitors"
              nameKey="browser"
              cornerRadius={10}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                        className="-translate-y-10"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="font-semibold text-4xl text-card-foreground mb-2"
                        >
                          75.55%
                        </tspan>
                        <tspan
                          className="text-sm text-success-foreground bg-success"
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 30}
                        >
                          +10%
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>

        <CardDescription className="text-center px-8 pb-10">
          You earn $3287 today, its higher than last month. Keep up your good
          work!
        </CardDescription>
      </CardContent>
      <CardFooter className="grid py-5 grid-cols-3">
        <div className="text-center">
          <p className="text-sm text-secondary-foreground mb-1.5">Target</p>
          <h3 className="text-lg font-semibold">
            $20K
            <MoveDown className="inline-block text-destructive-foreground w-5 h-3 stroke-2" />
          </h3>
        </div>
        <div className="relative text-center">
          <Separator
            orientation="vertical"
            className="absolute bottom-0 top-1/2 -translate-y-1/2 z-1 h-1/2 bg-secondary"
          />
          <p className="text-sm text-secondary-foreground mb-1.5">Revenue</p>
          <h3 className="text-lg font-semibold text-center">
            $16K
            <MoveUp className="inline-block text-destructive-foreground w-5 h-3 stroke-2" />
          </h3>
        </div>
        <div className="text-center relative">
          <Separator
            orientation="vertical"
            className="absolute bottom-0 top-1/2 -translate-y-1/2 z-1 h-1/2 bg-secondary"
          />
          <p className="text-sm text-secondary-foreground mb-1.5">Today</p>
          <h3 className="text-lg font-semibold">
            $16K
            <MoveUp className="inline-block text-destructive-foreground w-5 h-3 stroke-2" />
          </h3>
        </div>
      </CardFooter>
    </Card>
  );
}
