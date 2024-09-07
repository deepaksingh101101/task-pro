'use client';

import { useForm, Controller } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Heading } from '@/components/ui/heading';
import { Separator } from '@/components/ui/separator';
import { Checkbox } from '@/components/ui/checkbox';

type Role = 'manager' | 'executive' | 'external' | 'admin';

type ActionPermissions = {
  [K in Role]: boolean;
};

type ProfessionalManagementPermissions = {
  createProfessional: ActionPermissions;
  professionalAvailability: ActionPermissions;
  viewProfessional: ActionPermissions;
  editProfessional: ActionPermissions;
};
type ApproverManagementPermissions = {
  createApprover: ActionPermissions;
  approverAvailability: ActionPermissions;
  viewApprover: ActionPermissions;
  editApprover: ActionPermissions;
};
type AdminManagementPermissions = {
  createAdmin: ActionPermissions;
  adminAvailability: ActionPermissions;
  viewAdmin: ActionPermissions;
  editAdmin: ActionPermissions;
};
type TaskManagementPermissions = {
  createTask: ActionPermissions;
  deleteTask: ActionPermissions;
  viewTask: ActionPermissions;
  editTask: ActionPermissions;
  createNewRole: ActionPermissions;
};

type CustomerManagementPermissions = {
  createCustomer: ActionPermissions;
  customerStatus: ActionPermissions;
  viewCustomer: ActionPermissions;
  editCustomer: ActionPermissions;
};
type OrderManagementPermissions = {
  createOrder: ActionPermissions;
  orderStatus: ActionPermissions;
  viewOrder: ActionPermissions;
  editOrder: ActionPermissions;
  upgradeOrder: ActionPermissions;
  netPriceEditable: ActionPermissions;
  editDelivery: ActionPermissions;
};
type DeliveryManagementPermissions = {
  deliveryStatus: ActionPermissions;
  skipDelivery: ActionPermissions;
  modifyDeliveryApprover: ActionPermissions;
  editDeliveryDetails: ActionPermissions;
};
type ComplainManagementPermissions = {
  complainTypeStatus: ActionPermissions;
  createComplainType: ActionPermissions;
  editComplainType: ActionPermissions;
  resolveComplain: ActionPermissions;
};

interface PermissionFormValues {
  permissions: {
    professionalManagement: ProfessionalManagementPermissions;
    approverManagement: ApproverManagementPermissions;
    adminManagement: AdminManagementPermissions;
    taskManagement:TaskManagementPermissions;
    customerManagement: CustomerManagementPermissions;
    orderManagement: OrderManagementPermissions;
    deliveryManagement: DeliveryManagementPermissions;
    complainManagement: ComplainManagementPermissions;
  };
}

