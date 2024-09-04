
export interface BidUser {
    userId: string;
    username: string;
    userLocation: string;
    bidAmount: number;
    description: string;
  }
  
 
  export const BidData: BidUser[] = [
    {
      userId: 'U001',
      username: 'Amit Patel',
      userLocation: 'Mumbai, India',
      bidAmount: 500,
      description: 'Bid for completing the market research survey.',
    },
    {
      userId: 'U002',
      username: 'Priya Sharma',
      userLocation: 'Delhi, India',
      bidAmount: 750,
      description: 'Bid for the product feedback analysis task.',
    },
    {
      userId: 'U003',
      username: 'Rajeev Kumar',
      userLocation: 'Bangalore, India',
      bidAmount: 600,
      description: 'Bid for the content creation and editing task.',
    },
    {
      userId: 'U004',
      username: 'Neha Reddy',
      userLocation: 'Hyderabad, India',
      bidAmount: 700,
      description: 'Bid for managing the social media campaign.',
    },
  ];
  