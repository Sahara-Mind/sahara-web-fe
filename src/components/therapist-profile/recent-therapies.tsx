"use client";

import WidgetCard from "../cards/widget-card";
import {
  useReactTable,
  getCoreRowModel,
  ColumnDef,
} from "@tanstack/react-table";
import MainTable from "@/app/shared/table";
import cn from "@/utils/class-names";

import {ClientDataType, TherapistDataType} from "@/types"


interface RecentTherapiesProps {
  className?: string;
  therapist: TherapistDataType;
}

// Table columns definition
const columns: ColumnDef<ClientDataType>[] = [
  {
    accessorKey: "ClientID",
    header: "Client ID",
    cell: (info) => info.getValue(),
  },
  {
    accessorKey: "clientName",
    header: "Client Name",
    cell: (info) => info.getValue(),
  },
  {
    accessorKey: "sessionDate",
    header: "Session Date",
    cell: (info) => info.getValue(),
  },
  {
    accessorKey: "therapyType",
    header: "Therapy Type",
    cell: (info) => info.getValue(),
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: (info) => info.getValue(),
  },
];

export default function RecentTherapies({
  className,
  therapist,
}: RecentTherapiesProps) {
  
  // Pull directly from therapist.sessions (no sessionData needed)
  const therapies = therapist.sessions || [];

  const table = useReactTable<ClientDataType>({
    data: therapies,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <WidgetCard title="Recent Therapies" className={cn(className)}>
      {therapies.length === 0 ? (
        <p className="p-6 text-sm text-gray-500">
          No recent therapies for {therapist.name}.
        </p>
      ) : (
        <div className="p-6">
          <MainTable table={table} />
        </div>
      )}
    </WidgetCard>
  );
}
