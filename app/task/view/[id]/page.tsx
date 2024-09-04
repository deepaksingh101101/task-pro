import BreadCrumb from '@/components/breadcrumb';
import { CreateTask } from '@/components/forms/task-stepper/create-task';
import { CreateSubscriptionOne } from '@/components/forms/subscription-stepper/create-subscription';
import MainLayout from '@/components/layout/main-layout';
import { ScrollArea } from '@/components/ui/scroll-area';

const breadcrumbItems = [{ title: 'View Task', link: '/dashboard/task' }];
export default function page() {
  const initialData = {
    taskId: 'T001',
    title: 'Market Research',
    taskName: 'Conduct Market Research',
    taskType: 'Survey',
    dueDate: new Date('2024-09-15'),
    assignedTo: 'John Doe',
    assignedBy: 'Jane Smith',
    assignedDate: new Date('2024-09-01'),
    Status: 'Active',
    maximumCostAssigned: 500,
    rewards: 50,
    feedback: 'Well done',
    description: 'Research on consumer behavior in urban areas',
    subtasks: ['Design Survey', 'Collect Data', 'Analyze Results'],
    address: '123 Main St',
    city: 'New York',
    pincode: '10001',
    country: 'USA',
    state: 'NY',
    tag: 'Urban',
    ageRange: '26-35',
    gender: 'Male',
    nationality: ['American'],
    language: 'English',
    taskCompletionHistoryProfessional: 10,
  taskRatingsProfessional: 4.5,
  industryExperienceProfessional: 5,
  taskCompletionHistoryApprover: 24,
  taskRatingsApprover: 3.5,
  industryExperienceApprover: 4,
    timeAvailability: '8-2pm',
    time: 'Part-Time',
    immediateAvailability: 'Yes'
  };
  const isEnabled = true
  return (
    <MainLayout meta={{ title: 'View Task' }}>

    <ScrollArea className="h-full">
      <div className="flex-1 space-y-4 min-h-screen p-4 pt-6 md:p-8">
        <BreadCrumb items={breadcrumbItems} />
        <CreateTask initialData={initialData} isEnabled = {isEnabled} />
      </div>
    </ScrollArea>
    </MainLayout>
  );
}
