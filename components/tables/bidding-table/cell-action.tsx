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
import { BidUser } from '@/constants/bid-data';
import { MoreHorizontal, Eye, UserCheck, Trash } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

interface CellActionProps {
  data: BidUser;
}

export const CellAction: React.FC<CellActionProps> = ({ data }) => {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const onConfirm = async () => {
    // Your confirm logic here
  };

  const viewBid = () => {
    // Logic to view bid
    router.push(`/complaint-management/viewBid/${data.userId}`);
  };

  const assignTask = () => {
    // Logic to assign task
    router.push(`/complaint-management/assignTask/${data.userId}`);
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
          <DropdownMenuItem onClick={viewBid}>
            <Eye className="mr-2 h-4 w-4" /> View Bid Details
          </DropdownMenuItem>
          <DropdownMenuItem onClick={assignTask}>
            <UserCheck className="mr-2 h-4 w-4" /> Mannual Assign Bid
          </DropdownMenuItem>
          <DropdownMenuItem onClick={assignTask}>
            <Trash className="mr-2 h-4 w-4" /> Mannual Delete Bid
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};
