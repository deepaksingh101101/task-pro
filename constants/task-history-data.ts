 export interface TaskHistory {
    taskId: number;
    title?: string;
    taskName: string;
    taskType: string;
    dueDate: Date;
    assignedTo: string;
    assignedBy: string;
    
  }
  
  export const TaskHistoryData: TaskHistory[] = [
    {
      taskId: 201,
      title: 'Customer Feedback Survey',
      taskName: 'Survey Completion',
      taskType: 'survey',
      assignedTo: 'Ravi Kumar',
      assignedBy: 'Sita Sharma',
     
      dueDate: new Date('2024-01-17'),
    },
     
    {
      taskId: 202,
      title: 'Product Quality Check',
      taskName: 'Quality Inspection',
      taskType: 'inspection',
    
      assignedTo: 'Aarti Patel',
      assignedBy: 'Sita Sharma',
      dueDate: new Date('2024-01-20'),
    },
    {
      taskId: 203,
      title: 'Employee Training Session',
      taskName: 'Training Completion',
      taskType: 'training',
      assignedTo: 'Sunil Mehta',
      assignedBy: 'Ravi Kumar',
    
      dueDate: new Date('2024-01-22'),
    
    },
    {
      taskId: 204,
      title: 'Annual Performance Review',
      taskName: 'Review Completion',
      taskType: 'review',
    
      assignedTo: 'Geeta Sharma',
      assignedBy: 'Aarti Patel',
    
      dueDate: new Date('2024-01-25'),
    
    },
    {
      taskId: 205,
      title: 'Market Research Study',
      taskName: 'Research Analysis',
      taskType: 'research',
     
      assignedTo: 'Anil Singh',
      assignedBy: 'Geeta Sharma',
     
     
      dueDate: new Date('2024-01-27'),
     
    }
  ];
  