"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { EllipsisVertical } from "lucide-react";
import Image from "next/image";
import { Chart } from "react-google-charts";
import { Button } from "../ui/button";
import { customers, data, options } from "./data";

export default function Demographic() {
  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between">
          <div>
            <h3 className="text-title text-lg font-semibold mb-1">
              Customers Demographic
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
      <CardContent className="h-full">
        <div className="rounded-md aspect-video w-full p-3 bg-secondary">
          <Chart
            className=" aspect-video max-w-full rounded-md"
            height={208}
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
            options={options}
          />
        </div>
      </CardContent>
      <CardFooter className="block">
        <ul className="space-y-3.5 flex-1 items-center">
          {customers.map((customer) => (
            <li
              key={customer.country}
              className="flex justify-between items-center"
            >
              <div className="flex items-center space-x-3 flex-1">
                <Image
                  src={customer.image}
                  alt={customer.country}
                  width={32}
                  height={32}
                  className="size-8 rounded-full"
                />
                <div>
                  <h2 className="text-sm font-semibold text-card-foreground">
                    {customer.country}
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    {customer.totalCustomers} Customers
                  </p>
                </div>
              </div>
              <div className="flex-1 flex items-center">
                <Progress className="h-2 mr-4" value={+customer.progress} />
                <span className="text-sm font-medium">
                  {customer.progress}%
                </span>
              </div>
            </li>
          ))}
        </ul>
      </CardFooter>
    </Card>
  );
}
