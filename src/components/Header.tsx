import { FaSearch, FaShoppingCart } from 'react-icons/fa'
import imgLogo from '../assets/logo.png'
import { Link, animateScroll as scroll } from 'react-scroll'

export function Header() {
  const scrollToTop = () => {
    scroll.scrollToTop()
  }

  return (
    <header className='w-full h-[80px] fixed bg-bgBlack/95 top-0 left-0 z-99 border-b border-b-[rgba(255,255,255,0.3)]'>
      <div className='flex flex-row items-center max-w-3xl mx-auto'>
        <Link to='' className='py-3'
          onClick={scrollToTop}
          spy
          smooth
          offset={-20}
          duration={500}
        >
          <img src={imgLogo} alt="logo" className='w-16 cursor-pointer' />
        </Link>

        <nav className='flex flex-row flex-1 items-center justify-center gap-4 px-4'>
          <Link to='home'
            activeClass='active'
            spy
            smooth
            offset={-20}
            duration={500}
          >Home</Link>

          <Link to='about'
            activeClass='active'
            spy
            smooth
            offset={-20}
            duration={500}
          >Sobre</Link>

          <Link to='menu'
            activeClass='active'
            spy
            smooth
            offset={-20}
            duration={500}
          >Menu</Link>

          <Link to="review"
            activeClass='active'
            spy
            smooth
            offset={-20}
            duration={500}
          >Avaliações</Link>

          <Link to="address"
            activeClass='active'
            spy
            smooth
            offset={-20}
            duration={500}
          >Endereço</Link>
        </nav>

        <div className='flex flex-row gap-4'>
          <FaSearch size={18} color='#fff' className='icon' />
          <FaShoppingCart size={18} color='#fff' className='icon' />
        </div>
      </div>
    </header>
  )
}
