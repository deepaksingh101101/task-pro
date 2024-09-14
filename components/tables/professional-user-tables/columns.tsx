'use client';

import { ColumnDef } from '@tanstack/react-table';
import { CellAction } from './cell-action'; 
import { ProfessionalManagement } from '@/constants/professional-management-data'; 
import { Checkbox } from '@/components/ui/checkbox';
import { Check, X, Mail, Phone, MapPin, Award } from 'lucide-react'; 
import { DataTable } from '@/components/ui/data-table';

// Function to generate a random color in hex format
const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

export const columns: ColumnDef<ProfessionalManagement>[] = [
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
    accessorKey: 'userID', 
    header: 'User ID',
    cell: ({ row }) => (
      <div className="flex justify-center">
        <span className="text-red-600 font-bold px-1" style={{ borderRadius: '50%' }}>
          {row.original.userId} 
        </span>
      </div>
    ),
  },
  // {
  //   accessorKey: 'username', 
  //   header: 'Username',
  // },
  {
    accessorKey: 'firstName',
    header: 'First Name',
    cell: ({ row }) => (
      <div className="flex items-center">
        <div
          className="flex items-center justify-center w-8 h-8 rounded-full mr-2"
          style={{ backgroundColor: getRandomColor(), color: 'white' }}
        >
          {row.original.firstName.charAt(0)}
        </div>
        <span>{row.original.firstName}</span>
      </div>
    ),
    enableSorting: true,
  },
  {
    accessorKey: 'lastName',
    header: 'Last Name',
  },
  {
    accessorKey: 'contact',
    header: 'Contact',
    cell: ({ row }) => (
      <div className="flex flex-col me-5">
        <div className="flex items-center mt-1">
          <Mail className="text-blue-500 mr-2" width={10} height={10} />
          <span className="text-[12px]">{row.original.email}</span>
        </div>
        <div className="flex items-center mt-2">
          <Phone className="text-green-500 mr-2" width={10} height={10} />
          <span className="text-[12px]">{row.original.phoneNumber}</span>
        </div>
      </div>
    ),
  },
  
  {
    accessorKey: 'address',
    header: 'Address',
    cell: ({ row }) => (
      <div className="flex items-center mt-1 me-4">
        <MapPin className="text-red-500 mr-2" width={16} height={16} />
        {row.original.society} 
      </div>
    ),
  },

  {
    accessorKey: 'city', 
    header: 'City',
   
  },
  {
    accessorKey: 'roleAssignmentDate',
    header: 'Role Assignment Date',
  },
  
  {
    accessorKey: 'verificationStatus',
    header: 'Verification Status',
    cell: ({ row }) => (
      <div
        style={{ borderRadius: '20px' }}
        className={`flex items-center px-2 py-1 ${
          row.original.verificationStatus === 'Verified' ? 'bg-yellow-300' :(row.original.verificationStatus === 'Pending') ?  'bg-orange-200' : 'bg-red-500'
        }`}
      >
        {(row.original.verificationStatus === 'Verified') ? (
          <Check width={16} height={16} className= "text-yellow-900 mr-2" />
        ) :(row.original.verificationStatus === 'Pending') ? <X width={16} height={16} className="text-orange-800 mr-2" />
        :( 
          <X width={16} height={16} className="text-orange-800 mr-2" />
        )}
        <span className="text-black bold">{row.original.verificationStatus}</span>
      </div>
    ),
  },
  {
    accessorKey: 'lastLogin', 
    header: 'Last Login',
   
  },
  {
    accessorKey: 'activityStatus',
    header: 'Activity Status',
    cell: ({ row }) => (
      <div
        style={{ borderRadius: '20px' }}
        className={`flex items-center px-2 py-1 ${
          row.original.accountStatus === 'Active' ? 'bg-orange-400' : 'bg-red-600'
        }`}
      >
        {row.original.accountStatus === 'Active' ? (
          <Check width={16} height={16} className="text-orange-800 mr-2" />
        ) : (
          <X width={16} height={16} className="text-red-900 mr-2" />
        )}
        <span className="text-black bold">{row.original.accountStatus}</span>
      </div>
    ),
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
    accessorKey: 'rewardsPoints', 
    header: 'Rewards Points',
    cell: ({ row }) => (
        <div className='flex items-center'>
            <Award className="text-yellow-500 mr-2" width={16} height={16} />
            <span>{row.original.rewardsPoints ?? 0}</span> 
        </div>
    )
  },
 
  {
    accessorKey: 'accountStatus',
    header: 'Account Status',
    cell: ({ row }) => (
      <div
        style={{ borderRadius: '20px' }}
        className={`flex items-center px-2 py-1 ${
          row.original.accountStatus === 'Active' ? 'bg-orange-400' : 'bg-red-600'
        }`}
      >
        {row.original.accountStatus === 'Active' ? (
          <Check width={16} height={16} className="text-orange-800 mr-2" />
        ) : (
          <X width={16} height={16} className="text-red-900 mr-2" />
        )}
        <span className="text-black bold">{row.original.accountStatus}</span>
      </div>
    ),
  },
  {
    accessorKey: 'paymentStatus',
    header: 'Payment Status',
    cell: ({ row }) => (
      <div
      style={{ borderRadius: '20px' }}
      className={`flex items-center px-2 py-1 ${
        row.original.paymentStatus === 'Not Elligible' ? 'bg-red-500' 
      : row.original.paymentStatus === 'Pending' ? 'bg-yellow-400' 
      : row.original.paymentStatus === 'Paid' ? 'bg-orange-400' 
      : 'bg-green-400'
      }`}
    >
     {
(row.original.paymentStatus === 'Not Elligible') ? (
  <X width={16} height={16} className="text-red-900 mr-2" />
) : (row.original.paymentStatus === 'Pending') ? (
  <Check width={16} height={16} className="text-yellow-800 mr-2" />
) : (row.original.paymentStatus === 'Paid') ? (
  <Check width={16} height={16} className="text-orange-800 mr-2" />
) : (
  <Check width={16} height={16} className="text-green-800 mr-2" />
)
}
      <span className="text-black bold">{row.original.paymentStatus}</span>
    </div>
    ),
  },

  // ... (other existing columns like subscription dates, employeeName, etc.)

  {
    id: 'actions',
    cell: ({ row }) => <CellAction data={row.original} />,
  },
];