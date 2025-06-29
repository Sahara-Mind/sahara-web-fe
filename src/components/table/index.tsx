"use client";

import React from "react";
import cn from "@/utils/class-names";
import { isEmpty } from "lodash";
import { Box, Empty, Loader, Table, Text, Title } from "rizzui";
import { flexRender, Column } from "@tanstack/react-table";
import { useScrollableSlider } from "@/hooks/use-scrollable-slider";
import { PiCaretDownFill, PiCaretUpFill } from "react-icons/pi";
import { pinningStyles } from "@/components/table/table-pinning.style";
import { MainTableProps } from "@/components/table/table-types";

// Utility
function getColumnOptions<TData>(column: Column<TData, unknown>) {
  const canResize = column.getCanResize?.() ?? false;
  const canPin = column.getCanPin?.() ?? false;
  const isPinned = column.getIsPinned?.() ?? false;
  const isLeftPinned = isPinned === "left";
  const isRightPinned = isPinned === "right";
  return { canResize, canPin, isPinned, isLeftPinned, isRightPinned };
}

export default function MainTable<TData extends Record<string, any>>({
  table,
  variant = "retro",
  classNames,
  isLoading = false,
  showLoadingText = false,
}: MainTableProps<TData>) {
  const { containerRef, isTopScrollable, isBottomScrollable } =
    useScrollableSlider();

  if (!table) return null;

  if (isLoading) {
    return (
      <div className="flex h-full min-h-[128px] flex-col items-center justify-center">
        <Loader variant="spinner" size="xl" />
        {showLoadingText && (
          <Title as="h6" className="-me-2 mt-4 font-medium text-gray-500">
            Loading...
          </Title>
        )}
      </div>
    );
  }

  const mainRows = table.getIsSomeRowsPinned()
    ? table.getCenterRows()
    : table.getRowModel().rows;

  return (
    <React.Fragment>
      <div className="relative">
        {/* Scrollable Area */}
        <Box
          ref={containerRef}
          className={cn(
            "custom-scrollbar w-full max-w-full overflow-x-auto scroll-smooth",
            classNames?.container,
          )}
        >
          <Table
            variant={variant}
            style={{ width: table.getTotalSize() }}
            className={cn(
              pinningStyles.baseStyle,
              pinningStyles.variants[variant],
              classNames?.tableClassName,
            )}
          >
            {/* Table Header */}
            <Table.Header
              className={cn("sticky top-0 z-10", classNames?.headerClassName)}
            >
              {table.getHeaderGroups().map((headerGroup) => (
                <Table.Row key={headerGroup.id}>
                  {headerGroup.headers.map((header) => {
                    const { isLeftPinned, isRightPinned } = getColumnOptions(
                      header.column,
                    );
                    return (
                      <Table.Head
                        key={header.id}
                        style={{
                          left: isLeftPinned
                            ? header.column.getStart("left")
                            : undefined,
                          right: isRightPinned
                            ? header.column.getAfter("right")
                            : undefined,
                          width: header.getSize(),
                        }}
                        className={cn(
                          isLeftPinned && isTopScrollable && "sticky-right",
                          isRightPinned && isBottomScrollable && "sticky-left",
                          "group",
                        )}
                      >
                        <Box className="flex items-start">
                          {header.isPlaceholder
                            ? null
                            : flexRender(
                                header.column.columnDef.header,
                                header.getContext(),
                              )}

                          {header.column.getCanSort() && (
                            <button
                              type="button"
                              onClick={header.column.getToggleSortingHandler()}
                              className="ms-1"
                              aria-label="Sort"
                            >
                              {{
                                asc: <PiCaretUpFill size={14} />,
                                desc: <PiCaretDownFill size={14} />,
                              }[header.column.getIsSorted() as string] ??
                                (header.column.columnDef.header !== "" && (
                                  <PiCaretDownFill size={14} />
                                ))}
                            </button>
                          )}
                        </Box>
                      </Table.Head>
                    );
                  })}
                </Table.Row>
              ))}
            </Table.Header>

            {/* Table Body */}
            <Table.Body className={classNames?.bodyClassName}>
              {mainRows.map((row) => (
                <Table.Row key={row.id} className={classNames?.rowClassName}>
                  {row.getVisibleCells().map((cell) => {
                    const { isLeftPinned, isRightPinned } = getColumnOptions(
                      cell.column,
                    );
                    return (
                      <Table.Cell
                        key={cell.id}
                        style={{
                          left: isLeftPinned
                            ? cell.column.getStart("left")
                            : undefined,
                          right: isRightPinned
                            ? cell.column.getAfter("right")
                            : undefined,
                          width: cell.column.getSize(),
                        }}
                        className={cn(
                          isLeftPinned && isTopScrollable && "sticky-right",
                          isRightPinned && isBottomScrollable && "sticky-left",
                          classNames?.cellClassName,
                        )}
                      >
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext(),
                        )}
                      </Table.Cell>
                    );
                  })}
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
        </Box>
      </div>
      <div className="absolute bottom-2 right-4 z-20 flex gap-2"></div>

      {/* Empty State */}
      {isEmpty(table.getRowModel().rows) && (
        <Box className="py-5 text-center">
          <Empty />
          <Text className="mt-3">No Data</Text>
        </Box>
      )}
    </React.Fragment>
  );
}
