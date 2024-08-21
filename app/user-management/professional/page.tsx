// app/dashboard/user-management/page.tsx
import BreadCrumb from '@/components/breadcrumb';
import MainLayout from '@/components/layout/main-layout';
import {  ProfessionalUserClient } from '@/components/tables/professional-user-tables/client';
import {users} from '@/constants/data';

const breadcrumbItems = [{ title: 'User Management', link: '/dashboard/user-management' }];

export default function UserManagementPage() {
  return (
    <MainLayout meta={{ title: 'User Management' }}>
      <div className="flex-1 space-y-4  min-h-screen p-4 pt-6 md:p-8">
        <BreadCrumb items={breadcrumbItems} />
        < ProfessionalUserClient />
      </div>
    </MainLayout>
  );
}

