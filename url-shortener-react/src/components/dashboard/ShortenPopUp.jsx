import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';

import CreateNewShorten from '@/components/dashboard/CreateNewShorten';

const ShortenPopUp = ({ open, setOpen, refetch }) => {
  return (
    <Dialog open={open} onOpenChange={(isOpen) => setOpen(isOpen)}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className='text-center'>Create New Shorten</DialogTitle>
          <DialogDescription className='text-center'>
            Fill out the form below to create a new shortened URL.
          </DialogDescription>
        </DialogHeader>
        <hr className='mt-2 sm:mb-5 mb-3 text-slate-950' />
        <div className='flex justify-center items-center'>
          <CreateNewShorten setOpen={setOpen} refetch={refetch} />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ShortenPopUp;
