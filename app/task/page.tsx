import BreadCrumb from '@/components/breadcrumb';
import { CreateTask } from '@/components/forms/task-stepper/create-task';
import { CreateSubscriptionOne } from '@/components/forms/subscription-stepper/create-subscription';
import MainLayout from '@/components/layout/main-layout';
import { ScrollArea } from '@/components/ui/scroll-area';

const breadcrumbItems = [{ title: 'Create Task', link: '/dashboard/task' }];
export default function page() {
  return (
    <MainLayout meta={{ title: 'Create Task' }}>

    <ScrollArea className="h-full">
      <div className="flex-1 space-y-4 min-h-screen p-4 pt-6 md:p-8">
        <BreadCrumb items={breadcrumbItems} />
        <CreateTask initialData={null} />
      </div>
    </ScrollArea>
    </MainLayout>
  );
}
