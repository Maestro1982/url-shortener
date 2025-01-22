import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

import api from '@/api/api';

import CustomTextField from '@/components/CustomTextField';
import { Button } from '@/components/ui/button';

const RegisterPage = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: '',
      email: '',
      password: '',
    },
    mode: 'onTouched',
  });

  const registerHandler = async (data) => {
    setIsLoading(true);
    try {
      const { data: response } = await api.post(
        '/api/auth/public/register',
        data
      );
      reset();
      navigate('/login');
      toast.success('Account created successfully');
    } catch (error) {
      console.log(error);
      toast.error('Failed to create account');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className='min-h-[calc(100vh-64px)] flex items-center justify-center'>
      <form
        onSubmit={handleSubmit(registerHandler)}
        className='w-[360px] sm:w-[450px] shadow-lg py-8 px-4 sm:px-8 rounded-md'
      >
        <h1 className='text-center font-serif font-bold text-blue-500 text-2xl lg:text-3xl'>
          Sign-Up
        </h1>
        <hr className='mt-2 mb-5 text-black' />
        <div className='flex flex-col gap-3'>
          <CustomTextField
            label='Username'
            required
            id='username'
            type='text'
            message='Username is required'
            placeholder='Enter your username'
            register={register}
            errors={errors}
          />
          <CustomTextField
            label='Email'
            required
            id='email'
            type='email'
            message='Email is required'
            placeholder='Enter your email'
            register={register}
            errors={errors}
          />
          <CustomTextField
            label='Password'
            required
            id='password'
            type='password'
            message='Password is required'
            placeholder='Enter your password'
            register={register}
            min={6}
            errors={errors}
          />
        </div>
        <Button disabled={isLoading} type='submit' variant='gradientBlue'>
          {isLoading ? 'Saving...' : 'Sign-Up'}
        </Button>
        <p className='text-center text-sm text-slate-700 mt-6'>
          Already have an account?
          <Link className='hover:underline hover:text-blue-500' to='/login'>
            <span className='text-blue-500 ml-1 font-semibold'>Sign-In</span>
          </Link>
        </p>
      </form>
    </div>
  );
};
export default RegisterPage;
