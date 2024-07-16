import { Button } from "./components/Button";
import { Container } from "./components/Container";
import { Card } from "./components/Card";
import { CardClient } from "./components/CardClient";

import aboutImg from './assets/about-img.jpg'
import coffe1 from './assets/menu-1.png'
import coffe2 from './assets/menu-2.png'
import coffe3 from './assets/menu-3.png'
import coffe4 from './assets/menu-4.png'
import coffe5 from './assets/menu-5.png'
import coffe6 from './assets/menu-6.png'
import client1 from './assets/pic-1.png'
import client2 from './assets/pic-2.png'
import client3 from './assets/pic-3.png'
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebook, FaSquareXTwitter } from "react-icons/fa6";

export default function Home() {
  return (
    <>
      <div className="home-container">
        <Container>
          <section id="home">
            <div className="flex flex-col items-start justify-center max-w-[60%] min-h-[100vh]">
              <span className="text-white text-6xl font-bold">
                CODE COM O MELHOR CAFÉ DA REGIÃO
              </span>
              <p className="text-white my-4 text-lg font-extralight">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus voluptate, vitae officiis, commodi minima, fugit in dolores tempora iste quos sit. Quas molestiae blanditiis aspernatur impedit doloremque saepe. Ab, a!</p>

              <Button title="Peça agora!" />
            </div>
          </section>
        </Container>
      </div>

      <Container>
        <div id="about" className="h-[84px]" />
        <section className="flex flex-col items-center justify-center">
          <h2 className="mb-4 uppercase font-bold text-white text-4xl">Sobre <span className="text-mainColor uppercase">nós</span></h2>

          <div className="flex flex-row w-full">
            <img src={aboutImg} alt="coffe" className="w-6/12" />

            <div className="flex flex-col bg-bgBlack space-y-4 px-6 py-8">
              <h3 className="text-white text-lg">O que faz do nosso café especial?</h3>

              <p className="p-about">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate cum nemo enim, laborum reprehenderit dolore labore veritatis ducimus maxime accusantium iusto odio quas cumque fuga aperiam, facere ea?</p>
              <p className="p-about line-clamp-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate cum nemo enim, laborum reprehenderit dolore labore veritatis ducimus.</p>

              <Button title="Saiba mais" />
            </div>
          </div>
        </section>

        <div id="menu" className="h-[84px]" />
        <section className="flex flex-col w-full items-center">
          <h1 className="text-white text-4xl font-bold uppercase mb-4">nosso <span className="text-mainColor uppercase">menu</span></h1>

          <div className="grid grid-cols-3 gap-4 w-full">
            <Card
              src={coffe1}
              title="Coffe Light"
              price="15.99"
              priceThrough="20.99"
            />

            <Card
              src={coffe2}
              title="Coffe Light"
              price="15.99"
              priceThrough="20.99"
            />

            <Card
              src={coffe3}
              title="Coffe Light"
              price="15.99"
              priceThrough="20.99"
            />

            <Card
              src={coffe4}
              title="Coffe Light"
              price="15.99"
              priceThrough="20.99"
            />

            <Card
              src={coffe5}
              title="Coffe Light"
              price="15.99"
              priceThrough="20.99"
            />

            <Card
              src={coffe6}
              title="Coffe Light"
              price="15.99"
              priceThrough="20.99"
            />
          </div>
        </section>

        <div id="review" className="h-[84px]" />
        <section className="flex flex-col w-full items-center">
          <h1 className="text-white text-4xl font-bold uppercase mb-4">
            nossos <span className="text-mainColor uppercase">clientes</span>
          </h1>

          <div className="grid grid-cols-3 gap-4 w-full">
            <CardClient
              src={client1}
              name="Thiago Marques"
            />
            <CardClient
              src={client2}
              name="Ana Clara"
            />
            <CardClient
              src={client3}
              name="Renato Garcia"
            />
          </div>
        </section>

        <div id="address" className="h-[84px]" />
        <section className="mb-[84px] flex flex-col w-full items-center">
          <h1 className="text-white text-4xl font-bold uppercase mb-4">
            nosso <span className="uppercase text-mainColor">endereço</span>
          </h1>

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58805.34180431758!2d-43.24861407279966!3d-22.901053413636802!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x997f254ff78d2d%3A0xdd4ea3b57ac6da96!2sConfeitaria%20Colombo%20(CCBB)!5e0!3m2!1spt-BR!2sbr!4v1713977596346!5m2!1spt-BR!2sbr"
            width="600"
            height="450"
            className="border-2 border-white/20 rounded opacity-70 hover:opacity-100"
            loading="lazy"
          />
        </section>

        <footer className="flex flex-col items-center w-full mb-16">
          <h1 className="text-white text-4xl font-bold uppercase mb-4">
            nossas <span className="uppercase text-mainColor">redes sociais</span>
          </h1>

          <div className="flex gap-12 items-center justify-center">
            <section className="divSocial">
              <AiFillInstagram size={34} />
              <span>Instagram</span>
            </section>
            <section className="divSocial">
              <FaFacebook size={34} />
              <span>Facebook</span>
            </section>
            <section className="divSocial">
              <FaSquareXTwitter size={34} />
              <span>Twitter</span>
            </section>
          </div>
        </footer>
      </Container>
    </>
  )
}
