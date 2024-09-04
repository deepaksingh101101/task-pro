'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { DataTable } from '@/components/ui/data-table';
import { Heading } from '@/components/ui/heading';
import { Separator } from '@/components/ui/separator';
import { BidUser, BidData } from '@/constants/bid-data'; // Import BidUser and BidData
import { Plus } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { columns } from './columns';

export const BiddingClient: React.FC = () => {
  const router = useRouter();
  const [data, setData] = useState<BidUser[]>(BidData); // Initialize with BidData

  const handleSearch = (searchValue: string) => {
    const filteredData = BidData.filter(item =>
      item.username.toLowerCase().includes(searchValue.toLowerCase()) || 
      item.description.toLowerCase().includes(searchValue.toLowerCase())
    );
    setData(filteredData);
  };

  // You might want to handle sorting if needed
  // const handleSort = (sortBy: string, sortOrder: 'asc' | 'desc') => {
  //   const sortedData = [...data].sort((a, b) => {
  //     if (sortOrder === 'asc') {
  //       return a[sortBy].localeCompare(b[sortBy]);
  //     } else {
  //       return b[sortBy].localeCompare(a[sortBy]);
  //     }
  //   });
  //   setData(sortedData);
  // };

  const filters = [
    {
      label: 'Bid Amount',
      subOptions: ['Below $500', '$500 - $700', 'Above $700'],
    },
    {
      label: 'User Location',
      subOptions: ['Mumbai', 'Delhi', 'Bangalore', 'Hyderabad'],
    },
  ];

  return (
    <>
      <div className="flex items-start justify-between">
        <Heading
          title={`Bidding Table (${data.length})`}
          description="Manage bids with client-side table functionalities."
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
        searchKey="username" // Adjust the search key to reflect bidding data
        columns={columns}
        data={data}
        onSearch={handleSearch}
        filters={filters}
        rowNo={0}
        // onSort={handleSort}
      />
    </>
  );
};
