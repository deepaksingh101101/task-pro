import BreadCrumb from '@/components/breadcrumb';
import { CreateAdminForm } from '@/components/forms/admin-stepper/create-admin';

import MainLayout from '@/components/layout/main-layout';
import { ScrollArea } from '@/components/ui/scroll-area';

const breadcrumbItems = [{ title: 'Create Admin', link: '/dashboard/admin' }];
export default function page() {
  return (
    <MainLayout meta={{ title: 'Create Admin' }}>

    <ScrollArea className="h-full">
      <div className="flex-1 space-y-4 min-h-screen p-4 pt-6 md:p-8">
        <BreadCrumb items={breadcrumbItems} />
        <CreateAdminForm initialData={null} />
      </div>
    </ScrollArea>
    </MainLayout>
  );
}