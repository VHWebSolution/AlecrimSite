import React from 'react';
import BannerImage from '/sobre.png';

const Sobre = () => {
  return (
    <section
      id='sobre'
      className="bg-cover bg-no-repeat bg-center flex justify-center items-center"
      style={{ backgroundImage: `url(${BannerImage})`, height: '300px' }} 
    >
      <div className="w-full sm:w-4/5 md:w-4/5 lg:w-3/4 xl:w-2/3">
        <p className='text-base md:text-[16px] lg:text-[18px] xl:text-[20px] text-white text-center'>
          Na Alecrim - Sabores do Mundo, dedicamos nossa paixão à criação de doces e salgados que transcendem fronteiras culinárias. Com ingredientes selecionados cuidadosamente e uma abordagem artesanal, nossa empresa é a escolha definitiva para quem busca experiências gastronômicas únicas e irresistíveis. Explore um mundo de sabores e sensações em cada mordida. Sinta-se convidado a experimentar o melhor da culinária global em cada criação da Alecrim.
        </p>
      </div>
    </section>
  );
}

export default Sobre;
