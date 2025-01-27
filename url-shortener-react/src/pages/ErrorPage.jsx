import { useNavigate } from 'react-router-dom';

import { FaExclamationTriangle } from 'react-icons/fa';

const ErrorPage = ({ message }) => {
  const navigate = useNavigate();

  return (
    <div className='flex flex-col items-center justify-center min-h-[calc(100vh-64px)] bg-gray-100 p-6'>
      <FaExclamationTriangle className='text-6xl text-red-500 mb-4' />
      <h1 className='text-3xl font-bold mb-2 text-gray-800'>
        Oops! Something went wrong.
      </h1>
      <p className='text-gray-600 text-center mb-6'>
        {message
          ? message
          : 'An unexpected error occurred. Please try again later.'}
      </p>
      <button
        onClick={() => navigate('/')}
        className='px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-700 transition'
      >
        Go back to Home
      </button>
    </div>
  );
};
export default ErrorPage;
