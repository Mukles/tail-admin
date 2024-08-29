import { BarChartComponent } from "@/components/bar-charts";
import Invoice from "@/components/invoice";
import { Component } from "@/components/monthly-target-chart";
import { Statistics } from "@/components/statistics";
import { Demographic } from "@/layouts/components/demographic";
import InfoCard from "@/layouts/components/info-card";
import { infoData } from "@/layouts/components/info-card/data";

export default function Home() {
  return (
    <section>
      <div className="grid grid-cols-12 gap-6">
        <div className="md:col-span-7 col-span-12">
          <div className="grid gap-6 sm:grid-cols-2">
            {infoData.map((item, index) => {
              return (
                <InfoCard
                  key={index}
                  amount={item.value}
                  title={item.title}
                  ratings={item.ratings}
                  varients={(index + 1) % 2 === 0 ? "destructive" : "success"}
                  icon={<item.icon className="size-5" />}
                />
              );
            })}

            <div className="col-span-2">
              <BarChartComponent />
            </div>
          </div>
        </div>
        <div className="md:col-span-5 col-span-12">
          {/* <MonthlyTargetChart /> */}
          <Component />
        </div>
        <div className="col-span-12">
          <Statistics />
        </div>

        <div className="col-span-12 grid grid-cols-12 gap-6">
          <div className="col-span-4">
            <Demographic />
          </div>
          <div className="col-span-8">
            <Invoice />
          </div>
        </div>
      </div>
    </section>
  );
}
