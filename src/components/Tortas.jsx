import React, { useState, useEffect } from 'react';
import TF from '/torta-de-frango.jpg'
import CPP from '/chicken-pot-pie.jpg'
import TC from '/Aussie-Meat-Pie.jpg'
import TM from '/taco-pie.jpg'
import TB from '/torta-brocolis.jpg'
import TL from '/51.jpg'
import Q from '/quiches.jpg'
import S from '/saladas.jpg'


const Tortas = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth <= 768);
      };
  
      window.addEventListener('resize', handleResize);
  
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);

  return (
    <section id="tortas-salgadas" className="text-gray-600 body-font">

        <div class="container px-5 py-14 mx-auto">
            <div class="flex flex-col text-center w-full mb-20">
            <h1 class="text-2xl font-medium title-font mb-4 text-gray-900 tracking-widest">Tortas Salgadas</h1>
            <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Descubra o sabor autêntico das nossas tortas salgadas! Preparamos cada uma delas com ingredientes frescos e criatividade única.</p>
            </div>
            <div class="flex flex-wrap -m-4">
            <div class="p-4 lg:w-1/2">
                <div class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                <img alt="team" class="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src={TF} />
                <div class="flex-grow sm:pl-8">
                    <h2 class="title-font font-medium text-lg text-gray-900">Torta de Frango ( Tipo empadão )</h2>
                    <h3 class="text-gray-500">Individual: R$ 29,50 - Peso aproximado 500g</h3>
                    <h3 class="text-gray-500">Familiar ( Rende - 8 porções ): R$ 100,00 - Peso aproximado 1,5kg. </h3>
                    <p class="mb-4">Massa artesanal, frango, molho de tomate, azeitona, milho e queijo cremoso.</p>            
                </div>
                </div>
            </div>
            <div class="p-4 lg:w-1/2">
                <div class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                <img alt="team" class="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src={CPP} />
                <div class="flex-grow sm:pl-8">
                    <h2 class="title-font font-medium text-lg text-gray-900">Torta de Frango ( Chicken Pot Pie )</h2>
                    <h3 class="text-gray-500">Individual: R$ 29,50 - Peso aproximado 500g</h3>
                    <h3 class="text-gray-500">Familiar (Rende - 8 porções): R$ 100,00 - Peso aproximado 1,5kg.</h3>
                    <p class="mb-4">Massa artesanal, frango deliciosamente temperado, molho béchamel, cenoura e ervilha.</p>                       
                </div>
                </div>
            </div>
            <div class="p-4 lg:w-1/2">
                <div class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                <img alt="team" class="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src={TC} />
                <div class="flex-grow sm:pl-8">
                    <h2 class="title-font font-medium text-lg text-gray-900">Torta de Carne ( Australian Meat Pie )</h2>
                    <h3 class="text-gray-500">Individual: R$ 39,00 - Peso aproximado 500g</h3>
                    <h3 class="text-gray-500">Familiar ( Rende - 8 porções ): R$ 120,00 - Peso aproximado 1,5kg. </h3>
                    <p class="mb-4">Massa artesanal, carne de primeira, queijo cheddar e molho especial (cebola, tomate, cenoura, salsão, vinho e molho inglês).</p> 
                </div>
                </div>
            </div>
            <div class="p-4 lg:w-1/2">
                <div class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                <img alt="team" class="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src={TM} />
                <div class="flex-grow sm:pl-8">
                    <h2 class="title-font font-medium text-lg text-gray-900">Torta Tex Mex ( Taco Pie )</h2>
                    <h3 class="text-gray-500">Familiar (Rende - 8 Porções): R$ 135,00 - Peso aproximado 1,5kg.</h3>
                    <p class="">Massa artesanal, carne de primeira (com tempero de taco especial), queijo. Coberturas: Nachos, Sourcream e Salada.  </p> 
                </div>
                </div>
            </div>
            <div class="p-4 lg:w-1/2">
                <div class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                <img alt="team" class="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src={TB} />
                <div class="flex-grow sm:pl-8">
                    <h2 class="title-font font-medium text-lg text-gray-900">Torta de Brócoli e Calabresa</h2>
                    <h3 class="text-gray-500">Individual: R$ 35,00 - Peso aproximado 500g</h3>
                    <h3 class="text-gray-500">Familiar (Rende - 8 Porções): R$ 110,00 - Peso aproximado 1,5kg. </h3>
                    <p class="mb-4">Massa artesanal, molho especial, brócoli, calabresa e queijo.</p> 
                </div>
                </div>
            </div>
            <div class="p-4 lg:w-1/2">
                <div class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                <img alt="team" class="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src={TL} />
                <div class="flex-grow sm:pl-8">
                    <h2 class="title-font font-medium text-lg text-gray-900">Torta de Legumes</h2>
                    <h3 class="text-gray-500">Individual: R$ 25,00 - Peso aproximado 500g</h3>
                    <h3 class="text-gray-500">Familiar ( Rende - 8 porções ): R$ 80,00 - Peso aproximado 1,5kg </h3>
                    <p class="mb-4">Massa artesanal, molho branco especial, legumes sortidos (essencialmente: brócoli, cenoura, cogumelos, ervilhas).</p> 
                </div>
                </div>
            </div>
            <div class="p-4 lg:w-1/2">
                <div className={`h-full flex sm:flex-row flex-col ${isMobile ? 'items-center' : 'items-start'} text-center sm:text-left`}>
                <img alt="team" class="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src={Q} />
                <div class="flex-grow sm:pl-8">
                    <h2 class="title-font font-medium text-lg text-gray-900">Quiches</h2>

                    <p class="mb-4">
                        
                    Recheios:<br></br>
                    1. Alho Poró<br></br>
                    2. Caprese<br></br>
                    3. Espinafre e tomate seco<br></br>
                    4. Frango com queijo<br></br>
                    5. Brocoli com calabresa<br></br>
                    6. Peito de peru e Ricota<br></br>
                    7. Napolitano (queijo, presunto e legumes)<br></br>
                        
                    </p> 

                    <p class="mb-4">
                        
                    Tamanhos<br></br>
                    Familiar ( 24cm )<br></br>
                    Individual ( 16cm )<br></br>
                    Handy ( 11cm )<br></br>
                    Mini Quiche ( 6cm )<br></br>
                        
                    </p> 

                    <h3 class="text-gray-500">Familiar: R$ 75,00</h3>
                    <h3 class="text-gray-500">Individual: R$ 39,00</h3>
                    <h3 class="text-gray-500">Handy: R$ 20,00</h3>
                    <h3 class="text-gray-500 mb-4">Mini Quiche: R$ 6,00 ( pedido mínimo de 4 mini )</h3>
                    
                </div>
                </div>
            </div>
            <div class="p-4 lg:w-1/2">
                <div className={`h-full flex sm:flex-row flex-col ${isMobile ? 'items-center' : 'items-start'} text-center sm:text-left`}>
                <img alt="team" class="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src={S} />
                <div class="flex-grow sm:pl-8">
                    <h2 class="title-font font-medium text-lg text-gray-900">Saladas de Acompanhamento</h2>
                    <h3 class="text-gray-500">R$ 12,00 (150g)</h3>
                    <p class="mb-4">Dependente da disponibilidade de ingredientes frescos</p> 
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
  )
}

export default Tortas