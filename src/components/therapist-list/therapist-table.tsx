"use client";

import { useState } from "react";
import { createColumnHelper } from "@tanstack/react-table";
import Table from "@/app/shared/table";
import TablePagination from "@/app/shared/table/pagination";
import TableRowActionGroup from "@/app/shared/table-utils/table-row-action-group";
import AvatarCard from "@/components/ui/avatar-card";
import { getStatusBadge } from "@/app/shared/table-utils/get-status-badge";
import WidgetCard from "@/components/cards/widget-card";
import cn from "@/utils/class-names";
import { Input } from "rizzui";
import { PiMagnifyingGlassBold } from "react-icons/pi";
import { DemoData } from "@/data/demo-data";
import { useTanStackTable } from "@/app/shared/table/use-TanStack-Table";

import {TherapistDataType} from "@/types"

declare module "@tanstack/react-table" {
  interface TableMeta<TData extends unknown> {
    handleDeleteRow: (row: TData) => void;
  }
}

// 2. Table columns
const columnHelper = createColumnHelper<TherapistDataType>();

export const therapistColumns = [
  columnHelper.display({
    id: "ID",
    size: 80,
    header: "ID",
    cell: ({ row }) => <>#{row.original.id}</>,
  }),
  columnHelper.accessor("name", {
    id: "name",
    size: 220,
    header: "Name",
    enableSorting: false,
    cell: ({ row }) => (
      <AvatarCard
        src={row.original.avatar}
        name={row.original.name}
        description={row.original.email}
      />
    ),
  }),
  columnHelper.accessor("specialization", {
    id: "specialization",
    size: 180,
    header: "Specialization",
    cell: ({ row }) => <>{row.original.specialization}</>,
  }),
  columnHelper.accessor("email", {
    id: "email",
    size: 180,
    header: "Email",
    cell: ({ row }) => <>{row.original.email}</>,
  }),
  columnHelper.accessor("phone", {
    id: "phone",
    size: 140,
    header: "Phone No.",
    cell: ({ row }) => <>{row.original.phone}</>,
  }),
  columnHelper.display({
    id: "status",
    size: 120,
    header: "Status",
    cell: ({ row }) => getStatusBadge(row.original.status),
  }),
  columnHelper.display({
    id: "actions",
    size: 120,
    cell: ({
      row,
      table: {
        options: { meta },
      },
    }) => (
      <TableRowActionGroup
        onDelete={() => meta?.handleDeleteRow?.(row.original)}
      />
    ),
  }),
];

// 4. Main TherapistTable component
export default function TherapistTable({ className }: { className?: string }) {
  const [data, setData] = useState<TherapistDataType[]>(DemoData);

  const [search, setSearch] = useState("");
  const filteredData = data.filter((t) =>
    t.name.toLowerCase().includes(search.toLowerCase())
  );

  // Replace with your TanStack Table hook if needed
  const { table } = useTanStackTable<TherapistDataType>({
    tableData: filteredData,
    columnConfig: therapistColumns,
    options: {
      initialState: {
        pagination: {
          pageIndex: 0,
          pageSize: 7,
        },
      },
      meta: {
        handleDeleteRow: (row: TherapistDataType) => {
          setData((prev) => prev.filter((r) => r.id !== row.id));
        },
      },
      enableColumnResizing: false,
    },
  });

  return (
    <WidgetCard
      title="Therapists"
      className={cn("p-0 lg:p-0", className)}
      headerClassName="px-5 pt-5 lg:px-7 lg:pt-7 mb-6"
      action={
        <Input
          type="search"
          clearable={true}
          inputClassName="h-[36px]"
          placeholder="Search by therapist name..."
          onClear={() => setSearch("")}
          value={search}
          prefix={<PiMagnifyingGlassBold className="size-4" />}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full @3xl:order-3 @3xl:ms-auto @3xl:max-w-72"
        />
      }
    >
      <Table
        table={table}
        variant="retro"
        classNames={{
          cellClassName: "first:ps-6",
          headerCellClassName: "first:ps-6",
        }}
      />
      <TablePagination table={table} className="p-4" />
    </WidgetCard>
  );
}
