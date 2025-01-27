import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useGetDashboardDataQuery } from "@/redux/features/dashboard/dashboardApi";
import { ListOrdered, WalletMinimal } from "lucide-react";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

import { Bar, BarChart, XAxis, YAxis } from "recharts";
import LoadingSpinner from "@/components/Loader/LoadingSpinner";

const colors = [
  "#FF5733", // Vibrant Red
  "#33FF57", // Bright Green
  "#3357FF", // Electric Blue
  "#FF33A1", // Hot Pink
  "#FFD133", // Sunny Yellow
];

const AdminDashboard = () => {
  const { data, isLoading, isFetching } = useGetDashboardDataQuery(undefined);

  const mostSoldItem = data?.data?.mostSoldItem || [];
  const orderSummary = data?.data?.orderSummary || {};

  const chartData = mostSoldItem.map((item: any, i: number) => {
    return {
      name: item.name,
      sold: item.soldQuantity,
      fill: colors[i],
    };
  });

  const chartConfig = chartData.reduce(
    (config: any, item: any) => {
      const key = item.name;

      config[key] = {
        label: item.name,
        color: item.fill,
      };

      return config;
    },
    {
      sold: { label: "Sold" },
    }
  );

  if (isLoading || isFetching) {
    return <LoadingSpinner />;
  }

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 lg:gap-6">
        {/* sale amount card */}
        <Card>
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle className="text-lg">Total Sales Amount</CardTitle>
              <WalletMinimal size={18} color="#756c6c" />
            </div>
          </CardHeader>
          <CardContent>
            <h3 className="text-3xl font-semibold mb-1">
              {orderSummary?.totalRevenue || "No data available"}$
            </h3>
          </CardContent>
        </Card>
        {/* total order card */}
        <Card>
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle className="text-lg">Total Orders</CardTitle>
              <ListOrdered size={18} color="#756c6c" />
            </div>
          </CardHeader>
          <CardContent>
            <h3 className="text-3xl font-semibold mb-1 text-blue-500">
              {orderSummary?.totalOrders || "No data available"}
            </h3>
          </CardContent>
        </Card>
        {/* total shipped orders */}
        <Card>
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle className="text-lg">Total Shipped Orders</CardTitle>
              <ListOrdered size={18} color="#756c6c" />
            </div>
          </CardHeader>
          <CardContent>
            <h3 className="text-3xl font-semibold mb-1 text-green-500">
              {orderSummary?.shippedOrders || "No data available"}
            </h3>
          </CardContent>
        </Card>
        {/* total pending orders */}
        <Card>
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle className="text-lg">Total Pending Orders</CardTitle>
              <ListOrdered size={18} color="#756c6c" />
            </div>
          </CardHeader>
          <CardContent>
            <h3 className="text-3xl font-semibold mb-1 text-amber-500">
              {orderSummary?.pendingOrders || "No data available"}
            </h3>
          </CardContent>
        </Card>
      </div>
      <div className="mt-6 lg:mt-8 w-full">
        {/* most sold products chart */}
        <div className="w-full lg:w-1/2">
          <Card>
            <CardTitle className="text-lg pl-6 pt-6">
              Most Sold Products
            </CardTitle>
            <CardContent>
              <ChartContainer config={chartConfig}>
                <BarChart
                  accessibilityLayer
                  data={chartData}
                  layout="vertical"
                  margin={{
                    left: 0,
                  }}
                >
                  <YAxis
                    dataKey="name"
                    type="category"
                    tickLine={false}
                    tickMargin={0}
                    axisLine={false}
                    tickFormatter={(value) =>
                      chartConfig[value as keyof typeof chartConfig]?.label
                    }
                  />
                  <XAxis dataKey="sold" type="number" hide />
                  <ChartTooltip
                    cursor={false}
                    content={<ChartTooltipContent hideLabel />}
                  />
                  <Bar
                    dataKey="sold"
                    layout="vertical"
                    radius={5}
                    barSize={50}
                  />
                </BarChart>
              </ChartContainer>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
