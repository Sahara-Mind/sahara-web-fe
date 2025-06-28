import { Box } from "rizzui/box";
import { routes } from "@/config/routes";
import { DemoData } from "@/data/demo-data";
import { metaObject } from "@/config/site.config";
import TableLayout from "@/app/shared/therapist-table/table-layout";
import RetroTable from "@/app/shared/therapist-table/retro-table";
import WidgetCard from "@/components/cards/widget-card";

export const metadata = {
  ...metaObject("Basic Table"),
};

const pageHeader = {
  title: "Therapists List",
  breadcrumb: [
    {
      href: routes.therapist.therapistList,
      name: "Dashboard",
    },
    {
      name: "Therapists",
    },
  ],
};

export default function TherapistListPage() {
  return (
    <TableLayout
      title={pageHeader.title}
      breadcrumb={pageHeader.breadcrumb}
      data={DemoData}
      fileName="therapist_data"
      header="ID, Name, Specialization, Email, Phone, Status, Actions"
    >
      <Box className="space-y-8">
        <WidgetCard title="Therapists" className="space-y-4">
          <RetroTable />
        </WidgetCard>
      </Box>
    </TableLayout>
  );
}
