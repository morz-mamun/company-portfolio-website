'use client';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';
import axios from 'axios';

interface EmailFormData {
  email: string;
}

export function EmailSubscription() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<EmailFormData>();

  const onSubmit = async (data: EmailFormData) => {
    try {
      const res = await axios.post(
        'https://tgc-admin.vercel.app/api/newsLetter',
        data,
      );
      console.log(res);

      if (res.data) {
        toast.success('Thank you for subscribing!', {
          description: 'We will get back to you soon.',
        });
        reset();
      }
    } catch (error) {
      toast.error('Subscription failed.', {
        description: 'Please try again.',
      });
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div className="mx-auto w-full max-w-sm px-3">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex overflow-hidden rounded-lg border border-gray-100 bg-white p-1 shadow-md"
      >
        <Input
          id="email"
          type="email"
          placeholder="Enter your Email"
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Invalid email address',
            },
          })}
          className="flex-1 border-0 px-2 text-sm text-black shadow-none placeholder:text-gray-500 focus-visible:ring-0 focus-visible:ring-offset-0 md:py-5"
        />
        <Button
          type="submit"
          disabled={isSubmitting}
          className="hover:bg-[] cursor-pointer rounded-[8px] border-0 bg-black px-4 text-xs font-medium text-white shadow-[inset_2px_2px_4px_0_rgba(255,254,254,0.25)] disabled:opacity-50 md:py-5 md:text-sm"
        >
          {isSubmitting ? 'Subscribing...' : 'Subscribe'}
        </Button>
      </form>
      {errors.email && (
        <p className="mt-1 px-1 text-xs text-red-600">{errors.email.message}</p>
      )}
    </div>
  );
}
