// Define the ComplaintManagement interface
export interface ComplaintManagementUser {
  sno: number;
  name: string;
  complaintType: string;
  description: string;
  status: 'Open' | 'Closed';
  resolution?: string;
}

// Sample data for the complaint management system
export const ComplaintManagementUserData: ComplaintManagementUser[] = [
  {
    sno: 1,
    name: "Amit Patel",
    complaintType: 'Incomplete Task',
    description: 'The survey task was not completed as per the requirements.',
    status: 'Open',
    resolution: 'Additional instructions provided'
  },
  {
    sno: 2,
    name: "Priya Sharma",
    complaintType: 'Incorrect Data',
    description: 'The data collected for the market research task was inaccurate.',
    status: 'Closed',
    resolution: 'Revised report submitted'
  },
  {
    sno: 3,
    name: "Rajeev Kumar",
    complaintType: 'Missed Deadline',
    description: 'The feedback form task was not submitted by the due date.',
    status: 'Open',
    resolution: 'Extension granted'
  },
  {
    sno: 4,
    name: "Neha Reddy",
    complaintType: 'Task Assignment Issue',
    description: 'Assigned task was not visible in the task list.',
    status: 'Closed',
    resolution: 'Technical issue resolved'
  }
];
