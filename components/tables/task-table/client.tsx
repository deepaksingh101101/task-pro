'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { DataTable } from '@/components/ui/data-table';
import { Heading } from '@/components/ui/heading';
import { Separator } from '@/components/ui/separator';
import { Plus } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { columns } from './columns';
import { TaskManagement , TaskManagementData} from '@/constants/task-management-data';

import { CalendarDateRangePicker } from '@/components/date-range-picker';

export const TaskClient: React.FC = () => {
  const router = useRouter();
  const initialData: TaskManagement[] = TaskManagementData;
  const [data, setData] = useState<TaskManagement[]>(initialData);

  const handleSearch = (searchValue: string) => {
    const filteredData = initialData.filter(item =>
      item.taskName.toLowerCase().includes(searchValue.toLowerCase())
    );
    setData(filteredData);
  };

  const filters = [
    {
      label: 'Task Type',
      subOptions: ['survey', 'inspection'  ],
    },
    // {
    //   label: 'Delivery Status',
    //   subOptions: ['Pending', 'Delivered', 'Cancelled'],
    // },
  ];

  return (
    <>
      <div className="flex items-start justify-between">
        <Heading
          title={`Task Management (${data.length})`}
          description="Manage Task (Client side table functionalities.)"
        />
        <Button
          className="text-xs md:text-sm"
          onClick={() => router.push(`/task`)}
        >
          <Plus className="mr-2 h-4 w-4" /> Add New
        </Button>
      </div>
      <Separator />
      
      <div className="flex justify-end">
        <CalendarDateRangePicker />
      </div>
      <DataTable
        searchKey="taskName"
        columns={columns}
        data={data}
        filters={filters}
        onSearch={handleSearch}
      />
    </>
  );
};
