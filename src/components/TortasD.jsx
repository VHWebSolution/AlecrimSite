import React from 'react'
import C1 from '/1.png';
import BP from '/banana-pie.jpg';
import CK from '/cheesecake.jpeg';
import L from '/limao.jpg';
import MM from '/mm.jpg';

const TortasD = () => {
  return (
    <section id='tortas-doces' class="text-gray-600 body-font">
      <div className="bg-[#277D58] w-full h-4" />       
      <div className="bg-[#18975F] w-full h-4" />  
        <div class="container px-5 py-14 mx-auto">
            <div class="flex flex-col text-center w-full mb-20">
            <h1 class="text-2xl font-medium title-font mb-4 text-gray-900 tracking-widest">Tortas Doce</h1>
            <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Descubra o sabor autêntico das nossas tortas doce! Preparamos cada uma delas com ingredientes frescos e criatividade única.</p>
            </div>
            <div class="flex flex-wrap -m-4">
            <div class="p-4 lg:w-1/2">
                <div class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                <img alt="team" class="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src={C1} />
                <div class="flex-grow sm:pl-8">
                    <h2 class="title-font font-medium text-lg text-gray-900">Torta de Maça ( Classic Apple Pie )</h2>
                    <h3 class="text-gray-500">Individual: R$ 25,00 (16cm).</h3>
                    <h3 class="text-gray-500">Familiar (Rende 8 fatias): R$ 80,00 (24cm).</h3>
                    <p class="mb-4">Massa artesanal, maçã, manteiga, limão, canela, noz moscada, açúcar mascavo e açúcar regular.</p>            
                </div>
                </div>
            </div>
            <div class="p-4 lg:w-1/2">
                <div class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                <img alt="team" class="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src={BP} />
                <div class="flex-grow sm:pl-8">
                    <h2 class="title-font font-medium text-lg text-gray-900">Torta de Banana</h2>
                    <h3 class="text-gray-500">Individual: R$ 22,00 (16cm).</h3>
                    <h3 class="text-gray-500">Grande (Rende 8 porções): R$ 75,00 (24cm).</h3>
                    <p class="mb-4">Massa artesanal, banana, açúcar, leite, baunilha, manteiga, sal e noz moscada.</p>                       
                </div>
                </div>
            </div>
            <div class="p-4 lg:w-1/2">
                <div class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                <img alt="team" class="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src={CK} />
                <div class="flex-grow sm:pl-8">
                    <h2 class="title-font font-medium text-lg text-gray-900">CheeseCake</h2>
                    <h3 class="text-gray-500">Individual em Pote: Morango: R$ 15,00 / Frutas Vermelhas: R$ 20,00 (14cm)</h3>
                    <h3 class="text-gray-500">Familiar (Rende 8 porções): Morango: R$ 110,00 / Frutas Vermelhas: R$ 125,00 (25cm)</h3>
                    <p class="mb-4">Massa de biscoito especial, manteiga, açúcar, Cream Cheese, creme de leite. Coberturas: Morango ou Frutas Vermelhas.</p> 
                </div>
                </div>
            </div>
            <div class="p-4 lg:w-1/2">
                <div class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                <img alt="team" class="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src={L} />
                <div class="flex-grow sm:pl-8">
                    <h2 class="title-font font-medium text-lg text-gray-900">Torta de Merengue de Limão</h2>
                    <h3 class="text-gray-500">Individual: R$ 22,00 (16cm).</h3>
                    <h3 class="text-gray-500">Grande (Rende 8 porções): R$ 75,00 (24cm).</h3>
                    <p class="mb-4">Massa artesanal, limão, açúcar, leite condensado, creme de leite, ovos e manteiga.</p> 
                </div>
                </div>
            </div>
            <div class="p-4 lg:w-1/2">
                <div class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                <img alt="team" class="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src={MM} />
                <div class="flex-grow sm:pl-8">
                    <h2 class="title-font font-medium text-lg text-gray-900">Mini-Torta de Maça</h2>
                    <h3 class="text-gray-500">Individual: R$ 7,00</h3>
                    <h3 class="text-gray-500">Pedidos de 6 Tortas: R$ 36,00 </h3>
                    <p class="mb-4">Massa artesanal, frango, molho de tomate, azeitona, milho e queijo cremoso.</p> 
                </div>
                </div>
            </div>
            
            </div>
        </div>
        </section>
  )
}

export default TortasD