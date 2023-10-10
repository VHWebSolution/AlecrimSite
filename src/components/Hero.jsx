import React from 'react';
import BannerImage from '/banner.png';
import { Link } from 'react-scroll';

const Hero = () => {
  return (
    <section id="home" className="bg-cover bg-no-repeat bg-center" style={{ backgroundImage: `url(${BannerImage})`, height: '86vh' }}>
      <div className="container mx-auto flex h-full px-5 items-center justify-center flex-col text-white">
        <div className="text-center lg:w-3/4 w-full py-10 rounded-3xl">
          <div className="text-center">
            <h1 className="title-font sm:text-5xl text-4xl mb-4 text-white font-noto font-bold">
              Comida de qualidade para sua Festa!
            </h1>
            <div className="flex flex-col items-center">
              <p className="mb-4 leading-relaxed text-2xl">
                Sua Festa, Sua Alegria, Nossa Especialidade!
              </p>
              <Link to="cardapio" smooth={true} offset={-200} duration={1100}  >
                <button className="inline-flex text-white text-lg bg-[#277D58] rounded-[20px] border-0 py-2 px-8 focus:outline-none hover:bg-[#18975F] duration-500 cursor-pointer">
                  Conheça nosso cardápio
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="26"
                    fill="currentColor"
                    class="bi bi-arrow-right my-auto ml-2"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                    />
                  </svg>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#277D58] w-full h-4" />
      <div className="bg-[#18975F] w-full h-4" />
    </section>
  );
};

export default Hero;
