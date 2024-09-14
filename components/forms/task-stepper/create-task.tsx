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
  isEnabled?: boolean;
}

const taskFormSchema = z.object({
  taskId: z.string().min(1, 'Task ID is required'),
  title: z.string().min(1, 'Title is required'),
  taskName: z.string().min(1, 'Task Name is required'),
  taskType: z.string().min(1, 'Task Type is required'),
  dueDateProfessional: z.date({
    required_error: "Due Date is required.",
  }),
  dueDateApprover: z.date({
    required_error: "Due Date is required.",
  }),
  assignedTo: z.string().min(1, 'Assigned To is required'),
  assignedBy: z.string().min(1, 'Assigned By is required'),
  assignedDate: z.date({
    required_error: "Assigned Date is required.",
  }),
  Status: z.string().min(1, 'Status is required'),
 
  maximumCostAssignedProfessional: z.number().positive('Maximum Cost Assigned must be greater than zero'),
  maximumCostAssignedApprover: z.number().positive('Maximum Cost Assigned must be greater than zero'),
  rewards: z.number().optional(),
  quantity: z.number().optional(),
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
  taskCompletionHistoryProfessional: z.number().optional(),
  taskRatingsProfessional: z.number().optional(),
  industryExperienceProfessional: z.number().optional(),
  taskCompletionHistoryApprover: z.number().optional(),
  taskRatingsApprover: z.number().optional(),
  industryExperienceApprover: z.number().optional(),
  timeAvailability:  z.enum(['6-8am', '8-2pm', '4-9pm']).optional(),
  time: z.enum(['Full-Time', 'Part-Time']).optional(),
  immediateAvailability: z.enum(['Yes', 'No']).optional(),
  annualIncomeProfessional: z.number(),
  annualIncomeApprover: z.number()

});

