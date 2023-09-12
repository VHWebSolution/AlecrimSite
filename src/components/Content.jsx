import React from 'react'

const Content = () => {
  return (
    <section class="text-gray-600 body-font">
      <div class="container px-5 mt-12 mx-auto">
        <div class="flex flex-col">
        <div class="h-1 bg-gray-200 rounded overflow-hidden flex">
          <div class="w-[485px] h-full bg-[#18975F] ml-auto"></div>
          </div>
          <div class="flex flex-wrap sm:flex-row flex-col-reverse py-6 mb-12">
            <p class="sm:w-3/5 leading-relaxed text-base sm:pr-10 pr-0">Estamos orgulhosos de compartilhar nosso compromisso com a qualidade, a criatividade e a excelência culinária. Explore nossa galeria de fotos e deixe-se tentar pelos prazeres que brotam diretamente da nossa cozinha até sua mesa.</p>
            <div class="sm:w-2/5 text-gray-900 font-medium title-font text-2xl mb-2 sm:mb-0 sm:pl-10 pl-0 flex justify-end">
              <h1>Diretamente da nossa cozinha</h1>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Content