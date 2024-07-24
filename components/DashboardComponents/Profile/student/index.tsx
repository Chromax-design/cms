import { Card } from "@/components/ui/card";
import StudentProfileCard from "./StudentProfileCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { StudentTabList } from "@/data/dashboard";
import { StudentTabListTypes } from "@/data/dashboard/types";
import ContactTab from "./ContactTab";
import ParentTab from "./ParentTab";
import PersonalTab from "./PersonalTab";
import HealthTab from "./HealthTab";
import OthersTab from "./OthersTab";

const StudentTabcontent: Record<
  StudentTabListTypes["title"],
  React.ComponentType
> = {
  personal: PersonalTab,
  contact: ContactTab,
  parents: ParentTab,
  health: HealthTab,
  others: OthersTab
};

const StudentProfile = () => {
  return (
    <div className="grid grid-cols-12 gap-4 items-start">
      <StudentProfileCard />
      <Card className="col-span-12 lg:col-span-7 p-3">
        <Tabs defaultValue="personal" className="w-full">
          <TabsList className="w-full flex">
            {StudentTabList.map((tab) => (
              <TabsTrigger
                value={tab.title}
                className="w-full capitalize"
                key={tab.id}
              >
                {tab.title}
              </TabsTrigger>
            ))}
          </TabsList>
          {StudentTabList.map((tab) => {
            const Component = StudentTabcontent[tab.title];
            return (
              <TabsContent value={tab.title} key={tab.id}>
                <Component />
              </TabsContent>
            );
          })}
        </Tabs>
      </Card>
    </div>
  );
};

export default StudentProfile;
