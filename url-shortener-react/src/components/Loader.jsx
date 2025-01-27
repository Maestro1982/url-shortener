import { RotatingLines } from 'react-loader-spinner';

function Loader() {
  return (
    <div
      className='flex justify-center items-center w-full h-[450px]'
      style={{ color: '#a78bfa' }}
    >
      <div className='flex flex-col items-center gap-1'>
        <RotatingLines
          visible={true}
          height='65'
          width='65'
          color='#a78bfa'
          strokeWidth='5'
          animationDuration='0.75'
          ariaLabel='rotating-lines-loading'
        />
      </div>
    </div>
  );
}

export default Loader;
