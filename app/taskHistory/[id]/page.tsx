import BreadCrumb from '@/components/breadcrumb';
import MainLayout from '@/components/layout/main-layout';
import { TaskHistoryClient } from '@/components/tables/taskHistory-table/client';
import { ScrollArea } from '@/components/ui/scroll-area';

const breadcrumbItems = [{ title: 'History', link: '/user/taskHistory' }];
export default function page() {
  return (
    <MainLayout meta={{ title: 'Task Histrory' }}>
    <ScrollArea className="h-full">
      <div className="flex-1 space-y-4 min-h-screen p-4 pt-6 md:p-8">
        <BreadCrumb items={breadcrumbItems} />
        <TaskHistoryClient/>
      </div>
    </ScrollArea>
    </MainLayout>
  );
}