import { LoaderCircle } from 'lucide-react';

export default function Buttons({ isSubmitting, label }) {
  //flex flex-row w-full justify-center gap-6
  return (
    <button
      className="w-full border bg-[#385c89] border-[#385c89] rounded-md p-2 text-white hover:bg-[#6982a0] hover:border-[#6982a0]"
    >
      {isSubmitting ?
        <div className='relative'>
          <LoaderCircle className='animate-spin absolute left-0' />
          <p>Loading</p>
        </div>
        : label}
    </button>
  )
}