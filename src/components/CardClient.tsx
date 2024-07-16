import quote from '../assets/quote-img.png'
import { FaStar, FaStarHalfAlt } from 'react-icons/fa'

interface CardClientProps {
  src: string
  name: string
}

export function CardClient({ ...props }: CardClientProps) {
  return (
    <div className='flex flex-col text-white items-center space-y-2 justify-center rounded border-2 border-white/20 p-4 hover:shadow-inner hover:shadow-mainColor'>
      <img src={quote} alt="Image"
        className='size-8'
      />
      <p className='font-extralight text-sm text-center'>
        Lorem ipsum amet modi ipsum deserunt odio odit ratione velit accusamus atque obcaecati! Iure aspernatur natus modi!
      </p>

      <img src={props.src} alt="Image client"
        className='rounded-full size-16'
      />
      <span className='text-sm font-semibold'>
        {props.name}
      </span>

      <div className='flex w-full items-center justify-center gap-1'>
        <FaStar color='#fff' size={20} />
        <FaStar color='#fff' size={20} />
        <FaStar color='#fff' size={20} />
        <FaStar color='#fff' size={20} />
        <FaStarHalfAlt color='#fff' size={20} />
      </div>
    </div>
  )
}
