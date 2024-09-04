// app/dashboard/user-management/page.tsx
import BreadCrumb from '@/components/breadcrumb';
import MainLayout from '@/components/layout/main-layout';
import { BiddingClient } from '@/components/tables/bidding-table/client';

const breadcrumbItems = [{ title: 'Bidding Table', link: '/dashboard/bid' }];

export default function BidPage() {
  return (
    <MainLayout meta={{ title: 'Bids' }}>
      <div className="flex-1 space-y-4 min-h-screen p-4 pt-6 md:p-8">
        <BreadCrumb items={breadcrumbItems} />
        <BiddingClient  />
      </div>
    </MainLayout>
  );
}

