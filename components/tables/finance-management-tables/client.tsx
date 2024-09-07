
'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { DataTable } from '@/components/ui/data-table';
import { Heading } from '@/components/ui/heading';
import { Separator } from '@/components/ui/separator';
import { BidUser, BidData } from '@/constants/bid-data'; // Import updated BidUser and BidData
import { Plus } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { columns } from './columns';
import { Finance, FinanceData } from '@/constants/finanace-data'; // Import BidUser and BidData
export const FinanceManagementClient: React.FC = () => {
  const router = useRouter();

  const [data, setData] = useState<Finance[]>(FinanceData);
  const handleSearch = (searchValue: string) => {
    const filteredData = FinanceData.filter(item =>
      item.username.toLowerCase().includes(searchValue.toLowerCase()) ||
      item.description.toLowerCase().includes(searchValue.toLowerCase()) ||
      item.userId.toLowerCase().includes(searchValue.toLowerCase()) ||
      item.method.toLowerCase().includes(searchValue.toLowerCase()) ||
      item.taskId.toLowerCase().includes(searchValue.toLowerCase()) ||
      item.userType.toLowerCase().includes(searchValue.toLowerCase())
    );
    setData(filteredData);
  };

  const filters = [
   
    {
      label: 'Payment Method',
      subOptions: ['PhonePe', 'Google Pay', 'Paytm'], // Added new filter for payment methods
    },
    {
      label: 'User Type',
      subOptions: ['Professional', 'Approver'], // Added new filter for user types
    },
  ];

  return (
    <>
      <div className="flex items-start justify-between">
        <Heading
          title={`Finance Table (${data.length})`}
          description="Manage Finance with client-side table functionalities."
        />
        {/* <Button
          className="text-xs md:text-sm"
          onClick={() => router.push(`/add-bid`)} // Adjust the route to add a new bid
        >
          <Plus className="mr-2 h-4 w-4" /> Add New Bid
        </Button> */}
      </div>
      {/* <Separator /> */}
      <DataTable
        searchKey="usertype" // Adjust the search key to reflect bidding data
        columns={columns}
        data={data}
        onSearch={handleSearch}
        filters={filters}
     
        // onSort={handleSort}
      />
    </>
  );
};
