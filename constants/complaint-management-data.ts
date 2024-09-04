// Define the ComplaintManagement interface
export interface ComplaintManagement {
  sno: number;
  complaintType: 'Incomplete Task' | 'Incorrect Data' | 'Missed Deadline' | 'Task Assignment Issue';
  status: 'Active' | 'Inactive';
  resolution?: 'Additional instructions provided' | 'Revised report submitted' | 'Extension granted' | 'Technical issue resolved';
}

// Sample data for the complaint management system
export const ComplaintManagementData: ComplaintManagement[] = [
  {
    sno: 1,
    complaintType: 'Incomplete Task',
    status: 'Active',
    resolution: 'Additional instructions provided'
  },
  {
    sno: 2,
    complaintType: 'Incorrect Data',
    status: 'Inactive',
    resolution: 'Revised report submitted'
  },
  {
    sno: 3,
    complaintType: 'Missed Deadline',
    status: 'Active',
    resolution: 'Extension granted'
  },
  {
    sno: 4,
    complaintType: 'Task Assignment Issue',
    status: 'Inactive',
    resolution: 'Technical issue resolved'
  }
];
