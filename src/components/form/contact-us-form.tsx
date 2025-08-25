'use client';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import InputWithLabel from './form-fields/input-with-label';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { Textarea } from '../ui/textarea';
import { toast } from 'sonner';
import axios from 'axios';

type ContactFormValues = {
  email: string;
  firstName: string;
  lastName?: string;
  phone: string;
  message: string;
};

export default function ContactUsForm() {
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

  const onSubmit = async (data: ContactFormValues) => {
    const name = data?.firstName + ' ' + data?.lastName;
    const formData = {
      name: name,
      email: data.email,
      phone: data.phone,
      message: data.message,
    };
    try {
      const res = await axios.post(
        'https://tgc-admin.vercel.app/api/contacts',
        formData,
      );
      if (res.data) {
        toast.success('Thank you for reaching out!', {
          description: 'We will get back to you soon.',
        });
        reset();
      }
    } catch (error) {
      toast.error('Something went wrong.', {
        description: 'Please try again.',
      });
      console.error('Error submitting form:', error);
    }
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
    <form className="md:px-0" onSubmit={handleSubmit(onSubmit)}>
      <div className="grid grid-cols-2 items-start gap-3 md:grid-cols-1 md:gap-4 lg:grid-cols-2">
        {/* first name */}
        <InputWithLabel
          name="firstName"
          label="First Name"
          type="text"
          placeholder="First Name"
          register={register}
          error={errors.firstName}
          rules={{ required: 'First Name is required' }}
        />
        {/* last name */}
        <InputWithLabel
          name="lastName"
          label="Last Name"
          type="text"
          placeholder="last Name"
          register={register}
          error={errors.lastName}
          // rules={{ required: 'First Name is required' }}
        />
      </div>

      <div className="my-4 w-full">
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
      </div>
      {/* Phone Number */}
      <div className="my-4 w-full">
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
              inputClass="!w-full !border !border-gray-300 dark:!border-gray-600 !rounded-md !bg-white dark:!bg-input/20 !text-gray-900 dark:!text-gray-100 focus:!border-gray-500 dark:focus:!border-primary !py-5"
              dropdownClass="!border !border-gray-300 dark:!border-gray-600 !rounded-md !bg-white dark:!bg-gray-800 !text-gray-900 dark:!text-gray-100 focus:!border-gray-500 dark:focus:!border-primary"
              disableSearchIcon
              searchClass="!border !border-gray-300 dark:!border-gray-600 !rounded-md !bg-white dark:!bg-gray-800 !text-gray-900 dark:!text-gray-100 focus:!border-white dark:focus:!border-none"
            />
          </div>
          {errors.phone && (
            <p className="text-xs text-red-600">{errors.phone.message}</p>
          )}
        </div>
      </div>

      {/* Message */}
      <div className="space-y-2">
        <label className="text-brand dark:text-primary text-sm font-semibold">
          Write your message here
        </label>
        <Textarea
          id="message"
          className="mt-2 placeholder:text-xs md:h-24 md:placeholder:text-sm lg:h-48"
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
      <div className="w-full pt-6">
        <button
          type="submit"
          className="bg-brand dark:bg-primary hover:text-brand flex w-full transform cursor-pointer items-center justify-center gap-2 rounded-md border px-4 py-2 text-center text-sm font-semibold text-white transition duration-300 ease-in-out hover:scale-95 hover:bg-gray-100 md:text-base dark:text-black"
        >
          Send message
        </button>
      </div>
    </form>
  );
}
