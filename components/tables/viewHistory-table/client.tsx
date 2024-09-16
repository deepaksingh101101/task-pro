'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { DataTable } from '@/components/ui/data-table';
import { Heading } from '@/components/ui/heading';
import { Separator } from '@/components/ui/separator';
import { ViewHistory, ViewHistoryData} from '@/constants/viewHistory-data'; 
import { Plus } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { columns } from './columns';

export const ViewHistoryClient: React.FC = () => {
  const router = useRouter();
  const [data, setData] = useState<ViewHistory[]>(ViewHistoryData); 

  const handleSearch = (searchValue: string) => {
    const filteredData = ViewHistoryData.filter(item =>
      item.paymentMethod.toLowerCase().includes(searchValue.toLowerCase()) || 
      item.type.toLowerCase().includes(searchValue.toLowerCase())
    );
    setData(filteredData);
  };

 
//   const handleSort = (sortBy: string, sortOrder: 'asc' | 'desc') => {
//     const sortedData = [...data].sort((a, b) => {
//       if (sortOrder === 'asc') {
//         return a[sortBy].localeCompare(b[sortBy]);
//       } else {
//         return b[sortBy].localeCompare(a[sortBy]);
//       }
//     });
//     setData(sortedData);
//   };

  const filters = [
    {
      label: 'Amount',
      subOptions: ['Below $500', '$500 - $700', 'Above $700'],
    },
    {
      label: 'Payment Method',
      subOptions: ['Credit Card', 'PayPal', 'Debit Card', 'Bank Transfer'],
    },
  ];

  return (
    <>
      <div className="flex items-start justify-between">
        <Heading
          title={`Wallet Details (${data.length})`}
          description="Manage wallet with client-side table functionalities."
        />
        {/* <Button
          className="text-xs md:text-sm"
          onClick={() => router.push(`/add-bid`)} // Adjust the route to add a new bid
        >
          <Plus className="mr-2 h-4 w-4" /> Add New Bid
        </Button> */}
      </div>
      <Separator />
      <DataTable
        searchKey="type"
        columns={columns}
        data={data}
        onSearch={handleSearch}
        filters={filters}
        // rowNo={0}
        // onSort={handleSort}
      />
    </>
  );
};
