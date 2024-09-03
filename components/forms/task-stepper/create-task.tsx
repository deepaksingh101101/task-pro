'use client';

import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Heading } from '@/components/ui/heading';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { CalendarIcon, Trash } from 'lucide-react';
import { useParams, useRouter } from 'next/navigation';
import { useState } from 'react';
import { SubmitHandler, useForm, Controller } from 'react-hook-form';
import { cn } from '@/lib/utils';
import { Textarea } from '@/components/ui/textarea';
import ReactSelect from 'react-select';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Calendar } from '@/components/ui/calendar';
import { format } from 'date-fns';

interface TaskManagementFormType {
  initialData: any | null;
}

const taskFormSchema = z.object({
  taskId: z.string().min(1, 'Task ID is required'),
  title: z.string().min(1, 'Title is required'),
  taskName: z.string().min(1, 'Task Name is required'),
  taskType: z.string().min(1, 'Task Type is required'),
  dueDate: z.date({
    required_error: "Due Date is required.",
  }),
  assignedTo: z.string().min(1, 'Assigned To is required'),
  assignedBy: z.string().min(1, 'Assigned By is required'),
  assignedDate: z.date({
    required_error: "Assigned Date is required.",
  }),
  Status: z.string().min(1, 'Status is required'),
  maximumCostAssigned: z.number().positive('Maximum Cost Assigned must be greater than zero'),
  rewards: z.number().optional(),
  feedback: z.string().optional(),
  description: z.string().optional(),
  subtasks: z.array(z.string()).optional(),
  address: z.string().optional(),
  city: z.string().optional(),
  pincode: z.string().optional(),
  country: z.string().optional(),
  state: z.string().optional(),
  tag: z.enum(['Urban', 'Rural']).optional(),
  ageRange:  z.enum(['18-25', '26-35', '36-50', '50+']).optional(), 
  gender:  z.enum(['Male', 'Female', 'Other']).optional(),
  nationality: z.array(z.string()).optional(),
  language: z.string().optional(),
  taskCompletionHistory: z.string().optional(),
  taskRatings: z.string().optional(),
});

