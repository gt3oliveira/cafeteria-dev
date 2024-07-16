import { ReactNode } from 'react'

export function Container({ children }: { children: ReactNode }) {
  return (
    <section className='max-w-3xl mx-auto'>
      {children}
    </section>
  )
}
