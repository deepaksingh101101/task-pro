export interface Finance{
    serialNumber?: number; // Optional field for serial number
    userId: string;
    username: string;
    userLocation: string;
    amount: number;
    date: string; // ISO date string
    time: string; // ISO time string
    method: string; // Payment method
    taskId: string;
    userType: string; // User type (e.g., 'Professional', 'Approver')
    description: string;
  }
  export const FinanceData: Finance[] = [
    {
      serialNumber: 1,
      userId: 'U001',
      username: 'Amit Patel',
      userLocation: 'Mumbai, India',
      amount: 500,
      date: '2024-09-01', // Example ISO date
      time: '14:30:00', // Example ISO time
      method: 'PhonePe', // Payment method
      taskId: 'T001',
      userType: 'Professional',
      description: 'Bid for completing the market research survey.',
    },
    {
      serialNumber: 2,
      userId: 'U002',
      username: 'Priya Sharma',
      userLocation: 'Delhi, India',
      amount: 750,
      date: '2024-09-02',
      time: '09:15:00',
      method: 'Google Pay',
      taskId: 'T002',
      userType: 'Approver',
      description: 'Bid for the product feedback analysis task.',
    },
    {
      serialNumber: 3,
      userId: 'U003',
      username: 'Rajeev Kumar',
      userLocation: 'Bangalore, India',
      amount: 600,
      date: '2024-09-03',
      time: '11:45:00',
      method: 'Paytm',
      taskId: 'T003',
      userType: 'Professional',
      description: 'Bid for the content creation and editing task.',
    },
    {
      serialNumber: 4,
      userId: 'U004',
      username: 'Neha Reddy',
      userLocation: 'Hyderabad, India',
      amount: 700,
      date: '2024-09-04',
      time: '16:00:00',
      method: 'PhonePe',
      taskId: 'T004',
      userType: 'Approver',
      description: 'Bid for managing the social media campaign.',
    },
  ];
  