export const CreateTask: React.FC<TaskManagementFormType> = ({ initialData }) => {
  const params = useParams();
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const title = initialData ? 'Edit Task' : 'Create New Task';
  const description = initialData ? 'Edit the Task details.' : 'To create a new Task, fill in the required information.';
  const action = initialData ? 'Save changes' : 'Create';

  const form = useForm({
    resolver: zodResolver(taskFormSchema),
    mode: 'onChange',
    defaultValues: {
      taskId: '',
      title: '',
      taskName: '',
      taskType: '',
      dueDate: new Date(),
      assignedTo: '',
      assignedBy: '',
      assignedDate: new Date(),
      Status: '',
      maximumCostAssigned: 0,
      rewards: undefined,
      feedback: '',
      description: '',
      subtasks: [] as string[],
      address: '',
      city: '',
      pincode: '',
      country: '',
      state: '',
      tag: undefined,
      nationality: '', 
      ageRange: '',
      language : '', 
      gender: '',
      occupation: '',
      educationLevel:'',
      value: undefined,
      taskCompletionHistory: '',
      taskRatings: ''
    }
  });

  const { control, handleSubmit, setValue, formState: { errors } } = form;

  const onSubmit: SubmitHandler<typeof taskFormSchema._type> = async (data) => {
    try {
      setLoading(true);
      if (initialData) {
        // await axios.post(`/api/tasks/edit-task/${initialData._id}`, data);
      } else {
        // const res = await axios.post(`/api/tasks/create-task`, data);
        // console.log("task", res);
      }
      // router.refresh();
      // router.push(`/dashboard/tasks`);
    } catch (error: any) {
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="flex items-center justify-between">
        <Heading title={title} description={description} />
        {initialData && (
          <Button
            disabled={loading}
            variant="destructive"
            size="sm"
          >
            <Trash className="h-4 w-4" />
          </Button>
        )}
      </div>
      <Separator />
      <Form {...form}>
        <form onSubmit={handleSubmit(onSubmit)} className="w-full space-y-8">
          {/* Task Details Section */}
          <div className="space-y-4 border  border-gray-300 p-4 rounded-md">
            <h2 className="text-xl font-semibold  bg-gray-100">Task Details</h2>
            <div className="w-full gap-8 md:grid md:grid-cols-3">
              <Controller
                control={form.control}
                name="taskId"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Task ID</FormLabel>
                    <FormControl>
                      <Input {...field} disabled={loading} />
                    </FormControl>
                    <FormMessage>{errors.taskId?.message}</FormMessage>
                  </FormItem>
                )}
              />

              <Controller
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Title</FormLabel>
                    <FormControl>
                      <Input {...field} disabled={loading} />
                    </FormControl>
                    <FormMessage>{errors.title?.message}</FormMessage>
                  </FormItem>
                )}
              />

              <Controller
                control={form.control}
                name="taskName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Task Name</FormLabel>
                    <FormControl>
                      <Input {...field} disabled={loading} />
                    </FormControl>
                    <FormMessage>{errors.taskName?.message}</FormMessage>
                  </FormItem>
                )}
              />

              <Controller
                control={form.control}
                name="taskType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Task Type</FormLabel>
                    <FormControl>
                      <Input {...field} disabled={loading} />
                    </FormControl>
                    <FormMessage>{errors.taskType?.message}</FormMessage>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="dueDate"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel>Due Date</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant={"outline"}
                            className={cn(
                              "w-[240px] pl-3 text-left font-normal",
                              !field.value && "text-muted-foreground"
                            )}
                          >
                            {field.value ? (
                              format(field.value, "dd MMM yyyy")
                            ) : (
                              <span>Pick a date</span>
                            )}
                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={field.value}
                          onSelect={field.onChange}
                          disabled={(date) =>
                            date > new Date() || date < new Date("1900-01-01")
                          }
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                    <FormMessage>{errors.dueDate?.message}</FormMessage>
                  </FormItem>
                )}
              />

              <Controller
                control={form.control}
                name="assignedTo"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Assigned To</FormLabel>
                    <FormControl>
                      <Input {...field} disabled={loading} />
                    </FormControl>
                    <FormMessage>{errors.assignedTo?.message}</FormMessage>
                  </FormItem>
                )}
              />

              <Controller
                control={form.control}
                name="assignedBy"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Assigned By</FormLabel>
                    <FormControl>
                      <Input {...field} disabled={loading} />
                    </FormControl>
                    <FormMessage>{errors.assignedBy?.message}</FormMessage>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="assignedDate"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel>Assigned Date</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant={"outline"}
                            className={cn(
                              "w-[240px] pl-3 text-left font-normal",
                              !field.value && "text-muted-foreground"
                            )}
                          >
                            {field.value ? (
                              format(field.value, "dd MMM yyyy")
                            ) : (
                              <span>Pick a date</span>
                            )}
                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={field.value}
                          onSelect={field.onChange}
                          disabled={(date) =>
                            date > new Date() || date < new Date("1900-01-01")
                          }
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                    <FormMessage>{errors.assignedDate?.message}</FormMessage>
                  </FormItem>
                )}
              />

              <Controller
                control={form.control}
                name="Status"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Status</FormLabel>
                    <FormControl>
                      <Input {...field} disabled={loading} />
                    </FormControl>
                    <FormMessage>{errors.Status?.message}</FormMessage>
                  </FormItem>
                )}
              />

              <Controller
                control={form.control}
                name="maximumCostAssigned"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Maximum Cost Assigned</FormLabel>
                    <FormControl>
                      <Input type="number" {...field} disabled={loading} />
                    </FormControl>
                    <FormMessage>{errors.maximumCostAssigned?.message}</FormMessage>
                  </FormItem>
                )}
              />

              <Controller
                control={form.control}
                name="rewards"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Rewards</FormLabel>
                    <FormControl>
                      <Input type="number" {...field} disabled={loading} />
                    </FormControl>
                    <FormMessage>{errors.rewards?.message}</FormMessage>
                  </FormItem>
                )}
              />

              <Controller
                control={form.control}
                name="feedback"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Feedback</FormLabel>
                    <FormControl>
                      <Textarea {...field} disabled={loading} />
                    </FormControl>
                    <FormMessage>{errors.feedback?.message}</FormMessage>
                  </FormItem>
                )}
              />

              <Controller
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <Textarea {...field} disabled={loading} />
                    </FormControl>
                    <FormMessage>{errors.description?.message}</FormMessage>
                  </FormItem>
                )}
              />

              <Controller
                control={form.control}
                name="subtasks"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Subtasks</FormLabel>
                    <FormControl>
                      <Textarea
                        {...field}
                        placeholder="Enter subtasks, separated by commas"
                        disabled={loading}
                      />
                    </FormControl>
                    <FormMessage>{errors.subtasks?.message}</FormMessage>
                  </FormItem>
                )}
              />
               <Controller
                control={form.control}
                name="taskCompletionHistory"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Task Completion History</FormLabel>
                    <FormControl>
                      <Input {...field} disabled={loading} />
                    </FormControl>
                    <FormMessage>{errors.taskType?.message}</FormMessage>
                  </FormItem>
                )}
/>
                <Controller
                 control={form.control}
                    name="taskRatings"
                  render={({ field }) => (
                <FormItem>
                 <FormLabel>Task Ratings</FormLabel>
             <FormControl>
                <Input {...field} disabled={loading} />
                </FormControl>
             <FormMessage>{errors.taskType?.message}</FormMessage>
    </FormItem>
  )}
