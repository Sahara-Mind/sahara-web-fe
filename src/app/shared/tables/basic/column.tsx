'use client';

import { getStatusBadge } from '@core/components/table-utils/get-status-badge';
import AvatarCard from '@core/ui/avatar-card';
import DateCell from '@core/ui/date-cell';
import { toCurrency } from '@core/utils/to-currency';
import { createColumnHelper } from '@tanstack/react-table';
import TableRowActionGroup from '@core/components/table-utils/table-row-action-group';

const columnHelper = createColumnHelper<any>();

export const basicColumns = [
  columnHelper.display({
    id: 'ID',
    size: 120,
    header: 'ID',
    cell: ({ row }) => <>#{row.original.id}</>,
  }),
  columnHelper.accessor('name', {
    id: 'name',
    size: 320,
    header: 'Therapist',
    enableSorting: false,
    cell: ({ row }) => (
      <AvatarCard
        src={row.original.avatar}
        name={row.original.name}
        description={row.original.email}
      />
    ),
  }),
  columnHelper.accessor('price', {
    id: 'price',
    size: 150,
    header: 'Price',
    cell: ({ row }) => <>{toCurrency(row.original.price)}</>,
  }),
  columnHelper.accessor('createdAt', {
    id: 'createdAt',
    size: 180,
    header: 'Created',
    cell: ({ row }) => <DateCell date={new Date(row.original.createdAt)} />,
  }),
  columnHelper.accessor('updatedAt', {
    id: 'updatedAt',
    size: 180,
    header: 'Modified',
    cell: ({ row }) => <DateCell date={new Date(row.original.createdAt)} />,
  }),
  columnHelper.display({
    id: 'status',
    size: 150,
    header: 'Status',
    cell: ({ row }) => getStatusBadge(row.original.status),
  }),
  columnHelper.display({
    id: 'actions',
    size: 150,
    cell: ({
      row,
      table: {
        options: { meta },
      },
    }) => (
      <TableRowActionGroup
        onDelete={() => (meta as any)?.handleDeleteRow?.(row.original)}
      />
    ),
  }),
];
