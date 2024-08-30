import { ChartConfig } from "../ui/chart";

export const chartData = [
  {
    month: "january",
    desktop: 1260,
  },
];

export const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
  mobile: {
    label: "Mobile",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;
