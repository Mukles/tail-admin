"use client";

import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { EllipsisVertical } from "lucide-react";
import { chartConfig, chartData } from "./data";

export function MonthlySales() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg font-bold flex justify-between">
          Monthly Slaes
          <EllipsisVertical className="size-5 ml-auto text-secondary-foreground" />
        </CardTitle>
      </CardHeader>
      <CardContent className="px-0 pr-5">
        <ChartContainer config={chartConfig} className="h-[188px] w-full">
          <BarChart barSize={20} barGap={5} accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <YAxis
              tickLine={false}
              type="number"
              domain={[0, 800]}
              tickCount={5}
              tickMargin={0}
              padding={{ top: 0 }}
              className="pr-4"
              axisLine={false}
            />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent className="text-primary" hideLabel />
              }
            />
            <Bar
              className="text-accent hover:text-primary transition"
              dataKey="desktop"
              fill="currentColor"
              radius={[6, 6, 0, 0]}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
