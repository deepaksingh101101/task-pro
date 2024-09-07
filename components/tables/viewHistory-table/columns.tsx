'use client';

import { ColumnDef } from '@tanstack/react-table';
import { CellAction } from './cell-action';
import { Checkbox } from '@/components/ui/checkbox';
import { ViewHistory} from '@/constants/viewHistory-data';

export const columns: ColumnDef<ViewHistory>[] = [
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
   
    id: 'sno',
    header: 'S.No.',
    cell: ({ row, table }) => row.index + 1,
  },
  {
   
    accessorKey: 'amount',
    header: 'Amount',
    cell: ({ row }) => <span>₹{row.original.amount}</span>,
  },
  {
   
    accessorKey: 'type',
    header: 'Type',
    cell: ({ row }) => <span>{row.original.type}</span>, 
  },
  {
   
    accessorKey: 'date',
    header: 'Date',
    cell: ({ row }) => <span>{new Date(row.original.date).toLocaleDateString()}</span>, 
  },
  {
   
    accessorKey: 'time',
    header: 'Time',
    cell: ({ row }) => <span>{(row.original.time)}</span>, 
  },
  {
  
    accessorKey: 'paymentMethod',
    header: 'Payment Method',
    cell: ({ row }) => <span>{row.original.paymentMethod}</span>, 
  },
//   {
//     id: 'actions',
//     cell: ({ row }) => <CellAction data={row.original} />,
//   },
];
