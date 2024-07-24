import {
  Card,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const PageTitle = ({ title }: { title: string }) => {
  return (
    <Card>
      <CardHeader className="!p-4">
        <CardTitle className="!text-lg !font-medium">{title}</CardTitle>
      </CardHeader>
    </Card>
  );
};

export default PageTitle;
