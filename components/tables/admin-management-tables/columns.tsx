'use client';

import React from 'react';
import { ColumnDef } from '@tanstack/react-table';
import { Checkbox } from '@/components/ui/checkbox';
import { AdminManagement } from '@/constants/admin-management-data'; 
import { Mail } from 'lucide-react'; 
import { CellAction } from './cell-action'; 

// Function to generate a random color in hex format
const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

export const columns: ColumnDef<AdminManagement>[] = [
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
    enableHiding: false
  },
  {
    accessorKey: 'sno', 
    header: 'Admin ID', 
  },
  {
    accessorKey: 'fullName', 
    header: 'Name',
    cell: ({ row }) => (
      <div className="flex items-center">
        <div 
          className="flex items-center justify-center w-8 h-8 rounded-full mr-2"
          style={{ backgroundColor: getRandomColor(), color: 'white' }}
        >
          {row.original.firstName?.charAt(0) || ''} 
        </div>
        <span>{row.original.firstName} {row.original.lastName}</span> 
      </div>
    ),
    enableSorting: true,
  },
  {
    accessorKey: 'contactInformation.email',
    header: 'Email',
    cell: ({ row }) => (
        <div className="flex items-center mt-1">
          <Mail className="text-blue-500 mr-2" width={10} height={10} />
          <span className="">{row.original.contactInformation.email}</span>
        </div>
    )
  },
  {
    accessorKey: 'role',
    header: 'Role',
  },
  {
    accessorKey: 'department', 
    header: 'Department',
  },
  {
    accessorKey: 'status', 
    header: 'Status',
  },
  {
    accessorKey: 'lastLogin', 
    header: 'Last Login',
    
  },
  {
    accessorKey: 'permissions',
    header: 'Permissions',
    
  },

  {
    id: 'actions',
    cell: ({ row }) => <CellAction data={row.original} />,
  }
];