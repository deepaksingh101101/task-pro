export interface TimeRanges {
  startTime: string; // ISO format date-time string
  endTime: string;   // ISO format date-time string
}

export interface TaskManagement {
  taskId: number;
  title?: string;
  taskName: string;
  taskType: string;
  biddingTime: TimeRanges;
  dueDate: Date;
  taskStatus: string;
  rewards: number;
  subtasks: string;
  feedback: string;
  description: string;
  assignedTo: string;
  assignedBy: string;
  assignedDate: Date;
  maximumCostAssigned: number;
  Status: 'Progress' | 'Approved' | 'Rejected'; 
  address: string;
  city: string;
  pincode: number;
  country: string;
}

export const TaskManagementData: TaskManagement[] = [
  {
    taskId: 201,
    title: 'Customer Feedback Survey',
    taskName: 'Survey Completion',
    taskType: 'survey',
    description: 'Complete the customer feedback survey.',
    assignedTo: 'Ravi Kumar',
    assignedBy: 'Sita Sharma',
    assignedDate: new Date('2024-01-10'),
    maximumCostAssigned: 300,
    Status: 'Approved',
    biddingTime: { startTime: '2024-01-01T09:00:00', endTime: '2024-01-07T17:00:00' },
    dueDate: new Date('2024-01-17'),
    address: '123 Greenfield Ave',
    city: 'Mumbai',
    pincode: 400001,
    country: 'India',
    rewards: 50,
    subtasks: 'Complete the survey and submit feedback.',
    feedback: 'Survey completed successfully.',
    taskStatus: 'Progress',
  },
  {
    taskId: 202,
    title: 'Product Quality Check',
    taskName: 'Quality Inspection',
    taskType: 'inspection',
    description: 'Inspect the quality of the products.',
    assignedTo: 'Aarti Patel',
    assignedBy: 'Sita Sharma',
    assignedDate: new Date('2024-01-13'),
    maximumCostAssigned: 400,
    Status: 'Progress',
    biddingTime: { startTime: '2024-01-01T09:00:00', endTime: '2024-01-08T17:00:00' },
    dueDate: new Date('2024-01-20'),
    address: '456 Industrial Rd',
    city: 'Pune',
    pincode: 411001,
    country: 'India',
    rewards: 60,
    subtasks: 'Inspect and document product quality.',
    feedback: 'Inspection in progress.',
    taskStatus: 'Listed',
  },
  {
    taskId: 203,
    title: 'Employee Training Session',
    taskName: 'Training Completion',
    taskType: 'training',
    description: 'Complete the employee training session.',
    assignedTo: 'Sunil Mehta',
    assignedBy: 'Ravi Kumar',
    assignedDate: new Date('2024-01-15'),
    maximumCostAssigned: 500,
    Status: 'Progress',
    biddingTime: { startTime: '2024-01-01T09:00:00', endTime: '2024-01-09T17:00:00' },
    dueDate: new Date('2024-01-22'),
    address: '789 Training Lane',
    city: 'Delhi',
    pincode: 110001,
    country: 'India',
    rewards: 70,
    subtasks: 'Complete training modules and assessments.',
    feedback: 'Training session scheduled for next week.',
    taskStatus: 'Completed',
  },
  {
    taskId: 204,
    title: 'Annual Performance Review',
    taskName: 'Review Completion',
    taskType: 'review',
    description: 'Complete the annual performance review for employees.',
    assignedTo: 'Geeta Sharma',
    assignedBy: 'Aarti Patel',
    assignedDate: new Date('2024-01-18'),
    maximumCostAssigned: 600,
    Status: 'Approved',
    biddingTime: { startTime: '2024-01-02T09:00:00', endTime: '2024-01-09T17:00:00' },
    dueDate: new Date('2024-01-25'),
    address: '101 Corporate Blvd',
    city: 'Bangalore',
    pincode: 560001,
    country: 'India',
    rewards: 80,
    subtasks: 'Complete performance reviews and submit reports.',
    feedback: 'Pending reviews, to be completed by end of month.',
    taskStatus: 'Completed',
     },
  {
    taskId: 205,
    title: 'Market Research Study',
    taskName: 'Research Analysis',
    taskType: 'research',
    description: 'Analyze and report on market research data.',
    assignedTo: 'Anil Singh',
    assignedBy: 'Geeta Sharma',
    assignedDate: new Date('2024-01-20'),
    maximumCostAssigned: 700,
    Status: 'Approved',
    biddingTime: { startTime: '2024-01-10T09:00:00', endTime: '2024-01-17T17:00:00' },
    dueDate: new Date('2024-01-27'),
    address: '202 Research St',
    city: 'Chennai',
    pincode: 600001,
    country: 'India',
    rewards: 90,
    subtasks: 'Complete market research and submit analysis report.',
    feedback: 'Research in progress, preliminary findings are promising.',
    taskStatus: 'Assigned',
  }
];
