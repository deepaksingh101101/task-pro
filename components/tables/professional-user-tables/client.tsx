'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { DataTable } from '@/components/ui/data-table';
import { Heading } from '@/components/ui/heading';
import { Separator } from '@/components/ui/separator';
import { UserManagement, userManagementData } from '@/constants/user-management-data';

import { Plus } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { columns } from './columns';

export const  ProfessionalUserClient: React.FC = () => {
  const router = useRouter();
  const initialData: UserManagement[] = userManagementData;
  const [data, setData] = useState<UserManagement[]>(initialData);

  const filters = [
    {
      label: 'Account Status',
      subOptions: ['Active', 'Inactive'],
    },
    {
      label: 'Verification Status',
      subOptions: ['Verified', 'Pending'],
    },
    {
      label: 'Activity Status',
      subOptions: ['Active', 'Inactive'],
    },
    {
      label: 'City',
      subOptions: ['Delhi', 'Jharkhand' , 'Karnatka'],
    },
  ];

  const handleSearch = (searchValue: string) => {
    const filteredData = initialData.filter(item =>
      item.firstName.toLowerCase().includes(searchValue.toLowerCase())
    );
    setData(filteredData);
  };

  // const handleSort = (sortBy: string, sortOrder: 'asc' | 'desc') => {
  //   // Example: Sorting by first name
  //   const sortedData = [...data].sort((a, b) => {
  //     if (sortOrder === 'asc') {
  //       return a.subscriptionType.localeCompare(b.subscriptionType);
  //     } else {
  //       return b.subscriptionType.localeCompare(a.subscriptionType);
  //     }
  //   });
  //   setData(sortedData);
  // };

  return (
    <>
      <div className="flex items-start justify-between">
        <Heading
          title={`Users (${data.length})`}
          description="Manage Professionals (Client side table functionalities.)"
        />
        <Button
          className="text-xs md:text-sm"
          onClick={() => router.push(`/profile`)}
        >
          <Plus className="mr-2 h-4 w-4" /> Add New
        </Button>
      </div>
      <Separator />
      <DataTable
        searchKey="firstName"
        columns={columns}
        data={data}
        onSearch={handleSearch} 
        filters={filters}
  
      />
      
    </>
  );
};
