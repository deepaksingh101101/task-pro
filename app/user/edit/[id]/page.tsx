import BreadCrumb from '@/components/breadcrumb';
import { CreateProfileOne } from '@/components/forms/user-profile-stepper/create-profile';


import MainLayout from '@/components/layout/main-layout';
import { ScrollArea } from '@/components/ui/scroll-area';

const breadcrumbItems = [{ title: 'Edit', link: '/dashboard/edit' }];
export default function page() {
 const initialData = {
    userId: 'U1001',
    firstName: 'Rahul',
    lastName: 'Sharma',
    contact: '+91 9876543210',
    address: '123, MG Road, Mumbai, India',
    roleAssignmentDate: '2024-09-01', // Assuming ISO format for the date
    verificationStatus: 'Verified',    // Example statuses: 'Verified', 'Pending'
    lastLogin: '2024-09-06',           // Assuming ISO format for the date
    activityStatus: 'Active',          // Example statuses: 'Active', 'Inactive'
    rewardsPoints: 1200,               // Positive number for rewards points
    accountStatus: 'Active',           // Example statuses: 'Active', 'Suspended'
  };
  return (
    <MainLayout meta={{ title: 'Edit' }}>
    <ScrollArea className="h-full">
      <div className="flex-1 space-y-4 min-h-screen p-4 pt-6 md:p-8">
        <BreadCrumb items={breadcrumbItems} />
      
        <CreateProfileOne initialData={initialData}  isEnabled={false}/>
        
      </div>
    </ScrollArea>
    </MainLayout>
  );
}
