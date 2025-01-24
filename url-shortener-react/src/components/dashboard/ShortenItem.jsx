import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaExternalLinkAlt, FaRegCalendarAlt } from 'react-icons/fa';
import { MdAnalytics, MdOutlineAdsClick } from 'react-icons/md';
import { IoCopy } from 'react-icons/io5';
import { LiaCheckSolid } from 'react-icons/lia';
import dayjs from 'dayjs';
import CopyToClipboard from 'react-copy-to-clipboard';
import { Hourglass } from 'react-loader-spinner';

import api from '@/api/api';
import { useStoreContext } from '@/contextApi/ContextApi';

import Graph from '@/components/dashboard/Graph';

const ShortenItem = ({ originalUrl, shortUrl, clickCount, createdDate }) => {
  const { token } = useStoreContext();
  const navigate = useNavigate();
  const [isCopied, setIsCopied] = useState(false);
  const [analyticToggle, setAnalyticToggle] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedUrl, setSelectedUrl] = useState('');
  const [analyticsData, setAnalyticsData] = useState([]);

  const subDomain = import.meta.env.VITE_REACT_FRONTEND_URL.replace(
    /^https?:\/\//,
    ''
  );

  const analyticsHandler = (shortUrl) => {
    if (!analyticToggle) {
      setSelectedUrl(shortUrl);
    }
    setAnalyticToggle(!analyticToggle);
  };

  const fetchMyShortUrl = async () => {
    setIsLoading(true);
    try {
      const { data } = await api.get(
        `/api/urls/analytics/${selectedUrl}?startDate=2025-01-01T00:00:00&endDate=2025-12-31T23:59:59`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
        }
      );
      setAnalyticsData(data);
      setSelectedUrl('');
      console.log(data);
    } catch (error) {
      navigate('/error');
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (selectedUrl) {
      fetchMyShortUrl();
    }
  }, [selectedUrl]);

  return (
    <div
      className={`bg-slate-100 shadow-lg border border-dotted border-slate-500 px-6 py-3 sm:py-1 rounded-md transition-all duration-100 `}
    >
      <div
        className={`flex flex-col sm:flex-row sm:justify-between w-full gap-5 sm:gap-0 py-5 `}
      >
        <div className='flex-1 max-w-full sm:space-y-1 overflow-x-auto overflow-y-hidden'>
          {/* Display short url */}
          <div className='text-slate-900 pb-1 sm:pb-0 flex items-center gap-2'>
            <Link
              target='_blank'
              to={
                import.meta.env.VITE_REACT_FRONTEND_URL + '/s/' + `${shortUrl}`
              }
              className='text-[1rem] font-montserrat font-[600] text-blue-600'
            >
              {subDomain + '/s/' + `${shortUrl}`}
            </Link>
            <FaExternalLinkAlt className='text-blue-600' />
          </div>

          {/* Display original url */}
          <div className='flex items-center gap-1'>
            <h3 className='text-[1rem] font-[400] text-slate-700'>
              {originalUrl}
            </h3>
          </div>

          {/* Display clickcount */}
          <div className='flex items-center gap-8 pt-6'>
            <div className='flex items-center gap-1 text-green-600 font-semibold'>
              <span>
                <MdOutlineAdsClick className='size-5 me-1' />
              </span>
              <span className='text-[1rem]'>{clickCount}</span>
              <span className='text-[1rem]'>
                {clickCount === 0 || clickCount > 1 ? 'Clicks' : 'Click'}
              </span>
            </div>

            {/* Display created date */}
            <div className='flex items-center gap-2 font-semibold text-lg text-slate-600'>
              <span>
                <FaRegCalendarAlt />
              </span>
              <span className='text-[1rem]'>
                {dayjs(createdDate).format('MMM DD, YYYY')}
              </span>
            </div>
          </div>
        </div>

        {/* Copy to clipboard */}
        <div className='flex flex-1 items-center sm:justify-end gap-4'>
          <CopyToClipboard
            onCopy={() => setIsCopied(true)}
            text={`${
              import.meta.env.VITE_REACT_FRONT_END_URL + '/s/' + `${shortUrl}`
            }`}
          >
            <div className='flex cursor-pointer gap-1 items-center bg-gradient-to-r from-blue-500 to-cyan-500 py-2  font-semibold shadow-sm shadow-slate-500 px-6 rounded-md text-white transition-all duration-100 ease-in-out hover:from-blue-400 hover:to-cyan-400 hover:text-white focus:ring-2 focus:ring-blue-300'>
              <button>{isCopied ? 'Copied' : 'Copy'}</button>
              {isCopied ? (
                <LiaCheckSolid className='text-md' />
              ) : (
                <IoCopy className='text-md' />
              )}
            </div>
          </CopyToClipboard>

          <div
            onClick={() => analyticsHandler(shortUrl)}
            className='flex items-center cursor-pointer gap-1 bg-rose-700 py-2 font-semibold shadow-sm shadow-slate-500 px-6 rounded-md text-white transition-all duration-100 ease-in-out hover:bg-rose-600  hover:text-white focus:ring-2 focus:ring-rose-300'
          >
            <button>Analytics</button>
            <MdAnalytics className='text-base' />
          </div>
        </div>
      </div>

      {/* Display analytics graph individually (short url) */}
      <React.Fragment>
        <div
          className={`${
            analyticToggle ? 'flex' : 'hidden'
          } relative max-h-96 min-h-96 mt-5 sm:mt-0 border-t-2 w-[100%] overflow-hidden`}
        >
          {isLoading ? (
            <div className='min-h-[calc(450px-140px)] flex items-center justify-center w-full'>
              <div className='flex flex-col items-center gap-1'>
                <Hourglass
                  visible='true'
                  height={50}
                  width={50}
                  ariaLabel='hourglass-loading'
                  wrapperStyle={{}}
                  wrapperClass=''
                  colors={['#306cce', '#72a1ed']}
                />
                <p className='text-slate-700'>Please Wait...</p>
              </div>
            </div>
          ) : (
            <>
              {analyticsData.length === 0 && (
                <div className='absolute flex flex-col justify-center items-end sm:items-center w-full left-0 top-0 bottom-0 right-0 m-auto'>
                  <h1 className='font-serif text-[1rem] sm:text-2xl font-bold mb-1'>
                    No Data For This Time Period
                  </h1>
                  <h3 className='w-[90%] sm:w-96 pl-6 sm:ml-0 text-center text-sm sm:text-lg text-slate-600'>
                    Share your short link to view where your engagements are
                    coming from
                  </h3>
                </div>
              )}
              <Graph graphData={analyticsData} />
            </>
          )}
        </div>
      </React.Fragment>
    </div>
  );
};
export default ShortenItem;
