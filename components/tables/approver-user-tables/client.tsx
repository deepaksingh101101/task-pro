'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { DataTable } from '@/components/ui/data-table';
import { Heading } from '@/components/ui/heading';
import { Separator } from '@/components/ui/separator';

import { Plus } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { columns } from './columns';

import { ApproverManagement, ApproverManagementData } from '@/constants/approver-management-data';

export const ApproverUserClient: React.FC = () => {
  const router = useRouter();
  const initialData: ApproverManagement[] = ApproverManagementData;
  const [data, setData] = useState<ApproverManagement[]>(initialData);

  const filters = [
    {
      label: 'Account Status',
      subOptions: ['Active', 'Inactive'],
    },
    {
      label: 'Verification Status',
      subOptions: ['Verified', 'Pending', 'Rejected'],
    },
    {
      label: 'Activity Status',
      subOptions: ['Active', 'Inactive'],
    },
  ];

  const handleSearch = (searchValue: string) => {
    const filteredData = initialData.filter(item =>
      item.firstName.toLowerCase().includes(searchValue.toLowerCase())
    );
    setData(filteredData);
  };

 
  return (
    <>
      <div className="flex items-start justify-between">
        <Heading
          title={`Users (${data.length})`}
          description="Manage Approvers (Client side table functionalities.)"
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