export const PermissionForm: React.FC = () => {
  const { control, handleSubmit } = useForm<PermissionFormValues>({
    defaultValues: {
      permissions: {
        professionalManagement: {
          createProfessional: { manager: false, executive: true, external: true, admin: true },
          viewProfessional: { manager: false, executive: true, external: true, admin: true },
          editProfessional: { manager: false, executive: true, external: true, admin: true },
          professionalAvailability: { manager: false, executive: true, external: true, admin: true },
        },
        approverManagement: {
          createApprover: { manager: false, executive: true, external: true, admin: true },
          viewApprover: { manager: false, executive: true, external: true, admin: true },
          editApprover: { manager: false, executive: true, external: true, admin: true },
          approverAvailability: { manager: false, executive: true, external: true, admin: true },
        },
        adminManagement: {
          createAdmin: { manager: false, executive: true, external: true, admin: true },
          viewAdmin: { manager: false, executive: true, external: true, admin: true },
          editAdmin: { manager: false, executive: true, external: true, admin: true },
          adminAvailability: { manager: false, executive: true, external: true, admin: true },
        },

       taskManagement: {
          createTask: { manager: false, executive: true, external: true, admin: true },
          deleteTask: { manager: false, executive: true, external: true, admin: true },
          viewTask: { manager: false, executive: true, external: true, admin: true },
          editTask: { manager: false, executive: true, external: true, admin: true },
          createNewRole: { manager: false, executive: true, external: true, admin: true },
        },
        customerManagement: {
          createCustomer: { manager: false, executive: true, external: true, admin: true },
          viewCustomer: { manager: false, executive: true, external: true, admin: true },
          editCustomer: { manager: false, executive: true, external: true, admin: true },
          customerStatus: { manager: false, executive: true, external: true, admin: true },
        },
        orderManagement: {
          createOrder: { manager: false, executive: true, external: true, admin: true },
          viewOrder: { manager: false, executive: true, external: true, admin: true },
          editOrder: { manager: false, executive: true, external: true, admin: true },
          upgradeOrder: { manager: false, executive: true, external: true, admin: true },
          netPriceEditable: { manager: false, executive: true, external: true, admin: true },
          editDelivery: { manager: false, executive: true, external: true, admin: true },
          orderStatus: { manager: false, executive: true, external: true, admin: true },
        },
        deliveryManagement: {
          modifyDeliveryApprover: { manager: false, executive: true, external: true, admin: true },
          editDeliveryDetails: { manager: false, executive: true, external: true, admin: true },
          skipDelivery: { manager: false, executive: true, external: true, admin: true },
          deliveryStatus: { manager: false, executive: true, external: true, admin: true },
        },
        complainManagement: {
          complainTypeStatus: { manager: false, executive: true, external: true, admin: true },
          createComplainType: { manager: false, executive: true, external: true, admin: true },
          editComplainType: { manager: false, executive: true, external: true, admin: true },
          resolveComplain: { manager: false, executive: true, external: true, admin: true },
        },
      },
    },
  });

  const onSubmit = (data: PermissionFormValues) => {
    console.log(data);
    // Handle form submission, like making an API call to save the data
  };

  return (
    <>
      <div className="flex items-start justify-between">
        <Heading title="Permissions Settings" description="Manage Permissions Settings" />
      </div>
      <Separator />

      <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-4">

        <div style={{ border: "1px solid orange" }} className="p-2 space-y-4">
          <div className="font-bold text-2xl text-orange-500 mt-2">Professional</div>
          <div className="flex items-center">
            <div className="w-1/5 text-center"></div>
            <div className="w-1/5 text-center font-semibold">Executive</div>
            <div className="w-1/5 text-center font-semibold">Manager</div>
            <div className="w-1/5 text-center font-semibold">Admin</div>
            <div className="w-1/5 text-center font-semibold">External</div>
          </div>
          {(['createProfessional', 'viewProfessional', 'editProfessional', 'professionalAvailability'] as const).map((action) => (
            <div key={action} className="flex items-center">
              <div className="w-1/5 font-semibold">{action.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}</div>
              {(['executive', 'manager', 'admin', 'external'] as Role[]).map((role) => (
                <div key={role} className="w-1/5 text-center">
                  <Controller
                    control={control}
                    name={`permissions.professionalManagement.${action}.${role}`}
                    render={({ field }) => (
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={(value) => field.onChange(value)}
                        aria-label={`${action} ${role}`}
                      />
                    )}
                  />
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Repeat similar blocks for other management types */}
        <div style={{ border: "1px solid orange" }} className="p-2 space-y-4">
          <div className="font-bold text-2xl text-orange-500 mt-2">Approver</div>
          <div className="flex items-center">
            <div className="w-1/5 text-center"></div>
            <div className="w-1/5 text-center font-semibold">Executive</div>
            <div className="w-1/5 text-center font-semibold">Manager</div>
            <div className="w-1/5 text-center font-semibold">Admin</div>
            <div className="w-1/5 text-center font-semibold">External</div>
          </div>
          {(['createApprover', 'viewApprover', 'editApprover', 'approverAvailability'] as const).map((action) => (
            <div key={action} className="flex items-center">
              <div className="w-1/5 font-semibold">{action.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}</div>
              {(['executive', 'manager', 'admin', 'external'] as Role[]).map((role) => (
                <div key={role} className="w-1/5 text-center">
                  <Controller
                    control={control}
                    name={`permissions.approverManagement.${action}.${role}`}
                    render={({ field }) => (
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={(value) => field.onChange(value)}
                        aria-label={`${action} ${role}`}
                      />
                    )}
                  />
                </div>
              ))}
            </div>
          ))}
        </div>    
        
        <div style={{ border: "1px solid orange" }} className="p-2 space-y-4">
          <div className="font-bold text-2xl text-orange-500 mt-2">Admin Management</div>
          <div className="flex items-center">
            <div className="w-1/5 text-center"></div>
            <div className="w-1/5 text-center font-semibold">Executive</div>
            <div className="w-1/5 text-center font-semibold">Manager</div>
            <div className="w-1/5 text-center font-semibold">Admin</div>
            <div className="w-1/5 text-center font-semibold">External</div>
          </div>
          {(['createAdmin', 'viewAdmin', 'editAdmin', 'adminAvailability'] as const).map((action) => (
            <div key={action} className="flex items-center">
              <div className="w-1/5 font-semibold">{action.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}</div>
              {(['executive', 'manager', 'admin', 'external'] as Role[]).map((role) => (
                <div key={role} className="w-1/5 text-center">
                  <Controller
                    control={control}
                    name={`permissions.adminManagement.${action}.${role}`}
                    render={({ field }) => (
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={(value) => field.onChange(value)}
                        aria-label={`${action} ${role}`}
                      />
                    )}
                  />
                </div>
              ))}
            </div>
          ))}
        </div>    
        <div style={{ border: "1px solid orange" }} className="p-2 space-y-4">
          <div className="font-bold text-2xl text-orange-500 mt-2">Task Management</div>
          <div className="flex items-center">
            <div className="w-1/5 text-center"></div>
            <div className="w-1/5 text-center font-semibold">Executive</div>
            <div className="w-1/5 text-center font-semibold">Manager</div>
            <div className="w-1/5 text-center font-semibold">Admin</div>
            <div className="w-1/5 text-center font-semibold">External</div>
          </div>
          {(['createTask', 'deleteTask', 'viewTask', 'editTask','createNewRole'] as const).map((action) => (
            <div key={action} className="flex items-center">
              <div className="w-1/5 font-semibold">{action.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}</div>
              {(['executive', 'manager', 'admin', 'external'] as Role[]).map((role) => (
                <div key={role} className="w-1/5 text-center">
                  <Controller
                    control={control}
                    name={`permissions.taskManagement.${action}.${role}`}
                    render={({ field }) => (
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={(value) => field.onChange(value)}
                        aria-label={`${action} ${role}`}
                      />
                    )}
                  />
                </div>
              ))}
            </div>
          ))}
        </div>    
        <div style={{ border: "1px solid orange" }} className="p-2 space-y-4">
          <div className="font-bold text-2xl text-orange-500 mt-2">Finance Management</div>
          <div className="flex items-center">
            <div className="w-1/5 text-center"></div>
            <div className="w-1/5 text-center font-semibold">Executive</div>
            <div className="w-1/5 text-center font-semibold">Manager</div>
            <div className="w-1/5 text-center font-semibold">Admin</div>
            <div className="w-1/5 text-center font-semibold">External</div>
          </div>
          {(['createCustomer', 'viewCustomer', 'editCustomer', 'customerStatus'] as const).map((action) => (
            <div key={action} className="flex items-center">
              <div className="w-1/5 font-semibold">{action.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}</div>
              {(['executive', 'manager', 'admin', 'external'] as Role[]).map((role) => (
                <div key={role} className="w-1/5 text-center">
                  <Controller
                    control={control}
                    name={`permissions.customerManagement.${action}.${role}`}
                    render={({ field }) => (
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={(value) => field.onChange(value)}
                        aria-label={`${action} ${role}`}
                      />
                    )}
                  />
                </div>
              ))}
            </div>
          ))}
        </div>    
        {/* <div style={{ border: "1px solid orange" }} className="p-2 space-y-4">
          <div className="font-bold text-2xl text-orange-500 mt-2">Order Management</div>
          <div className="flex items-center">
            <div className="w-1/5 text-center"></div>
            <div className="w-1/5 text-center font-semibold">Executive</div>
            <div className="w-1/5 text-center font-semibold">Manager</div>
            <div className="w-1/5 text-center font-semibold">Admin</div>
            <div className="w-1/5 text-center font-semibold">External</div>
          </div>
          {(['createOrder', 'viewOrder', 'editOrder', 'upgradeOrder','netPriceEditable','editDelivery','orderStatus'] as const).map((action) => (
            <div key={action} className="flex items-center">
              <div className="w-1/5 font-semibold">{action.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}</div>
              {(['executive', 'manager', 'admin', 'external'] as Role[]).map((role) => (
                <div key={role} className="w-1/5 text-center">
                  <Controller
                    control={control}
                    name={`permissions.orderManagement.${action}.${role}`}
                    render={({ field }) => (
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={(value) => field.onChange(value)}
                        aria-label={`${action} ${role}`}
                      />
                    )}
                  />
                </div>
              ))}
            </div>
          ))}
        </div>     */}
        {/* <div style={{ border: "1px solid orange" }} className="p-2 space-y-4">
          <div className="font-bold text-2xl text-orange-500 mt-2">Delivery Management</div>
          <div className="flex items-center">
            <div className="w-1/5 text-center"></div>
            <div className="w-1/5 text-center font-semibold">Executive</div>
            <div className="w-1/5 text-center font-semibold">Manager</div>
            <div className="w-1/5 text-center font-semibold">Admin</div>
            <div className="w-1/5 text-center font-semibold">External</div>
          </div>
          {(['modifyDeliveryApprover', 'editDeliveryDetails', 'skipDelivery', 'deliveryStatus'] as const).map((action) => (
            <div key={action} className="flex items-center">
              <div className="w-1/5 font-semibold">{action.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}</div>
              {(['executive', 'manager', 'admin', 'external'] as Role[]).map((role) => (
                <div key={role} className="w-1/5 text-center">
                  <Controller
                    control={control}
                    name={`permissions.deliveryManagement.${action}.${role}`}
                    render={({ field }) => (
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={(value) => field.onChange(value)}
                        aria-label={`${action} ${role}`}
                      />
                    )}
                  />
                </div>
              ))}
            </div>
          ))}
        </div>     */}
        

        <div style={{ border: "1px solid orange" }} className="p-2 space-y-4">
          <div className="font-bold text-2xl text-orange-500 mt-2">Complain Management</div>
          <div className="flex items-center">
            <div className="w-1/5 text-center"></div>
            <div className="w-1/5 text-center font-semibold">Executive</div>
            <div className="w-1/5 text-center font-semibold">Manager</div>
            <div className="w-1/5 text-center font-semibold">Admin</div>
            <div className="w-1/5 text-center font-semibold">External</div>
          </div>
          {(['createComplainType', 'editComplainType', 'resolveComplain', 'complainTypeStatus'] as const).map((action) => (
            <div key={action} className="flex items-center">
              <div className="w-1/5 font-semibold">{action.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}</div>
              {(['executive', 'manager', 'admin', 'external'] as Role[]).map((role) => (
                <div key={role} className="w-1/5 text-center">
                  <Controller
                    control={control}
                    name={`permissions.complainManagement.${action}.${role}`}
                    render={({ field }) => (
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={(value) => field.onChange(value)}
                        aria-label={`${action} ${role}`}
                      />
                    )}
                  />
                </div>
              ))}
            </div>
          ))}
        </div>  
            <Button type="submit">Save Permissions</Button>
      </form>
    </>
  );
};

export default PermissionForm;