export const CreateTask: React.FC<TaskManagementFormType> = ({ initialData, isEnabled}) => {
  const params = useParams();
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const title = initialData && isEnabled ? "View Task" : initialData ? "Edit Task" : "Create New Task";
  const description = initialData && isEnabled 
    ? "View the Task details." : initialData ? "Edit the Task details."
    : "To create a new Task, fill in the required information.";
 
  const action = initialData ? 'Save changes' : 'Create';

  const form = useForm({
    resolver: zodResolver(taskFormSchema),
    mode: 'onChange',
    defaultValues: initialData ||{
      taskId: '',
      title: '',
      taskName: '',
      taskType: '',
      dueDateProfessional: new Date(),
      dueDateApprover: new Date(),
      assignedToProfessional: '',
      assignedByProfessional: '',
      assignedToApprover: '',
      assignedByApprover: '',
      assignedDateProfessional: new Date(),
      assignedDateApprover: new Date(),
     completedDateProfessional: new Date(),
      complatedDateApprover: new Date(),
      Status: '',
      maximumCostAssignedProfessional: 0,
      maximumCostAssignedApprover: 0,
      rewards: undefined,
      quantity: undefined,
      feedbackProfessional: '',
      feedbackApprover: '',
      description: '',
      subtasks: [] as string[],
      address: '',
      city: '',
      pincode: '',
      country: '',
      state: '',
      tag: undefined,
      nationality: undefined, 
      ageRange: undefined,
      language : undefined, 
      gender: undefined,
      occupation: undefined,
      educationLevel:undefined,
      value: undefined,
      taskCompletionHistoryProfessional: undefined,
      taskRatingsProfessional: undefined,
      industryExperienceProfessional: undefined,
      taskCompletionHistoryApprover: undefined,
      taskRatingsApprover: undefined,
      industryExperienceApprover: undefined,
      timeAvailability: undefined,
      time: undefined,
      immediateAvailability: undefined,
      annualIncomeProfessional: undefined,
      annualIncomeApprover: undefined

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
            disabled={isEnabled || loading}
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
          <div className="space-y-4 border  border-orange-300 p-4 rounded-md">
            <h2 className="text-xl font-semibold  bg-orange-300">Task Details</h2>
            <div className="w-full gap-8 md:grid md:grid-cols-3">
              <Controller
                control={form.control}
                name="taskId"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Task ID</FormLabel>
                    <FormControl>
                      <Input {...field} disabled={isEnabled || loading} />
                    </FormControl>
                    <FormMessage>{errors.taskId?.message?.toString()}</FormMessage>
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
                      <Input {...field} disabled={isEnabled || loading} />
                    </FormControl>
                    <FormMessage>{errors.taskName?.message?.toString()}</FormMessage>
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
                      <Input {...field} disabled={isEnabled || loading} />
                    </FormControl>
                    <FormMessage>{errors.taskType?.message?.toString()}</FormMessage>
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
                        disabled={isEnabled || loading}
                      />
                    </FormControl>
                    <FormMessage>{errors.subtasks?.message?.toString()}</FormMessage>
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
                      <Input {...field} disabled={isEnabled || loading} />
                    </FormControl>
                    <FormMessage>{errors.Status?.message?.toString()}</FormMessage>
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
                      <Input type="number" {...field} disabled={isEnabled || loading} />
                    </FormControl>
                    <FormMessage>{errors.rewards?.message?.toString()}</FormMessage>
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
                      <Textarea {...field} disabled={isEnabled || loading} />
                    </FormControl>
                    <FormMessage>{errors.description?.message?.toString()}</FormMessage>
                  </FormItem>
                )}
              />

<Controller
                control={form.control}
                name="quantity"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Task Quantity</FormLabel>
                    <FormControl>
                      <Input type="number" {...field} disabled={isEnabled || loading} />
                    </FormControl>
                    <FormMessage>{errors.rewards?.message?.toString()}</FormMessage>
                  </FormItem>
                )}
              />

             

            
            </div>
          </div>
          {/* Address Details Section */}
          <div className="space-y-4 border  border-orange-300 p-4 rounded-md">
            <h2 className="text-xl font-semibold  bg-orange-300">Geographic Criteria</h2>
            <div className="w-full gap-8 md:grid md:grid-cols-2">
            <Controller
                control={form.control}
                name="pincode"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Pincode</FormLabel>
                    <FormControl>
                      <Input {...field} disabled={isEnabled || loading} />
                    </FormControl>
                    <FormMessage>{errors.pincode?.message?.toString()}</FormMessage>
                  </FormItem>
                )}
              />
              <Controller
                control={form.control}
                name="address"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Address</FormLabel>
                    <FormControl>
                      <Input {...field} disabled={isEnabled || loading} />
                    </FormControl>
                    <FormMessage>{errors.address?.message?.toString()}</FormMessage>
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
                      <Input {...field} disabled={isEnabled || loading} />
                    </FormControl>
                    <FormMessage>{errors.city?.message?.toString()}</FormMessage>
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
                      <Input {...field} disabled={isEnabled || loading} />
                    </FormControl>
                    <FormMessage>{errors.state?.message?.toString()}</FormMessage>
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
                      <Input {...field} disabled={isEnabled || loading} />
                    </FormControl>
                    <FormMessage>{errors.country?.message?.toString()}</FormMessage>
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
                        isDisabled={isEnabled || loading}
                      />
                    </FormControl>
                    {/* <FormMessage>{errors.tag?.message}</FormMessage> */}
                  </FormItem>
                )}
              />
            </div>
          </div>
           {/* Demographic criteria */}
          <div className="space-y-4 border  border-orange-300 p-4 rounded-md">
          <h2 className="text-xl font-semibold bg-orange-300">Demographic Criteria</h2>
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
              isDisabled={isEnabled || loading}
            />
          </FormControl>
          
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
              isDisabled={isEnabled || loading}
            />
          </FormControl>
    
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
              isDisabled={isEnabled || loading}
              
            />
          </FormControl>

          
         
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
              isDisabled={isEnabled || loading}
              isMulti
            />
          </FormControl>
       
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
              isDisabled={isEnabled || loading}
              
            />
          </FormControl>
          
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
              isDisabled={isEnabled || loading}
            />
          </FormControl>
         
        </FormItem>
      )}
    />
  </div>
          </div>
           {/*Experience-based criteria */}
          <div className="space-y-4 border  border-orange-300 p-4 rounded-md">
         
          <div className="space-y-4 ">
          <h2 className="text-xl font-semibold  bg-orange-300"> For Professional</h2>
          <div className="w-full gap-8 md:grid md:grid-cols-2">
 <Controller
                control={form.control}
                name="taskCompletionHistoryProfessional"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>No of Tasks Completed</FormLabel>
                    <FormControl>
                      <Input {...field} disabled={isEnabled || loading} />
                    </FormControl>
                 
                  </FormItem>
                )}
