import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

import api from '@/api/api';
import { useStoreContext } from '@/contextApi/ContextApi';

import CustomTextField from '@/components/CustomTextField';
import { Button } from '@/components/ui/button';

const LoginPage = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const { setToken } = useStoreContext();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: '',
      password: '',
    },
    mode: 'onTouched',
  });

  const loginHandler = async (data) => {
    setIsLoading(true);
    try {
      const { data: response } = await api.post('/api/auth/public/login', data);
      // Store token in local storage
      console.log(response.token);
      setToken(response.token);
      localStorage.setItem('JWT_TOKEN', JSON.stringify(response.token));
      toast.success('Login successfull');
      reset();
      navigate('/dashboard');
    } catch (error) {
      console.log(error);
      toast.error('Failed to login');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className='min-h-[calc(100vh-64px)] flex items-center justify-center'>
      <form
        onSubmit={handleSubmit(loginHandler)}
        className='w-[360px] sm:w-[450px] shadow-lg py-8 px-4 sm:px-8 rounded-md'
      >
        <h1 className='text-center font-serif font-bold text-blue-500 text-2xl lg:text-3xl'>
          Sign-In
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
          {isLoading ? 'Loading...' : 'Sign-In'}
        </Button>
        <p className='text-center text-sm text-slate-700 mt-6'>
          Don&apos;t have an account?
          <Link className='hover:underline hover:text-blue-500' to='/register'>
            <span className='text-blue-500 ml-1 font-semibold'>Sign-Up</span>
          </Link>
        </p>
      </form>
    </div>
  );
};
export default LoginPage;
