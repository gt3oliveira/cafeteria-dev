import { AnchorHTMLAttributes } from "react"


type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  title: string
}

export function Button({ title, ...rest }: ButtonProps) {
  return (
    <a href='#' className='bg-mainColor text-white w-fit py-1 px-8 rounded cursor-pointer hover:tracking-widest duration-100' {...rest}>
      <span>{title}</span>
    </a>
  )
}
