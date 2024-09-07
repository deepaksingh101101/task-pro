'use client';

import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import { CalendarIcon, Edit, Trash } from "lucide-react";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import ReactSelect from 'react-select';

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Heading } from "@/components/ui/heading";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface ProfileFormType {
  initialData: any | null;
  categories?: any;
  isEnabled?: boolean;

}

const FormSchema = z.object({
  userId: z.string().min(1, "User ID is required"),
  firstName: z.string().min(1, "First Name is required"),
  lastName: z.string().min(1, "Last Name is required"),
  contact: z.string().min(1, "Contact is required"),
  address: z.string().min(1, "Address is required"),
  roleAssignmentDate: z.string().min(1, "Role Assignment Date is required"),
  verificationStatus: z.string().min(1, "Verification Status is required"),
  lastLogin: z.string().min(1, "Last Login is required"),
  activityStatus: z.string().min(1, "Activity Status is required"),
  rewardsPoints: z.number().min(0, "Rewards Points must be a positive number"),
  accountStatus: z.string().min(1, "Account Status is required"),
});

export const CreateProfileOne: React.FC<ProfileFormType> = ({
  initialData,
  isEnabled,
  categories,
}) => {
  const params = useParams();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const title = initialData && isEnabled ? "View User" : initialData ? "Edit User" : "Create User";
  const description = initialData && isEnabled 
    ? "View the user profile." : initialData ? "Edit the user profile."
    : "To create a new user, we first need some basic information.";
  const textMessage = initialData ? "User updated." : "User created.";
  const action = initialData ? "Save changes" : "Create";

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    mode: 'onChange',
    defaultValues: initialData || {
      userId: '',                // Corresponds to the userId in the schema
      firstName: '',             // Corresponds to the firstName in the schema
      lastName: '',              // Corresponds to the lastName in the schema
      contact: '',               // Corresponds to the contact in the schema
      address: '',               // Corresponds to the address in the schema
      roleAssignmentDate: '',    // Corresponds to roleAssignmentDate in the schema
      verificationStatus: '',    // Corresponds to verificationStatus in the schema
      lastLogin: '',             // Corresponds to lastLogin in the schema
      activityStatus: '',        // Corresponds to activityStatus in the schema
      rewardsPoints: 0,          // Corresponds to rewardsPoints in the schema
      accountStatus: '',         // Corresponds to accountStatus in the schema
    },
  });

  const {
    control,
    formState: { errors },
    setValue,
    watch,
  } = form;

  const onSubmit = async (data: z.infer<typeof FormSchema>) => {
    try {
      setLoading(true);
      if (initialData) {
        // Update existing user
        // await axios.post(`/api/users/edit/${initialData._id}`, data);
      } else {
        // Create new user
        // const res = await axios.post(`/api/users/create`, data);
        // console.log("User", res);
      }
      router.refresh();
      router.push(`/dashboard/users`);
    } catch (error: any) {
      // Handle error
    } finally {
      setLoading(false);
    }
  };

  const onDelete = async () => {
    try {
      setLoading(true);
      // Delete user
      // await axios.delete(`/api/users/${params.userId}`);
      router.refresh();
      router.push(`/dashboard/users`);
    } catch (error: any) {
      // Handle error
    } finally {
      setLoading(false);
      setOpen(false);
    }
  };

  const processForm = (data: z.infer<typeof FormSchema>) => {
    // Handle form submission
    // form.reset();
  };

  const cities = [
    { id: "Gurgaon", name: "Gurgaon" },
    { id: "Delhi", name: "Delhi" },
    { id: "Noida", name: "Noida" },
    { id: "Faridabad", name: "Faridabad" },
    { id: "Ghaziabad", name: "Ghaziabad" },
    { id: "Sahibabad", name: "Sahibabad" },
  ];

  const [cityOptions, setCityOptions] = useState(cities);
  const [isCityModalOpen, setIsCityModalOpen] = useState(false);
  const [newCity, setNewCity] = useState('');

  const openCityModal = () => {
    setIsCityModalOpen(true);
  };

  const closeCityModal = () => {
    setIsCityModalOpen(false);
  };

  const addCity = () => {
    if (newCity) {
      setCityOptions([...cityOptions, { id: newCity.toLowerCase(), name: newCity }]);
      setNewCity('');
    }
  };

  const deleteCity = (index: number) => {
    setCityOptions(cityOptions.filter((_, i) => i !== index));
  };

  return (
    <>
      <div className="flex items-center justify-between">
        <Heading title={title} description={description} />
        {initialData && (
          <Button
            disabled={isEnabled || loading}
            variant="destructive"
            size="sm"
            onClick={() => setOpen(true)}
          >
            <Trash className="h-4 w-4" />
          </Button>
        )}
      </div>
      <Separator />
      <Dialog open={isCityModalOpen} onOpenChange={(open) => !open && closeCityModal()}>
        <DialogContent >
          <DialogHeader>
            <DialogTitle>Manage Cities</DialogTitle>
            <DialogDescription>You can manage cities here.</DialogDescription>
          </DialogHeader>
          <div>
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead className="bg-red-200">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-400">
                    City
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-400">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                {cityOptions.map((city, cityIndex) => (
                  <tr key={cityIndex}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">
                      {city.name}
                    </td>
                    <td className="px-6 flex justify-end py-4 whitespace-nowrap text-right text-sm font-medium">
                      <Trash onClick={() => deleteCity(cityIndex)} className="cursor-pointer text-red-500" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="flex mt-4">
              <Input
                type="text"
                placeholder="Add new city"
                value={newCity}
                onChange={(e) => setNewCity(e.target.value)}
              />
              <Button onClick={addCity} className="ml-2">
                Add
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(processForm)}
          className="w-full space-y-8"
        >
          <div className="relative mb-4 gap-8 rounded-md border p-4 md:grid md:grid-cols-3">
            <FormField
              control={form.control}
              name="userId"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>User ID</FormLabel>
                  <FormControl>
                    <Input disabled={isEnabled || loading} placeholder="Enter User ID" {...field} />
                  </FormControl>
                  <FormMessage>{errors.userId?.message}</FormMessage>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>First Name</FormLabel>
                  <FormControl>
                    <Input disabled={isEnabled || loading} placeholder="John" {...field} />
                  </FormControl>
                  <FormMessage>{errors.firstName?.message}</FormMessage>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Last Name</FormLabel>
                  <FormControl>
                    <Input disabled={isEnabled || loading} placeholder="Doe" {...field} />
                  </FormControl>
                  <FormMessage>{errors.lastName?.message}</FormMessage>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="contact"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Contact</FormLabel>
                  <FormControl>
                    <Input disabled={isEnabled || loading} placeholder="123-456-7890" {...field} />
                  </FormControl>
                  <FormMessage>{errors.contact?.message}</FormMessage>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="address"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Address</FormLabel>
                  <FormControl>
                    <Input disabled={isEnabled || loading} placeholder="123 Main St" {...field} />
                  </FormControl>
                  <FormMessage>{errors.address?.message}</FormMessage>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="roleAssignmentDate"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Role Assignment Date</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Input
                          disabled={isEnabled || loading}
                          placeholder="Select Date"
                          value={field.value ? format(new Date(field.value), 'yyyy-MM-dd') : ''}
                        />
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent>
                      <Controller
                        name="roleAssignmentDate"
                        control={control}
                        render={({ field }) => (
                          <Calendar
                            mode="single"
                            // selected={field.value ? new Date(field.value) : null}
                            onSelect={(date) => {
                              if (date) {
                                field.onChange(format(date, 'yyyy-MM-dd'));
                              }
                            }}
                          />
                        )}
                      />
                    </PopoverContent>
                  </Popover>
                  <FormMessage>{errors.roleAssignmentDate?.message}</FormMessage>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="verificationStatus"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Verification Status</FormLabel>
                  <Select
                    value={field.value}
                    onValueChange={(value) => field.onChange(value)}
                    disabled={isEnabled || loading}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select Verification Status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Verified">Verified</SelectItem>
                      <SelectItem value="Pending">Pending</SelectItem>
                      <SelectItem value="Rejected">Rejected</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage>{errors.verificationStatus?.message}</FormMessage>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lastLogin"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Last Login</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Input
                          disabled={isEnabled || loading}
                          placeholder="Select Date"
                          value={field.value ? format(new Date(field.value), 'yyyy-MM-dd') : ''}
                        />
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent>
                      <Controller
                        name="lastLogin"
                        control={control}
                        render={({ field }) => (
                          <Calendar
                            mode="single"
                            // selected={field.value ? new Date(field.value) : null}
                            onSelect={(date) => {
                              if (date) {
                                field.onChange(format(date, 'yyyy-MM-dd'));
                              }
                            }}
                          />
                        )}
                      />
                    </PopoverContent>
                  </Popover>
                  <FormMessage>{errors.lastLogin?.message}</FormMessage>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="activityStatus"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Activity Status</FormLabel>
                  <Select
                    value={field.value}
                    onValueChange={(value) => field.onChange(value)}
                    disabled={isEnabled || loading}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select Activity Status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Active">Active</SelectItem>
                      <SelectItem value="Inactive">Inactive</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage>{errors.activityStatus?.message}</FormMessage>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="rewardsPoints"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Rewards Points</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      disabled={isEnabled || loading}
                      placeholder="0"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage>{errors.rewardsPoints?.message}</FormMessage>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="accountStatus"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Account Status</FormLabel>
                  <Select
                    value={field.value}
                    onValueChange={(value) => field.onChange(value)}
                    disabled={isEnabled || loading}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select Account Status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Active">Active</SelectItem>
                      <SelectItem value="Suspended">Suspended</SelectItem>
                      <SelectItem value="Closed">Closed</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage>{errors.accountStatus?.message}</FormMessage>
                </FormItem>
              )}
            />
          </div>

         {( !isEnabled) && <Button
            disabled={isEnabled || loading}
            type="submit"
            className="w-full"
            onClick={() => form.handleSubmit(onSubmit)()}
          >
            {action}
          </Button>}
        </form>
      </Form>
    </>
  );
};
