"use client";

import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
const chartData = [
  { month: "January", desktop: 186 },
  { month: "February", desktop: 305 },
  { month: "March", desktop: 237 },
  { month: "April", desktop: 73 },
  { month: "May", desktop: 209 },
  { month: "June", desktop: 214 },
  { month: "July", desktop: 186 },
  { month: "August", desktop: 305 },
  { month: "October", desktop: 237 },
  { month: "November", desktop: 73 },
  { month: "December", desktop: 209 },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

export function BarChartComponent() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-title">Monthly Slaes</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer className="h-[188px] w-full" config={chartConfig}>
          <BarChart
            margin={{ top: 20, right: 30, bottom: 5, left: -28 }}
            barSize={20}
            barGap={5}
            accessibilityLayer
            data={chartData}
          >
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
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar
              dataKey="desktop"
              fill="var(--color-desktop)"
              radius={[6, 6, 0, 0]}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
