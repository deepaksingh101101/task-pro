import BreadCrumb from '@/components/breadcrumb';
import { CreateTask } from '@/components/forms/task-stepper/create-task';
import { CreateSubscriptionOne } from '@/components/forms/subscription-stepper/create-subscription';
import MainLayout from '@/components/layout/main-layout';
import { ScrollArea } from '@/components/ui/scroll-area';

const breadcrumbItems = [{ title: 'View Task', link: '/dashboard/task' }];
export default function page() {
  const initialData = {
    taskId: 'T001',
    title: 'Market Research Survey',
    taskName: 'Conduct In-depth Market Research',
    taskType: 'Survey',
    dueDateProfessional: new Date('2024-09-15'),
    dueDateApprover: new Date('2024-09-18'),
    assignedToProfessional: 'Ridhi',
    assignedByProfessional: 'Arya Singh',
    assignedToApprover: 'Ridhi',
    assignedByApprover: 'Michael Johnson',
    assignedDateProfessional: new Date('2024-09-01'),
    assignedDateApprover: new Date('2024-09-02'),
    completedDateProfessional: new Date('2024-09-14'),
    completedDateApprover: new Date('2024-09-17'),
    Status: 'Completed',
    maximumCostAssignedProfessional: 500,
    maximumCostAssignedApprover: 700,
    rewards: 50,
    quantity: 100, 
    feedbackProfessional: 'Professional completed task excellently',
    feedbackApprover: 'Approver gave good feedback',
    description: 'Conduct comprehensive research on market trends in urban areas.',
    subtasks: ['Prepare Survey', 'Collect Data', 'Analyze Trends', 'Report Findings'],
    address: '456 Market St',
    city: 'New York',
    pincode: '10002',
    country: 'USA',
    state: 'NY',
    tag: 'Urban',
    nationality: ['American'],
    ageRange: '26-35',
    language: 'English',
    gender: 'Male',
    occupation: 'Market Analyst',
    educationLevel: 'Bachelor’s Degree',
    value: 200, 
    taskCompletionHistoryProfessional: 10,
    taskRatingsProfessional: 4.5,
    industryExperienceProfessional: 5,
    taskCompletionHistoryApprover: 24,
    taskRatingsApprover: 3.8,
    industryExperienceApprover: 4,
    timeAvailability: '8-2pm',
    time: 'Part-Time',
    immediateAvailability: 'Yes',
    annualIncomeProfessional: 50000,
    annualIncomeApprover: 60000,
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
