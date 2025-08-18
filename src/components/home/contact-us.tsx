'use client';

import { useForm } from 'react-hook-form';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { ArrowBigRight } from 'lucide-react';
import SectionHeading from '../shared/section-heading';
import { Textarea } from '../ui/textarea';
import { useEffect } from 'react';
import { toast } from 'sonner';
import InputWithLabel from '../form/form-fields/input-with-label';

type ContactFormValues = {
  email: string;
  name: string;
  phone: string;
  company: string;
  message: string;
};

export default function ContactUs() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    watch,
    reset,
  } = useForm<ContactFormValues>({
    mode: 'onChange', // real-time validation
  });

  const onSubmit = (data: ContactFormValues) => {
    console.log('Form Data:', data);
    toast.success('Form submitted successfully!', {
      description: 'We will get back to you soon.',
    });
    reset();
    // send data to backend here
  };

  // Watch for changes in the "phone" field and update the value in the form
  useEffect(() => {
    register('phone', {
      required: 'Phone number is required',
      validate: (value) =>
        (value && value.replace(/\D/g, '').length >= 11) ||
        'Enter a valid phone number',
    });
  }, [register]);

  return (
    <section className="mx-auto max-w-xl lg:max-w-2xl">
      {/* section heading */}
      <SectionHeading
        title="Contact Us"
        description="Explore articles, case studies and insights on the latest in digital marketing, AI Automation and business growth."
      />

      {/* contact form */}
      <form className="mt-8 px-3 md:px-0" onSubmit={handleSubmit(onSubmit)}>
        <div className="my-4 grid grid-cols-2 items-start gap-3 md:gap-4">
          {/* Email */}
          <InputWithLabel
            name="email"
            label="Email"
            type="email"
            placeholder="Enter your email"
            register={register}
            error={errors.email}
            rules={{
              required: 'Email is required',
              pattern: {
                value: /^\S+@\S+$/i,
                message: 'Invalid email address',
              },
            }}
          />

          {/* Full Name */}
          <InputWithLabel
            name="name"
            label="Full Name"
            type="text"
            placeholder="Full Name"
            register={register}
            error={errors.name}
            rules={{ required: 'Full name is required' }}
          />
        </div>

        <div className="my-4 grid grid-cols-2 items-start gap-3 md:gap-4">
          {/* Phone Number */}
          <div className="space-y-2">
            <label className="text-brand dark:text-primary text-sm font-semibold">
              Phone Number
            </label>
            <div className="mt-2">
              <PhoneInput
                country={'bd'}
                enableSearch={true}
                value={watch('phone')}
                onChange={(phone) =>
                  setValue('phone', phone, { shouldValidate: true })
                }
                inputClass="!w-full !border !border-gray-300 dark:!border-gray-600 !rounded-md !bg-white dark:!bg-input/20 !text-gray-900 dark:!text-gray-100 focus:!border-gray-500 dark:focus:!border-primary"
                dropdownClass="!border !border-gray-300 dark:!border-gray-600 !rounded-md !bg-white dark:!bg-gray-800 !text-gray-900 dark:!text-gray-100 focus:!border-gray-500 dark:focus:!border-primary"
                searchClass="!border !border-gray-300 dark:!border-gray-600 !rounded-md !bg-white dark:!bg-gray-800 !text-gray-900 dark:!text-gray-100 focus:!border-gray-500 dark:focus:!border-primary"
              />
            </div>
            {errors.phone && (
              <p className="text-xs text-red-600">{errors.phone.message}</p>
            )}
          </div>

          {/* Company Name */}
          <InputWithLabel
            name="company"
            label="Company Name"
            type="text"
            placeholder="Company Name"
            register={register}
            error={errors.company}
            rules={{ required: 'Company name is required' }}
          />
        </div>

        {/* Message */}
        <div className="space-y-2">
          <label className="text-brand dark:text-primary text-sm font-semibold">
            Write your message here
          </label>
          <Textarea
            className="mt-2 placeholder:text-xs md:placeholder:text-sm"
            placeholder="What we can do for you?"
            {...register('message', {
              required: 'Message is required',
              minLength: {
                value: 10,
                message: 'Message must be at least 10 characters',
              },
            })}
          />
          {errors.message && (
            <p className="text-xs text-red-600">{errors.message.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <div className="flex justify-center pt-5">
          <button
            type="submit"
            className="bg-brand dark:bg-primary hover:text-brand flex transform cursor-pointer items-center gap-2 rounded-md border px-4 py-2 text-sm font-semibold text-white transition duration-300 ease-in-out hover:scale-95 hover:bg-gray-100 md:text-base dark:text-black"
          >
            Submit <ArrowBigRight size={18} />
          </button>
        </div>
      </form>
    </section>
  );
}