/>
            </div>
          </div>

          {/* Address Details Section */}
          <div className="space-y-4 border  border-gray-300 p-4 rounded-md">
            <h2 className="text-xl font-semibold  bg-gray-100">Geographic Criteria</h2>
            <div className="w-full gap-8 md:grid md:grid-cols-2">
              <Controller
                control={form.control}
                name="address"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Address</FormLabel>
                    <FormControl>
                      <Input {...field} disabled={loading} />
                    </FormControl>
                    <FormMessage>{errors.address?.message}</FormMessage>
                  </FormItem>
                )}
              />

              <Controller
                control={form.control}
                name="city"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>City/Town</FormLabel>
                    <FormControl>
                      <Input {...field} disabled={loading} />
                    </FormControl>
                    <FormMessage>{errors.city?.message}</FormMessage>
                  </FormItem>
                )}
              />

              <Controller
                control={form.control}
                name="state"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>State</FormLabel>
                    <FormControl>
                      <Input {...field} disabled={loading} />
                    </FormControl>
                    <FormMessage>{errors.state?.message}</FormMessage>
                  </FormItem>
                )}
              />

              <Controller
                control={form.control}
                name="pincode"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Pincode</FormLabel>
                    <FormControl>
                      <Input {...field} disabled={loading} />
                    </FormControl>
                    <FormMessage>{errors.pincode?.message}</FormMessage>
                  </FormItem>
                )}
              />

              <Controller
                control={form.control}
                name="country"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Country</FormLabel>
                    <FormControl>
                      <Input {...field} disabled={loading} />
                    </FormControl>
                    <FormMessage>{errors.country?.message}</FormMessage>
                  </FormItem>
                )}
              />

              <Controller
                control={form.control}
                name="tag"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Tag</FormLabel>
                    <FormControl>
                      <ReactSelect
                        {...field}
                        options={[
                          { value: 'Urban', label: 'Urban' },
                          { value: 'Rural', label: 'Rural' }
                        ]}
                        isDisabled={loading}
                      />
                    </FormControl>
                    {/* <FormMessage>{errors.tag?.message}</FormMessage> */}
                  </FormItem>
                )}
              />
            </div>
          </div>
          <div className="space-y-4 border  border-gray-300 p-4 rounded-md">
          <h2 className="text-xl font-semibold bg-gray-100">Demographic Criteria</h2>
  <div className="w-full gap-8 md:grid md:grid-cols-2">
    <Controller
      control={form.control}
      name="ageRange"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Age Range</FormLabel>
          <FormControl>
            <ReactSelect
              {...field}
              options={[
                { value: '18-25', label: '18-25' },
                { value: '26-35', label: '26-35' },
                { value: '36-50', label: '36-50' },
                { value: '50+', label: '50+' }
              ]}
              isDisabled={loading}
            />
          </FormControl>
          <FormMessage>{errors.ageRange?.message}</FormMessage>
        </FormItem>
      )}
    />
    <Controller
      control={form.control}
      name="gender"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Gender</FormLabel>
          <FormControl>
            <ReactSelect
              {...field}
              options={[
                { value: 'Male', label: 'Male' },
                { value: 'Female', label: 'Female' },
                { value: 'Other', label: 'Other' }
              ]}
              isDisabled={loading}
            />
          </FormControl>
          <FormMessage>{errors.gender?.message}</FormMessage>
        </FormItem>
      )}
    />
    <Controller
      control={form.control}
      name="nationality"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Nationality</FormLabel>
          <FormControl>
            <ReactSelect
              {...field}
              options={[
                { value: 'indian', label: 'Indian' },
                { value: 'american', label: 'American' },
                { value: 'british', label: 'British' },
                // Add more nationalities as needed
              ]}
              isDisabled={loading}
              isMulti
            />
          </FormControl>
          <FormMessage>{errors.nationality?.message}</FormMessage>
        </FormItem>
      )}
    />
    <Controller
      control={form.control}
      name="language"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Language</FormLabel>
          <FormControl>
            <ReactSelect
              {...field}
              options={[
                { value: 'english', label: 'English' },
                { value: 'hindi', label: 'Hindi' },
                { value: 'spanish', label: 'Spanish' },
                // Add more languages as needed
              ]}
              isDisabled={loading}
              isMulti
            />
          </FormControl>
          <FormMessage>{errors.language?.message}</FormMessage>
        </FormItem>
      )}
    />
    <Controller
      control={form.control}
      name="occupation"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Occupation</FormLabel>
          <FormControl>
            <ReactSelect
              {...field}
              options={[
                { value: 'engineer', label: 'Engineer' },
                { value: 'doctor', label: 'Doctor' },
                { value: 'teacher', label: 'Teacher' },
                // Add more occupations as needed
              ]}
              isDisabled={loading}
              isMulti
            />
          </FormControl>
          <FormMessage>{errors.occupation?.message}</FormMessage>
        </FormItem>
      )}
    />
    <Controller
      control={form.control}
      name="educationLevel"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Education Level</FormLabel>
          <FormControl>
            <ReactSelect
              {...field}
              options={[
                { value: 'high_school', label: 'High School' },
                { value: 'bachelors', label: "Bachelor's Degree" },
                { value: 'masters', label: "Master's Degree" },
                { value: 'phd', label: 'PhD' }
              ]}
              isDisabled={loading}
            />
          </FormControl>
          <FormMessage>{errors.educationLevel?.message}</FormMessage>
        </FormItem>
      )}
    />
  </div>
</div>
          {/* Form Actions */}
          <div className="flex justify-end">
            <Button
              type="submit"
              disabled={loading}
              className="ml-4 w-full"
            >
              {action}
            </Button>
          </div>
        </form>
      </Form>
    </>
  );
};
