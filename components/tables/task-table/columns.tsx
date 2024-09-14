import { ColumnDef } from '@tanstack/react-table';
import { TaskManagement } from '@/constants/task-management-data';
import { CellAction } from './cell-action';
import { Checkbox } from '@/components/ui/checkbox';
import { Check, X, Mail, Phone, MapPin, Award } from 'lucide-react';
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
    cell: ({ row }) => (
      <div className="flex justify-center">
        <span>₹{row.original.maximumCostAssigned}</span>
      </div>
    ),
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
    header: 'Activity Status',
    cell: ({ row }) => (
      <div
        style={{ borderRadius: '20px' }}
        className={`flex items-center px-2 py-1 ${
          row.original.Status === 'Approved' ? 'bg-orange-400' : 'bg-red-600'
        }`}
      >
        {row.original.Status === 'Progress' ? (
          <Check width={16} height={20} className="text-orange-800 mr-2" />
        ) : (
          <X width={16} height={20} className="text-red-900 mr-2" />
        )}
        <span className="text-black bold">{row.original.Status}</span>
      </div>
    ),
  },
  {
    accessorKey: 'address',
    header: 'Address',
    cell: ({ row }) => (
      <div className="flex items-center mt-1 me-4">
        <MapPin className="text-red-500 mr-2" width={16} height={16} />
        {row.original.address} 
      </div>
    ),
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
    accessorKey: 'taskStatus',
    header: 'Task Status',
    cell: ({ row }) => (
      <div
        style={{ borderRadius: '20px' }}
        className={`flex items-center px-2 py-1 ${
          row.original.taskStatus === 'Not Approved' ? 'bg-red-500' 
        : row.original.taskStatus === 'Listed' ? 'bg-yellow-400' 
        : row.original.taskStatus === 'Completed' ? 'bg-orange-400' 
        : 'bg-green-400'
        }`}
      >
       {
  (row.original.taskStatus === 'Not Approved') ? (
    <X width={16} height={16} className="text-red-900 mr-2" />
  ) : (row.original.taskStatus === 'Listed') ? (
    <Check width={16} height={16} className="text-yellow-800 mr-2" />
  ) : (row.original.taskStatus === 'Completed') ? (
    <Check width={16} height={16} className="text-orange-800 mr-2" />
  ) : (
    <Check width={16} height={16} className="text-green-800 mr-2" />
  )
}
        <span className="text-black bold">{row.original.taskStatus}</span>
      </div>
    ),
  },
  {
    accessorKey: 'rewards', 
    header: 'Rewards Points',
    cell: ({ row }) => (
        <div className='flex justify-center'>
            <Award className="text-yellow-500 mr-2" width={25} height={29} />
            <span>{row.original.rewards}</span> 
        </div>
       
    )
  },
  {
    accessorKey: 'feedback',
    header: 'Feedback',
    cell: ({ row }) => <span>{row.original.feedback}</span>,
  },

  {
    id: 'actions',
    cell: ({ row }) => <CellAction data={row.original} />,
  },
];
