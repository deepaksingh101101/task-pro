import { format, parseISO } from 'date-fns';

export type UserManagement = {
  userId: number;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  city: string;
  society: string;
  roleAssignmentDate: string;
  verificationStatus: string;
  lastLogin: string;
  activityStatus: string;
  rewardsPoints: number;
  accountStatus: 'Active' | 'Inactive';
};

// Helper function to format dates
const formatDate = (dateString: string) => {
  return format(parseISO(dateString), 'dd MMM yyyy');
};

export const userManagementData: UserManagement[] = [
  {
    userId: 1,
    firstName: 'Arya',
    lastName: 'Singh',
    email: 'john.doe@example.com',
    phoneNumber: '123-456-7890',
    society: 'M3M Marina',
    city: 'Delhi',
    roleAssignmentDate: formatDate('2023-06-15'),
    verificationStatus: 'Verified',
    lastLogin: formatDate('2023-09-01'),
    activityStatus: 'Active',
    rewardsPoints: 150,
    accountStatus: 'Active',
  },
  {
    userId: 2,
    firstName: 'Ridhi',
    lastName: 'Mishra',
    email: 'ridhi.mishra@example.com',
    phoneNumber: '987-654-3210',
    society: 'DLF Phase 3',
    city: 'Karnatka',
    roleAssignmentDate: formatDate('2023-07-10'),
    verificationStatus: 'Pending',
    lastLogin: formatDate('2023-08-28'),
    activityStatus: 'Inactive',
    rewardsPoints: 80,
    accountStatus: 'Inactive',
  },
  {
    userId: 3,
    firstName: 'Deepak',
    lastName: 'Singh',
    email: 'deepak.singh@example.com',
    phoneNumber: '555-123-4567',
    society: 'Palm Gardens',
    city: 'Mumbai',
    roleAssignmentDate: formatDate('2023-05-20'),
    verificationStatus: 'Verified',
    lastLogin: formatDate('2023-08-25'),
    activityStatus: 'Active',
    rewardsPoints: 200,
    accountStatus: 'Active',
  },
  {
    userId: 4,
    firstName: 'Shivam',
    lastName: 'Kumar',
    email: 'shivam.kumar@example.com',
    phoneNumber: '666-777-8888',
    society: 'UniWorld City',
    city: 'Jharkhand',
    roleAssignmentDate: formatDate('2023-04-12'),
    verificationStatus: 'Pending',
    lastLogin: formatDate('2023-09-02'),
    activityStatus: 'Inactive',
    rewardsPoints: 60,
    accountStatus: 'Inactive',
  },
  {
    userId: 5,
    firstName: 'Vikash',
    lastName: 'Singh',
    email: 'vikash.singh@example.com',
    phoneNumber: '999-888-7777',
    society: 'Emerald Hills',
    city: 'Bengaluru',
    roleAssignmentDate: formatDate('2023-03-05'),
    verificationStatus: 'Verified',
    lastLogin: formatDate('2023-09-01'),
    activityStatus: 'Active',
    rewardsPoints: 120,
    accountStatus: 'Active',
  },
  {
    userId: 6,
    firstName: 'Prashant',
    lastName: 'Singh',
    email: 'prashant.singh@example.com',
    phoneNumber: '444-555-6666',
    society: 'Ireo Skyon',
    city: 'Delhi',
    roleAssignmentDate: formatDate('2023-02-25'),
    verificationStatus: 'Pending',
    lastLogin: formatDate('2023-08-30'),
    activityStatus: 'Inactive',
    rewardsPoints: 40,
    accountStatus: 'Inactive',
  },
];
