'use client';

import { AlertModal } from '@/components/modal/alert-modal';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { TaskManagement } from '@/constants/task-management-data';
import { Edit, MoreHorizontal, Trash, Eye, UserPlus, UserCheck, Table } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

interface CellActionProps {
  data: TaskManagement;
}

export const CellAction: React.FC<CellActionProps> = ({ data }) => {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const onConfirm = async () => {
    // Your confirm logic here
  };

  const editTask = () => {
    router.push(`/task/edit/${data.taskId}`); 
  };

  const viewTask = () => {
    router.push(`/task/view/${data.taskId}`); 
  };

  const updateStatus = () => {
    router.push(`/order/${data.taskId}`); 
  };

  const viewBids= () => {
    router.push(`/bidding/table/${data.taskId}`); 
  };

  const biddingTable = () => {
    router.push(`/bidding/table/${data.taskId}`); 
  };

 
  return (
    <>
      <AlertModal
        isOpen={open}
        onClose={() => setOpen(false)}
        onConfirm={onConfirm}
        loading={loading}
      />
      <DropdownMenu modal={false}>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="h-8 w-8 p-0">
            <span className="sr-only">Open menu</span>
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>Actions</DropdownMenuLabel>
          <DropdownMenuItem onClick={editTask}>
            <Edit className="mr-2 h-4 w-4" />  Edit task

          </DropdownMenuItem>
          <DropdownMenuItem onClick={viewTask}>
            <Eye className="mr-2 h-4 w-4" /> View Task
          </DropdownMenuItem>
          <DropdownMenuItem onClick={updateStatus}>
            <UserCheck className="mr-2 h-4 w-4" /> Change Status

          </DropdownMenuItem>
          <DropdownMenuItem onClick={viewBids}>
            <Eye className="mr-2 h-4 w-4" /> View Bids

          </DropdownMenuItem>
          <DropdownMenuItem onClick={biddingTable}>
            <Table className="mr-2 h-4 w-4" /> Biding Table
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};
