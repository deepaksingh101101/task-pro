import BreadCrumb from '@/components/breadcrumb';
import MainLayout from '@/components/layout/main-layout';
import { ViewHistoryClient } from '@/components/tables/viewHistory-table/client';
import { ScrollArea } from '@/components/ui/scroll-area';

const breadcrumbItems = [{ title: 'History', link: '/user/history' }];
export default function page() {
  return (
    <MainLayout meta={{ title: 'View Histrory' }}>

    <ScrollArea className="h-full">
      <div className="flex-1 space-y-4 min-h-screen p-4 pt-6 md:p-8">
        <BreadCrumb items={breadcrumbItems} />
        <ViewHistoryClient/>
      </div>
    </ScrollArea>
    </MainLayout>
  );
}