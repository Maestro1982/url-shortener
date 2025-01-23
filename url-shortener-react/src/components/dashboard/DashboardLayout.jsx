import { useState } from 'react';

import { useStoreContext } from '@/contextApi/ContextApi';
import { useFetchTotalClicks } from '@/hooks/useQuery';

import { Button } from '@/components/ui/button';

import Graph from '@/components/dashboard/Graph';
import ShortenPopUp from '@/components/dashboard/ShortenPopUp';

const DashboardLayout = () => {
  const refetch = false;
  const { token } = useStoreContext();
  const [isShortenPopUp, setIsShortenPopUp] = useState(false);

  // console.log(useFetchTotalClicks(token, onError));

  const { data: totalClicks, isLoading } = useFetchTotalClicks(token, onError);

  function onError(error) {
    console.log(error);
  }

  return (
    <div className='px-4 sm:px-8 lg:px-14 min-h-[calc(100vh-64px)]'>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className='w-full lg:w-[90%] mx-auto py-16'>
          <div className='relative h-96'>
            {totalClicks.length === 0 && (
              <div className='absolute flex flex-col justify-center items-end sm:items-center w-full left-0 top-0 bottom-0 right-0 m-auto'>
                <h1 className='text-[18px] sm:text-2xl font-serif font-bold text-slate-800 mb-1'>
                  No Data For This Time Period
                </h1>
                <h3 className='w-[90%] sm:w-96 pl-6 sm:ml-0 text-center text-sm sm:text-lg text-slate-600'>
                  Share your short link to view where your engagements are
                  coming from
                </h3>
              </div>
            )}
            <Graph graphData={totalClicks} />
          </div>
          <div className='text-center sm:text-end py-5'>
            <Button
              variant='gradientPurple'
              onClick={() => setIsShortenPopUp(true)}
            >
              Create a New Short URL
            </Button>
          </div>
        </div>
      )}

      <ShortenPopUp
        refetch={refetch}
        open={isShortenPopUp}
        setOpen={setIsShortenPopUp}
      />
    </div>
  );
};
export default DashboardLayout;
