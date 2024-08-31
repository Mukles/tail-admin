import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import * as Icons from "@/icons";
import Image from "next/image";
import Link from "next/link";
import { invoices } from "./data";

const variantStatus = {
  canceled: "destructive",
  pending: "warning",
  delivered: "success",
};

export default function Invoice() {
  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-center">
          <h3 className="text-title text-lg font-semibold">Recent Invoices</h3>
          <div className="flex items-center space-x-3">
            <Button
              className="space-x-3 items-center justify-between bg-transparent rounded-md text-sm font-medium"
              variant={"outline"}
            >
              <Icons.FilterIcon className="w-5 h-5" />
              <span>Filter</span>
            </Button>
            <Button
              asChild
              className="rounded-md bg-transparent text-sm font-medium"
              variant={"outline"}
            >
              <Link href={""}>See all</Link>
            </Button>
          </div>
        </div>
      </CardHeader>

      <CardContent className="pb-1">
        <Table className="border-t border-t-border">
          <TableHeader>
            <TableRow>
              <TableHead className="min-w-[200px]">Products</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Price</TableHead>
              <TableHead className="text-left w-[96px]">Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {invoices.map((invoice) => {
              const {
                id,
                status,
                productName,
                varients,
                image,
                category,
                amount,
              } = invoice;
              // @ts-ignore
              const variant = variantStatus[status];

              return (
                <TableRow key={id}>
                  <TableCell className="font-medium">
                    <div className="flex items-center space-x-3">
                      <Image src={image} width={50} height={50} alt="mac" />
                      <div className="flex-1">
                        <p className="font-medium mb-0.5 text-card-foreground">
                          {productName}
                        </p>
                        <p className="text-secondary-foreground text-xs">
                          {varients} varients
                        </p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="text-secondary-foreground">
                    {category}
                  </TableCell>
                  <TableCell className="text-secondary-foreground">
                    {amount}
                  </TableCell>
                  <TableCell className="text-left">
                    <Badge variant={variant}>{status}</Badge>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
