export interface ViewHistory {
    taskId?: any;   
    sno: number;
    amount: number;
    type: 'withdraw' | 'deposit';  
    date: string;                 
    time: string;                 
    paymentMethod: string;      
  }
  
  export const ViewHistoryData: ViewHistory[] = [
    {
      sno: 1,
      amount: 500,
      type: 'withdraw',          
      date: '2023-09-05',          
      time: '10:30 AM',            
      paymentMethod: 'Credit Card',
    },
    {
      sno: 2,
      amount: 750,
      type: 'deposit',      
      date: '2023-09-04',
      time: '02:00 PM',
      paymentMethod: 'PayPal',
    },
    {
      sno: 3,
      amount: 600,
      type: 'withdraw',
      date: '2023-09-03',
      time: '11:15 AM',
      paymentMethod: 'Debit Card',
    },
    {
      
      sno: 4,
      amount: 700,
      type: 'deposit',
      date: '2023-09-02',
      time: '09:45 AM',
      paymentMethod: 'Bank Transfer',
    },
  ];
  