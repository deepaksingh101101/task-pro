
  
  
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
      taskId: 101,
      title: 'Weekly Delivery',
      taskName: 'Regular Veggie Bag Delivery',
    taskType: 'easy',
        description: 'Deliver regular veggie bags to customer.',
        assignedTo: 'Deepak Singh',
        assignedBy: 'Admin',
        assignedDate: new Date('2023-07-10'),
        maximumCostAssigned: 800,
        Status: 'Approved',
      biddingTime: { startTime: '2023-07-01T09:00:00', endTime: '2023-07-07T17:00:00' },
      dueDate: new Date('2023-07-17'),
   
        address: '123 Main St',
        city: 'Delhi',
        pincode: 110001,
        country: 'India',
 
      rewards: 50,
      subtasks: 'Pack and deliver the bags.',
      feedback: 'Customer satisfied with the delivery.',
    },
    {
      taskId: 102,
      title: 'Monthly Delivery',
      taskName: 'Mini Veggie Bag Delivery',
      taskType: 'easy',
        description: 'Deliver mini veggie bags to customer.',
        assignedTo: 'Deepak Singh',
        assignedBy: 'Admin',
        assignedDate: new Date('2023-07-13'),
        maximumCostAssigned: 750,
        Status: 'Progress',
      
      biddingTime: { startTime: '2023-07-01T09:00:00', endTime: '2023-07-08T17:00:00' },
      dueDate: new Date('2023-07-20'),
     
        address: '456 Elm St',
        city: 'Delhi',
        pincode: 110002,
        country: 'India',
      rewards: 60,
      subtasks: 'Pack and deliver the bags.',
      feedback: 'Customer has not yet provided feedback.',
    },
    {
      taskId: 103,
      title: 'Special Delivery',
      taskName: 'Brinjal Delivery',
      taskType: 'easy',
        description: 'Deliver brinjal to customer.',
        assignedTo: 'Kartik Singh',
        assignedBy: 'Admin',
        assignedDate: new Date('2023-07-15'),
        maximumCostAssigned: 600,
        Status: 'Progress',
      biddingTime: { startTime: '2023-07-01T09:00:00', endTime: '2023-07-09T17:00:00' },
      dueDate: new Date('2023-07-22'),

        address: '789 Pine St',
        city: 'Delhi',
        pincode: 110003,
        country: 'India',
      rewards: 40,
      subtasks: 'Pack and deliver the brinjal.',
      feedback: 'Delivery cancelled due to customer request.',
    },
    {
      taskId: 104,
      title: 'End-of-Month Delivery',
      taskName: 'Regular Veggie Bag Delivery',
     taskType: 'easy',
        description: 'Deliver regular veggie bags to customer.',
        assignedTo: 'Arya Singh',
        assignedBy: 'Admin',
        assignedDate: new Date('2023-07-18'),
        maximumCostAssigned: 1000,
        Status: 'Approved',
     
      biddingTime: { startTime: '2023-07-02T09:00:00', endTime: '2023-07-09T17:00:00' },
      dueDate: new Date('2023-07-25'),
     
        address: '101 Maple St',
        city: 'Delhi',
        pincode: 110004,
        country: 'India',
      rewards: 70,
      subtasks: 'Pack and deliver the bags.',
      feedback: 'Pending delivery, customer was not available.',
    },
    {
      taskId: 105,
      title: 'Urgent Delivery',
      taskName: 'Regular Veggie Bag Delivery',
      taskType: 'easy',
        description: 'Deliver regular veggie bags to customer urgently.',
        assignedTo: 'Rohit Singh',
        assignedBy: 'Admin',
        assignedDate: new Date('2023-07-20'),
        maximumCostAssigned: 1000,
        Status: 'Approved',
      biddingTime: { startTime: '2023-07-10T09:00:00', endTime: '2023-07-17T17:00:00' },
      dueDate: new Date('2023-07-27'),
    
        address: '202 Oak St',
        city: 'Delhi',
        pincode: 110005,
        country: 'India',
      rewards: 80,
      subtasks: 'Pack and deliver the bags.',
      feedback: 'Customer requested delivery with neighbor if not home.',
    }
  ];
  