/>
                <Controller
                 control={form.control}
                    name="taskRatingsProfessional"
                  render={({ field }) => (
                <FormItem>
                 <FormLabel>Task Ratings</FormLabel>
             <FormControl>
                <Input {...field} disabled={isEnabled || loading} />
                </FormControl>
             
    </FormItem>
  )}
/>
<Controller
                control={form.control}
                name="industryExperienceProfessional"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Industry Experience</FormLabel>
                    <FormControl>
                      <Input {...field} disabled={isEnabled || loading} />
                    </FormControl>
                 
                  </FormItem>
                )}
/>
<Controller
                 control={form.control}
                    name="annualIncomeProfessional"
                  render={({ field }) => (
                <FormItem>
                 <FormLabel>Annual Income</FormLabel>
             <FormControl>
                <Input {...field} disabled={isEnabled || loading} />
                </FormControl>
            
    </FormItem>
  )}
/>
<Controller
                control={form.control}
                name="maximumCostAssignedProfessional"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Maximum Cost Assigned</FormLabel>
                    <FormControl>
                      <Input type="number" {...field} disabled={isEnabled || loading} />
                    </FormControl>
                  
                  </FormItem>
                )}
              />

<FormField
                control={form.control}
                name="dueDateProfessional"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel>Due Date</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                        
                          <Button
                            disabled={isEnabled || loading}
                            placeholder="Select Date"
                            value={field.value ? format(new Date(field.value), 'yyyy-MM-dd') : ''}
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
                            date < new Date() || date > new Date("2050-01-01")
                          }
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                   
                  </FormItem>
                )}
              />
               {initialData && <>
              <Controller
                control={form.control}
                name="assignedToProfessional"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Assigned To</FormLabel>
                    <FormControl>
                      <Input {...field} disabled={isEnabled || loading} />
                    </FormControl>
                   
                  </FormItem>
                )}
              />

              <Controller
                control={form.control}
                name="assignedByProfessional"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Assigned By</FormLabel>
                    <FormControl>
                      <Input {...field} disabled={isEnabled || loading} />
                    </FormControl>
                  
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="assignedDateProfessional"
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
                            date < new Date() || date > new Date("2050-01-01")
                          }
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                    <FormMessage>{errors.assignedDate?.message?.toString()}</FormMessage>
                  </FormItem>
                )}
              />

<FormField
                control={form.control}
                name="completedDateProfessional"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel>Completed Date</FormLabel>
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
                            date < new Date() || date > new Date("2050-01-01")
                          }
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                
                  </FormItem>
                )}
              />

           
             

              <Controller
                control={form.control}
                name="feedbackProfessional"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Feedback</FormLabel>
                    <FormControl>
                      <Textarea {...field} disabled={isEnabled || loading} />
                    </FormControl>
                   
                  </FormItem>
                )}
              />
</>}
 </div>
          </div>
          <div className="space-y-4 ">
          <h2 className="text-xl font-semibold  bg-orange-300"> For Approver</h2>
          <div className="w-full gap-8 md:grid md:grid-cols-2">
 <Controller
                control={form.control}
                name="taskCompletionHistoryApprover"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Task Completion History</FormLabel>
                    <FormControl>
                      <Input {...field} disabled={isEnabled || loading} />
                    </FormControl>
                  
                  </FormItem>
                )}
/>
                <Controller
                 control={form.control}
                    name="taskRatingsApprover"
                  render={({ field }) => (
                <FormItem>
                 <FormLabel>Task Ratings</FormLabel>
             <FormControl>
                <Input {...field} disabled={isEnabled || loading} />
                </FormControl>
           
    </FormItem>
  )}
