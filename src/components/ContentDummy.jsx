import React from 'react'
import TB from '/torta-brocolis.jpg'
import Q from '/tacoring.jpg'
import F from '/80.jpg'

const ContentDummy = () => {
  return (
    <section class="text-gray-600 body-font">
      <div class="container px-5 py-14 mx-auto">
        <div class="flex flex-col">
          <div class="h-1 bg-gray-200 rounded overflow-hidden">
            <div class="w-[485px] h-full bg-[#18975F]"></div>
          </div>
          <div class="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
            <h1 class="sm:w-2/5 text-gray-900 font-medium title-font text-2xl mb-2 sm:mb-0">Novidades</h1>
            <p class="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0">Estamos sempre inovando para satisfazer seu paladar com o que há de mais saboroso e fresco na culinária. Junte-se a nós e experimente as novidades do nosso menu que vão encantar seus sentidos. </p>
          </div>
        </div>
        <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
          <div class="p-4 md:w-1/3 sm:mb-0 mb-6">
            <div class="rounded-lg h-64 overflow-hidden">
              <img alt="content" class="object-cover object-center h-full w-full" src={Q} />
            </div>
            <h2 class="text-xl font-medium title-font text-gray-900 mt-5">Atualizações recentes do Instagram</h2>
            <p class="text-base leading-relaxed mt-2">Em nosso Instagram, estamos sempre compartilhando as últimas novidades, tendências e momentos especiais da nossa jornada culinária. Siga-nos para não perder nenhuma atualização importante!</p>
            <a class="text-[#18975F] inline-flex items-center mt-3">Acessar o site
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
          <div class="p-4 md:w-1/3 sm:mb-0 mb-6">
            <div class="rounded-lg h-64 overflow-hidden">
              <img alt="content" class="object-cover object-center h-full w-full" src={TB} />
            </div>
            <h2 class="text-xl font-medium title-font text-gray-900 mt-5">Nova receita de Torta Vegana!</h2>
            <p class="text-base leading-relaxed mt-2">Estamos entusiasmados em apresentar nossa mais recente criação - uma deliciosa torta vegana que combina sabores frescos e ingredientes naturais. Essa receita exclusiva é uma celebração de nossa paixão por culinária saudável e saborosa.</p>
            <a class="text-[#18975F] inline-flex items-center mt-3">Acessar a receita
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
          <div class="p-4 md:w-1/3 sm:mb-0 mb-6">
            <div class="rounded-lg h-64 overflow-hidden">
              <img alt="content" class="object-cover object-center h-full w-full" src={F} />
            </div>
            <h2 class="text-xl font-medium title-font text-gray-900 mt-5">Festas e Eventos</h2>
            <p class="text-base leading-relaxed mt-2">Queremos tornar seu evento memorável e saboroso. estamos prontos para criar uma experiência culinária excepcional para você e seus convidados. Deixe-nos cuidar dos detalhes culinários para que você possa desfrutar plenamente do seu evento e criar memórias inesquecíveis."</p>
            <a class="text-[#18975F] inline-flex items-center mt-3">Saiba mais
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContentDummy