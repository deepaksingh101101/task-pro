'use client';

import { ColumnDef } from '@tanstack/react-table';
import { CellAction } from './cell-action';
import { Checkbox } from '@/components/ui/checkbox';
import { Finance } from '@/constants/finanace-data';

export const columns: ColumnDef<Finance>[] = [
  {
    id: 'select',
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'serialNumber',
    header: 'S. No.',
    cell: ({ row }) => <span>{row.index + 1}</span>, 
  },
  {
    accessorKey: 'userId',
    header: 'User ID',
  },
  {
    accessorKey: 'amount',
    header: 'Amount',
    cell: ({ row }) => <span>{row.original.amount}</span>, 
  },
  {
    accessorKey: 'date',
    header: 'Date',
    cell: ({ row }) => <span>{new Date(row.original.date).toLocaleDateString()}</span>, // Format date
  },
  {
    accessorKey: 'time',
    header: 'Time',
    cell: ({ row }) => <span>{new Date(row.original.time).toLocaleTimeString()}</span>, // Format time
  },
  {
    accessorKey: 'method',
    header: 'Method',
  },
  {
    accessorKey: 'taskId',
    header: 'Task ID',
  },
  {
    accessorKey: 'userType',
    header: 'User Type',
  },
  {
    id: 'actions',
    cell: ({ row }) => <CellAction data={row.original} />,
  },
];
