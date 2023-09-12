import React from 'react'
import TR from '/tacoring.jpg'
import Q from '/quesadilha1.jpg'
import RA from '/87.jpg'
import S from '/stromboli.jpg'

const RingRolls = () => {
    return (
        <section id='ringrolls'  class="text-gray-600 body-font">
          <div className="bg-[#277D58] w-full h-4" />       
          <div className="bg-[#18975F] w-full h-4" />  
            <div class="container px-5 py-14 mx-auto">
                <div class="flex flex-col text-center w-full mb-20">
                <h1 class="text-2xl font-medium title-font mb-4 text-gray-900 tracking-widest">Ring & Rolls</h1>
                <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them.</p>
                </div>
                <div class="flex flex-wrap -m-4">
                <div class="p-4 lg:w-1/2">
                    <div class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                    <img alt="team" class="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src={Q} />
                    <div class="flex-grow sm:pl-8">
                        <h2 class="title-font font-medium text-lg text-gray-900">Ring de Quesadillas (serve 6 pessoas)</h2>
                        <h3 class="text-gray-500">Preço: R$ 110,00</h3>
                        <p class="mb-4">Tortilhas de trigo, queijos, recheio deliciosos de frango e queijos + molho de pimenta (Salsa Roja Mexicana)</p>            
                    </div>
                    </div>
                </div>
                <div class="p-4 lg:w-1/2">
                    <div class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                    <img alt="team" class="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src={TR} />
                    <div class="flex-grow sm:pl-8">
                        <h2 class="title-font font-medium text-lg text-gray-900">Ring de Tacos</h2>
                        <h3 class="text-gray-500">12 tacos (mínimo): R$ 160,00 ~ 24 tacos: R$ 300,00</h3>
                        <p class="mb-4">Tortilhas ou tacos shell de milho crocante, molho de taco especial de carne, queijo, salada, sourcream, guacamole + alface picada + Salsa Roja Mexicana</p>                       
                    </div>
                    </div>
                </div>
                <div class="p-4 lg:w-1/2">
                    <div class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                    <img alt="team" class="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src={RA} />
                    <div class="flex-grow sm:pl-8">
                        <h2 class="title-font font-medium text-lg text-gray-900">RINGS COM MASSA ARTESANAL (serve 4 pessoas)</h2>   
                        <h3 class="text-gray-500">Preço: R$ 95,00</h3>             
                        <p class="mb-4">
                            
                        Massa artesanal e recheios:<br></br>
                        - Calabresa + Ricota + Espinafre do recheio, molho /salsas<br></br>
                        - Frango, requeijão e queijos<br></br>
                        - Carne + Ricota + Espinafre<br></br>
                        - Calabresa, requeijão e brócoli.<br></br>
                            
                        </p> 

                        <p class="mb-4">
                            
                        Molho central: Maionese, Rosé, sour Cream, Salsa Roja
                        Mexicana, Creme de Queijo Cheddar, "Creme de pimenta
                        Alecrim". Aproximadamente: 250 ml
                            
                        </p> 
                    </div>
                    </div>
                </div>
                <div class="p-4 lg:w-1/2">
                    <div class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                    <img alt="team" class="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src={S} />
                    <div class="flex-grow sm:pl-8">
                        <h2 class="title-font font-medium text-lg text-gray-900">ROLLS - Stromboli com recheios inesquecíveis</h2>
                        
                        <p class="mb-4">
                            
                        Massa artesanal com Recheios variados.<br></br>
                        - Frango TexMex. (G: R$ 30 e M: R$ 15)<br></br>
                        - Carne TexMex. (G: R$ 36 e M: R$ 17)<br></br>
                        - Tomate Seco + Ricota + Espinafre. (G: R$ 30 e M: R$ 15)<br></br>
                        - Calabresa + Ricota + Espinafre. (G: R$ 30 e M: R$ 15)<br></br>
                        - Frango + Requeijão + Ervas. (G: R$ 30 e M: R$ 15)<br></br>
                        - Portuguesa. (G: R$ 30 e M: R$ 15)<br></br>
                        - Calabresa e Brócoli. (G: R$ 30 e M: R$ 15)<br></br>
                        - Carne e Queijo. (G: R$ 36 e M: R$ 17)<br></br>
                        - Frango e Queijo. (G: R$ 30 e M: R$ 15)<br></br>
                        
                        
                        </p> 

                    </div>
                    </div>
                </div>
                
                </div>
            </div>
            </section>
      )
    }

export default RingRolls