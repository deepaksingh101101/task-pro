// app/dashboard/user-management/page.tsx
import BreadCrumb from '@/components/breadcrumb';
import MainLayout from '@/components/layout/main-layout';
import { ReferralManagementViewClient } from '@/components/tables//referral-management-view-table/client';


const breadcrumbItems = [{ title: 'Referral Management', link: '/dashboard/referral' }];

export default function ReferralManagementPage() {
  return (
    <MainLayout meta={{ title: 'Referral Management' }}>
      <div className="flex-1 space-y-4 min-h-screen p-4 pt-6 md:p-8">
        <BreadCrumb items={breadcrumbItems} />
        {/* <ReferralManagementClient  /> */}
        <ReferralManagementViewClient/>
        {/* <ComplaintManagementUserPage  /> */}
      </div>
    </MainLayout>
  );
}