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
import { Finance } from '@/constants/finanace-data'; // Ensure this import matches the new data structure
import { Edit, MoreHorizontal, Trash, Eye, UserPlus, UserCheck } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

interface CellActionProps {
  data: Finance; 
}

export const CellAction: React.FC<CellActionProps> = ({ data }) => {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const onConfirm = async () => {
    // Your confirm logic here
  };

  const handleEditDetails = () => {
    router.push(`/bid-management/edit/${data.serialNumber}`); // Update route based on new data structure
  };

  const handleViewDetails = () => {
    router.push(`/bid-management/view/${data.serialNumber}`); // Update route based on new data structure
  };

  const generateInvoice = () => {
    router.push(`/bid-management/generate-invoice/${data.serialNumber}`); // Update route based on new data structure
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

          <DropdownMenuItem onClick={handleEditDetails}>
            <Edit className="mr-2 h-4 w-4" /> Edit Details
          </DropdownMenuItem>
          <DropdownMenuItem onClick={handleViewDetails}>
            <Eye className="mr-2 h-4 w-4" /> View Details
          </DropdownMenuItem>
          
          <DropdownMenuItem onClick={generateInvoice}>
            <UserCheck className="mr-2 h-4 w-4" /> Generate Invoice
          </DropdownMenuItem>
         
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};
