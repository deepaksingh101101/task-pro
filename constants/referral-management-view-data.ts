// Define the structure for the Referred details
interface ReferralDetail {
    name: string;
    number: string;
    couponCode: string;
    couponStatus: 'Used' | 'Unused';
    expired: boolean;
  }
  
  // Define the ReferralManagement interface with the new fields
  export interface ReferralManagementView {
    id: number;
    referredBy: ReferralDetail;
    referredTo: ReferralDetail;
    referredDate: string;
    referredStatus: 'Registered' | 'Not Registered';
  }
  
  // Sample data for the referral management system
  export const ReferralManagementViewData: ReferralManagementView[] = [
    {
      id: 1,
      referredBy: {
        name: 'Ridhi Mishra',
        number: '1234567890',
        couponCode: 'XWFERFEWRNFOW',
        couponStatus: 'Used',
        expired: true
      },
      referredTo: {
        name: 'Kartik Singh',
        number: '0987654321',
        couponCode: 'YHTGFRGTYHNMK',
        couponStatus: 'Unused',
        expired: false
      },
      referredDate: "25/Mar/2024",
      referredStatus: 'Registered'
    },
    {
      id: 2,
      referredBy: {
        name: 'Arya Singh',
        number: '2345678901',
        couponCode: 'WEFVWFEWRNFOW',
        couponStatus: 'Unused',
        expired: false
      },
      referredTo: {
        name: 'Shivam Kumar',
        number: '9876543210',
        couponCode: 'LKJHGFDSQWERTY',
        couponStatus: 'Unused',
        expired: false
      },
      referredDate: "25/Jan/2024",
      referredStatus: 'Not Registered'
    }
  ];