import React from "react";
import { Card } from "../ui/card";

const Infocard = ({
  title,
  count,
  icon,
}: {
  title: string;
  count: number;
  icon: React.ReactElement;
}) => {
  return (
    <Card className="p-4 flex justify-between items-center flex-1">
      <div>
        <span className="text-sm uppercase tracking-widest">{title}</span>
        <h2 className="font-bold text-3xl">{count}</h2>
      </div>
      <span className="rounded-full p-4 bg-gray-100 text-3xl">{icon}</span>
    </Card>
  );
};

export default Infocard;
