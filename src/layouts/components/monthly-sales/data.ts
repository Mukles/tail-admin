import { ChartConfig } from "@/components/ui/chart";

export const chartData = [
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

export const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--primary))",
  },
} satisfies ChartConfig;
