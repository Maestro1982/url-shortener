import Graph from '@/dashboard/Graph';
import { dummyData } from '@/dummyData/data';

import { useStoreContext } from '@/contextApi/ContextApi';
import { useFetchTotalClicks } from '@/hooks/useQuery';

import { Button } from '@/components/ui/button';

const DashboardLayout = () => {
  const { token } = useStoreContext();

  console.log(useFetchTotalClicks(token, onError));

  function onError(error) {
    console.log(error);
  }

  return (
    <div className='px-4 sm:px-8 lg:px-14 min-h-[calc(100vh-64px)]'>
      <div className='w-full lg:w-[90%] mx-auto py-16'>
        <div className='relative h-96'>
          <Graph graphData={dummyData} />
        </div>
        <div className='text-center sm:text-end py-5'>
          <Button variant='gradientPurple'>Create a New Short URL</Button>
        </div>
      </div>
    </div>
  );
};
export default DashboardLayout;
