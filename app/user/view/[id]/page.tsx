'use client';
import BreadCrumb from '@/components/breadcrumb';
import { CreateProfileOne } from '@/components/forms/user-profile-stepper/create-profile';
import MainLayout from '@/components/layout/main-layout';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ProfessionalManagement } from '@/constants/professional-management-data';
const breadcrumbItems = [{ title: 'View', link: '/dashboard/view' }];

export default function Page() {
  const initialData = {
    userId: 'U1001',
    firstName: 'Rahul',
    lastName: 'Sharma',
    contact: '+91 9876543210',
    address: '123, MG Road, Mumbai, India',
    roleAssignmentDate: '2024-09-01',
    verificationStatus: 'Verified',
    lastLogin: '2024-09-06',
    activityStatus: 'Active',
    rewardsPoints: 1200,
    accountStatus: 'Active',
  };

  const [walletAmount, setWalletAmount] = useState<number | null>(null);
  const [isWalletVisible, setIsWalletVisible] = useState(false); 
 
  const router = useRouter();

   const handleShowWallet = () => {
    // Toggle the wallet visibility
    setIsWalletVisible(!isWalletVisible);

    // If the wallet is not visible, set the wallet amount, else hide it
    if (!isWalletVisible) {
      setWalletAmount(5000); // Example wallet amount, you can set this dynamically
    } else {
      setWalletAmount(null);
    }
  };
  const handleWalletHistory = () => {
 
    router.push(`/viewHistory/${initialData.userId}`); 
    console.log('Wallet History clicked');
    
  };
  const handleTaskHistory = () => {
    router.push(`/taskHistory/${initialData.userId}`); 
    console.log('Task History clicked');
    
  };

  return (
    <MainLayout meta={{ title: '' }}>
      <ScrollArea className="h-full">
        <div className="flex-1 space-y-4 min-h-screen p-4 pt-6 md:p-8">
          <BreadCrumb items={breadcrumbItems} />

          <CreateProfileOne isEnabled={true} initialData={initialData} />

          <div className="relative mb-4 gap-8 rounded-md border p-4 md:flex md:items-center md:justify-center">
          <button
          onClick={handleShowWallet}
          className="px-4 py-2 mt-4 bg-orange-500 text-white rounded-md "
        >
          {isWalletVisible ? 'Wallet Amount' : 'Wallet Amount'}
        </button>

        {walletAmount !== null && (
          <div className="mt-2 text-lg">
            Wallet Amount: ₹{walletAmount}
          </div>
        )}

            <button
              onClick={handleTaskHistory}
              className="px-4 py-2 mt-4 bg-red-500 text-white rounded-md"
            >
              View Task History
            </button>
            <button
              onClick={handleWalletHistory}
              className="px-4 py-2 mt-4 bg-yellow-500 text-white rounded-md"
            >
              View Wallet History
            </button>
          </div>
        </div>
      </ScrollArea>
    </MainLayout>
  );
}
