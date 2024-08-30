import { ChartConfig } from "../ui/chart";

export const chartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
  { month: "July", desktop: 400, mobile: 250 },
  { month: "August", desktop: 186, mobile: 300 },
  { month: "September", desktop: 209, mobile: 370 },
  { month: "October", desktop: 209, mobile: 420 },
  { month: "November", desktop: 209, mobile: 480 },
  { month: "December", desktop: 209, mobile: 530 },
];

export const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--primary))",
  },
  mobile: {
    label: "Mobile",
    color: "hsl(var(--primary))",
  },
} satisfies ChartConfig;
