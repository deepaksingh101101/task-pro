import BreadCrumb from '@/components/breadcrumb';
import MainLayout from '@/components/layout/main-layout';
import { TaskClient } from '@/components/tables/task-table/client';


const breadcrumbItems = [{ title: 'Task Management', link: '/dashboard/task-management' }];

export default function SubscriptionPage() {
  return (
    <MainLayout meta={{ title: 'Task Management' }}>
      <div className="flex-1 space-y-4 min-h-screen p-4 pt-6 md:p-8">
        <BreadCrumb items={breadcrumbItems} />
        <TaskClient />
      </div>
    </MainLayout>
  );
}
