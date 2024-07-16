import { Button } from './Button'

interface CardProps {
  src: string
  title: string
  price: string
  priceThrough: string
}

export function Card({ ...props }: CardProps) {
  return (
    <div className="card text-white rounded flex-1 flex flex-col space-y-2 border-2 border-white/20 px-8 py-8 items-center justify-center">
      <img src={props.src} alt="coffes" />
      <span className="font-bold">{props.title}</span>
      <div className="gap-2 flex w-full items-baseline justify-center">
        <span className="text-lg">R$ {props.price}</span>
        <span className="text-sm line-through">R$ {props.priceThrough}</span>
      </div>
      <Button title="Adicione ao carrinho" className='text-white bg-mainColor px-4 py-1 rounded text-sm btnCard' />
    </div>
  )
}
