import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

import { useStoreContext } from '@/contextApi/ContextApi';

import Card from '@/components/Card';

const LandingPage = () => {
  const navigate = useNavigate();
  const { token } = useStoreContext();
  console.log('TOKEN from landing page: ', token);

  let desc =
    'Generate short, memorable links with ease using EasyLink intuitive interface. Share URLs effortlessly across platforms. Optimize your sharing strategy with EasyLink. Track clicks and manage your links seamlessly to enhance your online presence.';

  const dashBoardNavigateHandler = () => {};

  return (
    <div className='min-h-[calc(100vh-64px)] lg:px-14 sm:px-8 px-4'>
      <div className='flex-col lg:flex-row lg:py-5 pt-16 gap-8 lg:gap-10 flex justify-between items-center'>
        <div className='flex-1'>
          <motion.h1
            initial={{ opacity: 0, y: -80 }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className='font-bold font-roboto text-slate-800 text-3xl md:text-5xl leading-10 sm:leading-[45px] md:leading-[55px] w-full md:w-[70%] lg:w-full'
          >
            EasyLink Simplifies URL Shortening For Efficient Sharing.
          </motion.h1>
          <p className='text-slate-700 text-sm my-5'>
            EasyLink streamlines the process of URL shortening, making sharing
            links effortless and efficient. With its user-friendly interface,
            EasyLink allows you to generate concise, easy-to-share URLs in
            seconds. Simplify your sharing experience with EasyLink today.
          </p>
          <div className='flex items-center gap-3'>
            <motion.button
              initial={{ opacity: 0, y: 80 }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              onClick={dashBoardNavigateHandler}
              className='bg-gradient-to-r from-fuchsia-500 to-purple-500 w-40 text-white rounded-md py-2 shadow-md transition-all duration-300 ease-in-out hover:shadow-lg hover:from-fuchsia-400 hover:to-purple-400 focus:ring-2 focus:ring-blue-300'
            >
              <span className='relative'>Manage Links</span>
            </motion.button>

            <motion.button
              initial={{ opacity: 0, y: 80 }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              onClick={dashBoardNavigateHandler}
              className='w-40 rounded-md py-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-md transition-all duration-300 ease-in-out hover:from-blue-400 hover:to-cyan-400 hover:text-white focus:ring-2 focus:ring-blue-300'
            >
              Create Short Link
            </motion.button>
          </div>
        </div>

        <div className='flex flex-1 justify-center w-full'>
          <motion.img
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
            }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            src='/images/img.webp'
            alt=''
            className='w-[400px] sm:w-[480px] object-cover rounded-md'
          />
        </div>
      </div>

      <div className='pt-7 sm:pt-12'>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className='text-slate-800 font-roboto font-bold sm:w-[80%] md:w-[70%] lg:w-[60%] mx-auto text-3xl text-center'
        >
          Trusted by individuals and teams at the world best companies
        </motion.p>

        {/* Add logos section here */}
        <div className='pt-6 pb-3 flex justify-center items-center space-x-8'>
          <span className='border-2 border-cyan-400 rounded-lg p-2 bg-gradient-to-r from-cyan-400 to-blue-500 text-white shadow-lg hover:scale-105 transition-all duration-300 ease-in-out'>
            Google
          </span>
          <span className='border-2 border-fuchsia-400 rounded-lg p-2 bg-gradient-to-r from-fuchsia-400 to-purple-500 text-white shadow-lg hover:scale-105 transition-all duration-300 ease-in-out'>
            Discord
          </span>
          <span className='border-2 border-blue-400 rounded-lg p-2 bg-gradient-to-r from-blue-400 to-indigo-500 text-white shadow-lg hover:scale-105 transition-all duration-300 ease-in-out'>
            Microsoft
          </span>
          <span className='border-2 border-purple-400 rounded-lg p-2 bg-gradient-to-r from-purple-400 to-pink-500 text-white shadow-lg hover:scale-105 transition-all duration-300 ease-in-out'>
            Amazon
          </span>
        </div>

        {/* Cards section */}
        <div className='pt-4 pb-7 grid lg:gap-7 gap-4 xl:grid-cols-4  lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 mt-4'>
          <Card
            title='Simple URL Shortening'
            desc='Experience the ease of creating short, memorable URLs in just a few clicks. Our intuitive interface and quick setup process ensure you can start shortening URLs without any hassle.'
          />
          <Card
            title='Powerful Analytics'
            desc='Gain insights into your link performance with our comprehensive analytics dashboard. Track clicks, geographical data, and referral sources to optimize your marketing strategies.'
          />
          <Card
            title='Enhanced Security'
            desc='Rest assured with our robust security measures. All shortened URLs are protected with advanced encryption, ensuring your data remains safe and secure.'
          />
          <Card
            title='Fast and Reliable'
            desc='Enjoy lightning-fast redirects and high uptime with our reliable infrastructure. Your shortened URLs will always be available and responsive, ensuring a seamless experience for your users.'
          />
        </div>
      </div>
    </div>
  );
};
export default LandingPage;
