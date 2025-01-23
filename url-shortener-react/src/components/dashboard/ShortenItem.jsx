const ShortenItem = ({ originalUrl, shortUrl, clickCount, createdDate }) => {
  return (
    <div
      className={`bg-slate-100 shadow-lg border border-dotted border-slate-500 px-6 py-3 sm:py-1 rounded-md transition-all duration-100 `}
    >
      <div
        className={`flex flex-col sm:flex-row sm:justify-between w-full gap-5 sm:gap-0 py-5 `}
      >
        <div className='flex-1 max-w-full sm:space-y-1 overflow-x-auto overflow-y-hidden'>
          <div className='text-slate-900 pb-1 sm:pb-0 flex items-center gap-2'></div>
        </div>
      </div>
    </div>
  );
};
export default ShortenItem;
