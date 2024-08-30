import Invoice from "@/components/invoice";
import { Statistics } from "@/components/statistics";
import { Demographic } from "@/layouts/components/demographic";
import InfoCard from "@/layouts/components/info-card";
import { infoData } from "@/layouts/components/info-card/data";
import { MonthlySales } from "@/layouts/components/monthly-sales";
import MonthlyTarget from "@/layouts/components/monthly-target";

export default function Home() {
  return (
    <section className="space-y-6">
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
              <MonthlySales />
            </div>
          </div>
        </div>
        <div className="md:col-span-5 col-span-12 h-full">
          <MonthlyTarget />
        </div>
      </div>
      <Statistics />
      <div className="grid grid-cols-12 gap-6">
        <div className="lg:col-span-4 col-span-12 h-full">
          <Demographic />
        </div>
        <div className="lg:col-span-8 col-span-12">
          <Invoice />
        </div>
      </div>
    </section>
  );
}