/>
<Controller
                control={form.control}
                name="industryExperienceApprover"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Industry Experience</FormLabel>
                    <FormControl>
                      <Input {...field} disabled={isEnabled || loading} />
                    </FormControl>
                  
                  </FormItem>
                )}
/>
<Controller
                 control={form.control}
                    name="annualIncomeApprover"
                  render={({ field }) => (
                <FormItem>
                 <FormLabel>Annual Income</FormLabel>
             <FormControl>
                <Input {...field} disabled={isEnabled || loading} />
                </FormControl>
          
    </FormItem>
  )}
/>
<Controller
                control={form.control}
                name="maximumCostAssignedApprover"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Maximum Cost Assigned</FormLabel>
                    <FormControl>
                      <Input type="number" {...field} disabled={isEnabled || loading} />
                    </FormControl>
                  
                  </FormItem>
                )}
              />

<FormField
                control={form.control}
                name="dueDateApprover"
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
                            date < new Date() || date > new Date("2050-01-01")
                          }
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                  
                  </FormItem>
                )}
              />
            
           

            

            {initialData && <>
              <Controller
                control={form.control}
                name="assignedToApprover"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Assigned To</FormLabel>
                    <FormControl>
                      <Input {...field} disabled={isEnabled || loading} />
                    </FormControl>
                
                  </FormItem>
                )}
              />

              <Controller
                control={form.control}
                name="assignedByApprover"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Assigned By</FormLabel>
                    <FormControl>
                      <Input {...field} disabled={isEnabled || loading} />
                    </FormControl>
                 
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="assignedDateApprover"
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
                            date < new Date() || date > new Date("2050-01-01")
                          }
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
               
                  </FormItem>
                )}
              />

<FormField
                control={form.control}
                name="completedDateApprover"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel>Completed Date</FormLabel>
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
                            date < new Date() || date > new Date("2050-01-01")
                          }
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                  
                  </FormItem>
                )}
              />
           
             

              <Controller
                control={form.control}
                name="feedbackApprover"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Feedback</FormLabel>
                    <FormControl>
                      <Textarea {...field} disabled={isEnabled || loading} />
                    </FormControl>
              
                  </FormItem>
                )}
              />
</>}
 </div>
 </div>
  
          </div>
           {/* Availability Criteria*/}
          <div className="space-y-4 border border-orange-300 p-4 rounded-md">
  <h2 className="text-xl font-semibold bg-orange-300">Availability Criteria</h2>
  <div className="w-full gap-8 md:grid md:grid-cols-2">
    <Controller
      control={form.control}
      name="timeAvailability"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Time Availability</FormLabel>
          <FormControl>
            <ReactSelect
              {...field}
              options={[
                { value: '6-8am', label: '6-8 am' },
                { value: '8-2pm', label: '8-2 pm' },
                { value: '4-9pm', label: '4-9 pm' },
                { value: 'All Day', label: 'All Day'}
              ]}
              isDisabled={isEnabled || loading}
            />
          </FormControl>
        
        </FormItem>
      )}
    />
<Controller
  control={form.control}
  name="time"
  render={({ field }) => (
    <FormItem>
      <FormLabel>Time</FormLabel>
      <FormControl>
        <ReactSelect
          {...field}
          options={[
            { value: 'Full-Time', label: 'Full-Time' },
            { value: 'Part-Time', label: 'Part-Time' },
          ]}
          isDisabled={isEnabled || loading}
        />
      </FormControl>
  
    </FormItem>
  )}
/> 
    <Controller
      control={form.control}
      name="immediateAvailability"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Immediate Availability</FormLabel>
          <FormControl>
            <ReactSelect
              {...field}
              options={[
                { value: 'yes', label: 'Yes' },
                { value: 'no', label: 'No' },
              ]}
              isDisabled={isEnabled || loading}
            />
          </FormControl>
     
        </FormItem>
      )}
    />
  </div>
          </div>

          {/* Form Actions */}
          <div className="flex justify-end">
          { (!isEnabled)  && <Button
              type="submit"
              disabled={isEnabled || loading}
              className="ml-4 w-full"
            >
              {action}
            </Button>
}
          </div>
        </form>
      </Form>
    </>
  );
};

