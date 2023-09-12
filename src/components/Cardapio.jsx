import React from 'react';
import { Link } from 'react-scroll';

const Cardapio = () => {
  return (
    <section id='cardapio'>

      <div className="bg-[#18975F] w-full py-6 mt-10 pt-2 bg-cover bg-center" style={{ backgroundImage: 'url("/sobre.png")' }}>
        <h1 className="text-white text-4xl py-6 text-center">Cardápio</h1>
      </div>
      
      <div className="bg-[#277D58] w-full h-4" />       
      <div className="bg-[#18975F] w-full h-4" />  
      <div className="bg-[#1ca96b] w-full py-6 pt-2 bg-cover bg-center">
        <div className="flex items-center justify-center gap-5 md:flex-row flex-col">
        <Link
          to="tortas-salgadas" 
          smooth={true}
          offset={-110} // Rolagem suave
          duration={1100} // Duração da animação de rolagem em milissegundos
          className="bg-[#16784D] text-white border-0 py-3 px-6 focus:outline-none hover:bg-[#2a6c4f] duration-200 rounded-lg text-2xl  mt-4"
        >
          Tortas Salgadas
        </Link>

        <Link
          to="tortas-doces" 
          smooth={true} // Rolagem suave
          offset={-110}
          duration={1100} // Duração da animação de rolagem em milissegundos
          className="bg-[#16784D] text-white border-0 py-3 px-6 focus:outline-none hover:bg-[#2a6c4f] duration-200 rounded-lg text-2xl  mt-4"
        >
          Tortas Doce
        </Link>

        <Link
          to="eventos" 
          smooth={true} // Rolagem suave
          offset={-110}
          duration={1100} // Duração da animação de rolagem em milissegundos
          className="bg-[#16784D] text-white border-0 py-3 px-6 focus:outline-none hover:bg-[#2a6c4f] duration-200 rounded-lg text-2xl  mt-4"
        >
          Festa e Eventos
        </Link>

        <Link
          to="ringrolls" 
          smooth={true} // Rolagem suave
          offset={-110}
          duration={1100} // Duração da animação de rolagem em milissegundos
          className="bg-[#16784D] text-white border-0 py-3 px-6 focus:outline-none hover:bg-[#2a6c4f] duration-200 rounded-lg text-2xl  mt-4"
        >
          Ring & Rolls
        </Link>
         
        </div>
      </div>
    </section>
  );
};

export default Cardapio;
