import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import Timer from "./Timer";

const PageTitle = ({ title }: { title: string }) => {
  return (
    <Card>
      <CardHeader className="!p-4 !flex gap-2 sm:flex-row sm:justify-between sm:items-center">
        <CardTitle className="!text-lg !font-medium">{title}</CardTitle>
        <Timer />
      </CardHeader>
    </Card>
  );
};

export default PageTitle;
