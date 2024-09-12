import { ColumnDef } from '@tanstack/react-table';
import { TaskHistory } from '@/constants/task-history-data';
import { CellAction } from './cell-action';
import { Checkbox } from '@/components/ui/checkbox';
import { Check, X, Mail, Phone, MapPin, Award } from 'lucide-react';
export const columns: ColumnDef<TaskHistory>[] = [
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
    accessorKey: 'taskId',
    header: 'Task ID',
    cell: ({ row }) => <span className="text-red-600 font-bold px-1" style={{ borderRadius: '50%' }}>{row.original.taskId}</span>,
  },
  {
    accessorKey: 'title',
    header: 'Title',
    cell: ({ row }) => <span>{row.original.title}</span>,
  },
  {
    accessorKey: 'taskName',
    header: 'Task Name',
    cell: ({ row }) => <span>{row.original.taskName}</span>,
  },
  {
    accessorKey: 'taskType',
    header: 'Task Type',
    cell: ({ row }) => <span>{row.original.taskType}</span>,
  },
  
  {
    accessorKey: 'assignedTo',
    header: 'Assigned To',
    cell: ({ row }) => <span>{row.original.assignedTo}</span>,
  },
  {
    accessorKey: 'assignedBy',
    header: 'Assigned By',
    cell: ({ row }) => <span>{row.original.assignedBy}</span>,
  },

  {
    accessorKey: 'dueDate',
    header: 'Due Date',
    cell: ({ row }) => (
      <span>{row.original.dueDate ? new Date(row.original.dueDate).toLocaleDateString() : 'N/A'}</span>
    ),
  },

  
  // {
  //   id: 'actions',
  //   cell: ({ row }) => <CellAction data={row.original} />,
  // },
];
