import { ColumnDef } from '@tanstack/react-table';
import { TaskManagement } from '@/constants/task-management';
import { CellAction } from './cell-action';
import { Checkbox } from '@/components/ui/checkbox';

export const columns: ColumnDef<TaskManagement>[] = [
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
    accessorKey: 'description',
    header: 'Description',
    cell: ({ row }) => <span>{row.original.description}</span>,
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
    accessorKey: 'assignedDate',
    header: 'Assigned Date',
    cell: ({ row }) => (
      <span>{row.original.assignedDate ? new Date(row.original.assignedDate).toLocaleDateString() : 'N/A'}</span>
    ),
  },
  {
    accessorKey: 'maximumCostAssigned',
    header: 'Maximum Cost Assigned',
    cell: ({ row }) => <span>₹{row.original.maximumCostAssigned}</span>,
  },
  {
    accessorKey: 'biddingTime',
    header: 'Bidding Time',
    cell: ({ row }) => {
      const { biddingTime } = row.original;
      const startTime = biddingTime?.startTime ? new Date(biddingTime.startTime).toLocaleString() : 'N/A';
      const endTime = biddingTime?.endTime ? new Date(biddingTime.endTime).toLocaleString() : 'N/A';
      
      return (
        <div>
          <div><strong>Start:</strong> {startTime}</div>
          <div><strong>End:</strong> {endTime}</div>
        </div>
      );
    },
  },
  {
    accessorKey: 'dueDate',
    header: 'Due Date',
    cell: ({ row }) => (
      <span>{row.original.dueDate ? new Date(row.original.dueDate).toLocaleDateString() : 'N/A'}</span>
    ),
  },
  {
    accessorKey: 'Status',
    header: 'Status',
    cell: ({ row }) => (
      <span>
        {row.original.Status}
      </span>
    ),
  },
  {
    accessorKey: 'address',
    header: 'Address',
    cell: ({ row }) => <span>{row.original.address}</span>,
  },
  {
    accessorKey: 'city',
    header: 'City',
    cell: ({ row }) => <span>{row.original.city}</span>,
  },
  {
    accessorKey: 'pincode',
    header: 'Pincode',
    cell: ({ row }) => <span>{row.original.pincode}</span>,
  },
  {
    accessorKey: 'country',
    header: 'Country',
    cell: ({ row }) => <span>{row.original.country}</span>,
  },
  {
    accessorKey: 'rewards',
    header: 'Rewards',
    cell: ({ row }) => <span>₹{row.original.rewards}</span>,
  },
  {
    accessorKey: 'feedback',
    header: 'Feedback',
    cell: ({ row }) => <span>{row.original.feedback}</span>,
  },
  // {
  //   id: 'actions',
  //   cell: ({ row }) => <CellAction data={row.original} />,
  // },
];
