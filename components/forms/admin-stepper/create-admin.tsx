'use client';

import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Heading } from '@/components/ui/heading';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { useState } from 'react';

interface AdminFormType {
  initialData: any | null;
}

const adminFormSchema = z.object({
  adminID: z.string().min(1, 'Admin ID is required'),
  firstName: z.string().min(1, 'First Name is required'),
  lastName: z.string().min(1, 'Last Name is required'),
  email: z.string().email('Invalid email format').min(1, 'Email is required'),
  role: z.string().min(1, 'Role is required'),
  department: z.string().min(1, 'Department is required'),
  status: z.string().min(1, 'Status is required'),
  lastLogin: z.date({
    required_error: 'Last Login date is required.',
  }),
  permissions: z.string().min(1, 'Permissions are required'),
});

export const CreateAdminForm: React.FC<AdminFormType> = ({ initialData }) => {
  const [loading, setLoading] = useState(false);
  const form = useForm({
    resolver: zodResolver(adminFormSchema),
    defaultValues: initialData || {
      adminID: '',
      firstName: '',
      lastName: '',
      email: '',
      role: '',
      department: '',
      status: '',
      lastLogin: new Date(),
      permissions: '',
    },
  });

  const { control, handleSubmit, formState: { errors } } = form;

  const onSubmit: SubmitHandler<typeof adminFormSchema._type> = async (data) => {
    try {
      setLoading(true);
      if (initialData) {
        // Update existing admin
      } else {
        // Create new admin
      }
      // Refresh or redirect after submission
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const renderErrorMessage = (error: any) => {
    if (!error) return null;
    if (typeof error === 'string') return error;
    if (error.message) return error.message;
    return null;
  };

  return (
    <div className="container mx-auto p-4">
      <Heading title={initialData ? 'Edit Admin' : 'Create Admin'} description="Fill in the details below" />
      <Separator />
      <Form {...form}>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-3">
            <FormField
              control={control}
              name="adminID"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Admin ID</FormLabel>
                  <FormControl>
                    <Input type="text" disabled={loading} placeholder="Enter Admin ID" {...field} />
                  </FormControl>
                  <FormMessage>{renderErrorMessage(errors.adminID)}</FormMessage>
                </FormItem>
              )}
            />
            <FormField
              control={control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>First Name</FormLabel>
                  <FormControl>
                    <Input type="text" disabled={loading} placeholder="Enter First Name" {...field} />
                  </FormControl>
                  <FormMessage>{renderErrorMessage(errors.firstName)}</FormMessage>
                </FormItem>
              )}
            />
            <FormField
              control={control}
              name="lastName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Last Name</FormLabel>
                  <FormControl>
                    <Input type="text" disabled={loading} placeholder="Enter Last Name" {...field} />
                  </FormControl>
                  <FormMessage>{renderErrorMessage(errors.lastName)}</FormMessage>
                </FormItem>
              )}
            />
            <FormField
              control={control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input type="email" disabled={loading} placeholder="Enter Email" {...field} />
                  </FormControl>
                  <FormMessage>{renderErrorMessage(errors.email)}</FormMessage>
                </FormItem>
              )}
            />
            <FormField
              control={control}
              name="role"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Role</FormLabel>
                  <FormControl>
                    <Input type="text" disabled={loading} placeholder="Enter Role" {...field} />
                  </FormControl>
                  <FormMessage>{renderErrorMessage(errors.role)}</FormMessage>
                </FormItem>
              )}
            />
            <FormField
              control={control}
              name="department"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Department</FormLabel>
                  <FormControl>
                    <Input type="text" disabled={loading} placeholder="Enter Department" {...field} />
                  </FormControl>
                  <FormMessage>{renderErrorMessage(errors.department)}</FormMessage>
                </FormItem>
              )}
            />
            <FormField
              control={control}
              name="status"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Status</FormLabel>
                  <FormControl>
                    <Input type="text" disabled={loading} placeholder="Enter Status" {...field} />
                  </FormControl>
                  <FormMessage>{renderErrorMessage(errors.status)}</FormMessage>
                </FormItem>
              )}
            />
            <FormField
              control={control}
              name="lastLogin"
              render={({ field }) => (
                <FormItem >
                  <FormLabel>Last Login</FormLabel>
                  <FormControl>
                    <Input type="date" disabled={loading} {...field} />
                  </FormControl>
                  <FormMessage>{renderErrorMessage(errors.lastLogin)}</FormMessage>
                </FormItem>
              )}
            />
            <FormField
              control={control}
              name="permissions"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Permissions</FormLabel>
                  <FormControl>
                    <Input type="text" disabled={loading} placeholder="Enter Permissions" {...field} />
                  </FormControl>
                  <FormMessage>{renderErrorMessage(errors.permissions)}</FormMessage>
                </FormItem>
              )}
            />
          </div>
          <Button type="submit" disabled={loading}>
            {initialData ? 'Save Changes' : 'Create Admin'}
          </Button>

        </form>
      </Form>
    </div>
  );
};
