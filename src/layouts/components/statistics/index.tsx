"use client";

import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Button } from "../ui/button";
import { DatePickerWithRange } from "../ui/date-picker";
import { chartConfig, chartData } from "./data";

export function Statistics() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg font-bold flex justify-between flex-wrap">
          Statistics
          <div className="flex gap-3 flex-col sm:flex-row">
            <div className="flex bg-background p-1 rounded-md">
              <Button
                size={"sm"}
                variant={"ghost"}
                className="hover:bg-card bg-card"
              >
                Overview
              </Button>
              <Button size={"sm"} variant={"ghost"} className="hover:bg-card">
                Sales
              </Button>
              <Button size={"sm"} variant={"ghost"} className="hover:bg-card">
                Rreview
              </Button>
            </div>
            <div>
              <DatePickerWithRange />
            </div>
          </div>
        </CardTitle>
        <CardDescription>Target you’ve set for each month</CardDescription>
      </CardHeader>
      <CardContent className="px-0 pr-2.5">
        <ChartContainer className="h-[276px] w-full" config={chartConfig}>
          <AreaChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <defs>
              <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="10%"
                  stopColor="var(--color-desktop)"
                  stopOpacity={0.1}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-desktop)"
                  stopOpacity={0.1}
                />
              </linearGradient>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-desktop)"
                  stopOpacity={0.4}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-desktop)"
                  stopOpacity={0}
                />
              </linearGradient>
            </defs>
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              domain={[0, 1000]}
              tickCount={6}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <YAxis
              tickLine={false}
              type="number"
              domain={[0, 1000]}
              tickCount={5}
              tickMargin={0}
              padding={{ top: 0 }}
              className="pr-4"
              axisLine={false}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dot" />}
            />
            <Area
              dataKey="mobile"
              type="natural"
              fill="url(#colorUv)"
              fillOpacity={0.4}
              stroke="var(--color-desktop)"
              stackId="a"
              strokeDasharray={0.4}
            />
            <Area
              dataKey="desktop"
              type="natural"
              fill="url(#colorPv)"
              stackId="a"
              strokeOpacity={0.8}
              strokeWidth={2}
              stroke="var(--color-mobile)"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
