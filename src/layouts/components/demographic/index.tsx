"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import * as Icons from "@/icons";
import { Chart } from "react-google-charts";
import { Button } from "../ui/button";
import { data } from "./data";

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
      <CardContent className="h-full">
        <div>
          <Chart
            chartEvents={[
              {
                eventName: "select",
                callback: ({ chartWrapper }) => {
                  const chart = chartWrapper.getChart();
                  const selection = chart.getSelection();
                  if (selection.length === 0) return;
                  const region = data[selection[0].row + 1];
                  console.log("Selected : " + region);
                },
              },
            ]}
            chartType="GeoChart"
            data={data}
          />
        </div>
      </CardContent>
    </Card>
  );
}
