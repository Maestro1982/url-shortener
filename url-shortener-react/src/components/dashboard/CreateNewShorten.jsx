import { useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

import api from '@/api/api';
import { useStoreContext } from '@/contextApi/ContextApi';

import CustomTextField from '@/components/CustomTextField';

import { Button } from '@/components/ui/button';

const CreateNewShorten = ({ setOpen, refetch }) => {
  const { token } = useStoreContext();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      originalUrl: '',
    },
    mode: 'onTouched',
  });

  const createShortUrlHandler = async (data) => {
    setIsLoading(true);
    try {
      const { data: response } = await api.post('/api/urls/shorten', data, {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      });
      const shortenUrl = `${import.meta.env.VITE_REACT_SUBDOMAIN}/${
        response.shortUrl
      }`;
      navigator.clipboard.writeText(shortenUrl).then(() => {
        toast.success('Shorten URL copied to clipboard', {
          position: 'bottom-center',
          className: 'mb-5',
          duration: 3000,
        });
      });
      reset();
      setOpen(false);
    } catch {
      toast.error('Failed to create shorten URL', {
        position: 'bottom-center',
        className: 'mb-5',
        duration: 3000,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit(createShortUrlHandler)}
        className='relative w-[360px] sm:w-[450px] pb-5 px-4 sm:px-8 rounded-lg'
      >
        <div>
          <CustomTextField
            label='Enter URL'
            required
            id='originalUrl'
            placeholder='https://example.com'
            type='url'
            message='Url is required'
            register={register}
            errors={errors}
          />
        </div>
        <Button variant='gradientPurple' type='submit' className='w-28'>
          {isLoading ? 'Saving...' : 'Create'}
        </Button>
      </form>
    </div>
  );
};
export default CreateNewShorten;
