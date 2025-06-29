"use client";

import Table from "@/app/shared/table";
import { DemoData } from "@/data/demo-data";
import { useTanStackTable } from "@/app/shared/table/use-TanStack-Table";
import { therapistColumns } from "@/components/therapist-list/therapist-table";
import { PiMagnifyingGlassBold } from "react-icons/pi";
import { Flex, Input, TableVariantProps, Title } from "rizzui";
import TablePagination from "@/app/shared/table/pagination";
import React from "react";

export type OrdersDataType = (typeof DemoData)[number];

export default function RetroTable({
  searchAble = false,
  variant = "retro",
  tableHeader = false,
  pagination = false,
}: {
  searchAble?: boolean;
  variant?: TableVariantProps;
  tableHeader?: boolean;
  pagination?: boolean;
}) {
  const { table, setData } = useTanStackTable({
    tableData: DemoData,
    columnConfig: therapistColumns,
    options: {
      initialState: {
        pagination: {
          pageIndex: 0,
          pageSize: 7, // Change this to show more data per page
        },
      },
      meta: {
        handleDeleteRow: (row: OrdersDataType) => {
          setData((prev) => prev.filter((r) => r.id !== row.id));
        },
      },
      enableColumnResizing: false,
    },
  });

  return (
    <React.Fragment>
      {tableHeader && (
        <Flex
          direction="col"
          justify="between"
          className="mb-4 xs:flex-row xs:items-center"
        >
          <Title as="h3" className="text-base font-semibold sm:text-lg">
            Search Table
          </Title>
          {searchAble && (
            <Input
              type="search"
              clearable={true}
              placeholder="Search order..."
              onClear={() => table.setGlobalFilter("")}
              value={table.getState().globalFilter ?? ""}
              prefix={<PiMagnifyingGlassBold className="size-4" />}
              onChange={(e) => table.setGlobalFilter(e.target.value)}
              className="w-full xs:max-w-60"
            />
          )}
        </Flex>
      )}
      <Table
        table={table}
        variant={variant}
        classNames={{ rowClassName: "last:!border-b-0" }}
      />
      {pagination && <TablePagination table={table} className="mt-4" />}
    </React.Fragment>
  );
}
