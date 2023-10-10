import React from 'react'
import C1 from '/eventos.png';
import SwiperHome from './SwiperHome';

const Eventos = () => {
    return (
        <section id='eventos' class="text-gray-600 body-font">
            <div className="bg-[#277D58] w-full h-4" />
            <div className="bg-[#18975F] w-full h-4" />
            <div class="container px-5 py-14 mx-auto">
                <div class="flex flex-col text-center w-full mb-10">
                    <h1 class="text-2xl font-medium title-font mb-4 text-gray-900 tracking-widest">Festas e Eventos</h1>
                    <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Descubra o sabor autêntico das nossas tortas salgadas! Preparamos cada uma delas com ingredientes frescos e criatividade única.</p>
                </div>
                <div class="h-80 overflow-hidden mb-20">
                    <SwiperHome />
                </div>
                <div className="flex flex-wrap flex-col lg:flex-row -m-4">


                    <div className="p-4 lg:w-1/4">
                        <div class="h-full flex sm:flex-row flex-col items-center md:items-start justify-center text-center sm:text-left">
                            <div class="flex-grow sm:pl-8">
                                <h2 class="title-font font-medium text-lg text-gray-900">Salgados Assados ( R$ 120,00 / cento )</h2>

                                <p class="mb-4">

                                    Pastel assado:<br></br>
                                    - Cebola<br></br>
                                    - Carne<br></br>
                                    - Frango<br></br>
                                    - Ricota c/peito peru<br></br>
                                    - Ricota c/alho poró<br></br>

                                </p>

                                <p class="mb-4">

                                    Mini quiche<br></br>
                                    - Alho poró<br></br>
                                    - Napolitano<br></br>
                                    - Brócolis<br></br>
                                    - Queijo<br></br>
                                    - Atum<br></br>

                                </p>

                                <p class="mb-4">

                                    Mini pizza<br></br>
                                    - Marguerita<br></br>
                                    - Calabresa<br></br>
                                    - Napolitana<br></br>

                                </p>

                                <p class="mb-4">


                                    Esfira:<br></br>
                                    - Frango<br></br>
                                    - Carne<br></br>
                                    - Legumes<br></br>
                                    - Abóbora c/ carne seca<br></br>

                                </p>

                                <p class="mb-4">
                                    Empada de Frango<br></br>
                                    Doguinho<br></br>
                                </p>

                            </div>
                        </div>
                    </div>

                    <div className="p-4 lg:w-1/4">
                        <div class="h-full flex sm:flex-row flex-col items-center md:items-start justify-center text-center sm:text-left">
                            <div class="flex-grow sm:pl-8">
                                <h2 class="title-font font-medium text-lg text-gray-900">Assados Especiais ( R$ 140,00 / cento )</h2>

                                <p class="mb-4">

                                    Pastel de palmito<br></br>
                                    Pastel de camarão<br></br>
                                    Empadinha camarão<br></br>
                                    Empadinha palmito<br></br>

                                </p>

                                <p class="mb-4">

                                    <h2 class="title-font font-medium text-lg text-gray-900">Salgados Fritos ( R$ 100,00/ cento )</h2><br></br>
                                    TRADICIONAL<br></br>
                                    - Coxinha<br></br>
                                    - Quibe<br></br>
                                    - Pastel de carne<br></br>
                                    - Pastel de frango<br></br>
                                    - Pastel de napolitano<br></br>
                                    - Pastel caprese<br></br>
                                    - Bolinha de queijo<br></br>
                                    - Bolinha de presunto e queijo<br></br>
                                    - Salsicha<br></br>

                                </p>

                                <p class="mb-4">

                                    Especiais Frito<br></br>
                                    - Bolinho de frango (R$ 120 o cento)<br></br>
                                    - Mini espetinho de frango(R$ 120 o cento)<br></br>
                                    - Mini espetinho de frango<br></br>
                                    - Califórnia (R$ 120 o cento)<br></br>
                                    - Bombom de 3 queros (R$ 150 / cento)<br></br>

                                </p>

                            </div>
                        </div>
                    </div>

                    <div className="p-4 lg:w-1/4">
                        <div class="h-full flex sm:flex-row flex-col items-center md:items-start justify-center text-center sm:text-left">
                            <div class="flex-grow sm:pl-8">
                                <h2 class="title-font font-medium text-lg text-gray-900">Docinhos Tradicional ( R$ 110,00 / cento )</h2>

                                <p class="mb-4">

                                    - Brigadeiro tradicional<br></br>
                                    - Brigadeiro de limão<br></br>
                                    - Brigadeiro de maracuja<br></br>
                                    - Brigadeiro de Ninho<br></br>
                                    - Beijinho<br></br>
                                    - Casadinho<br></br>
                                    - Cajuzinho<br></br>
                                    - Morango<br></br>

                                </p>

                                <h2 class="title-font font-medium text-lg text-gray-900">Brigadeiro Gourmet ( R$ 130/ cento )</h2>
                                <p class="mb-4">

                                    - Castanha<br></br>
                                    - Amendoim<br></br>
                                    - Ninho<br></br>
                                    - Maracujá<br></br>
                                    - Chocolate<br></br>

                                </p>

                                <h2 class="title-font font-medium text-lg text-gray-900">Docinhos Especiais ( R$ 130/ cento )</h2>
                                <p class="mb-4">

                                    - Quindim<br></br>
                                    - Doce de leite c/ Coco queimado<br></br>
                                    - Coco queimado<br></br>
                                    - Olho de Sogra<br></br>

                                </p>

                                <h2 class="title-font font-medium text-lg text-gray-900">Vegano ( R$ 130/centa )</h2>
                                <p class="mb-4">

                                    - Brigadeiro<br></br>
                                    - Cajuzinho<br></br>

                                </p>

                            </div>
                        </div>
                    </div>

                    <div className="p-4 lg:w-1/4">
                        <div class="h-full flex sm:flex-row flex-col items-center md:items-start justify-center text-center sm:text-left">
                            <div class="flex-grow sm:pl-8">
                                <h2 class="title-font font-medium text-lg text-gray-900">Sem Lactose ( R$ 130,00 / cento )</h2>

                                <p class="mb-4">

                                    - Brigadeiro<br></br>
                                    - Limão<br></br>
                                    - Maracujá<br></br>
                                    - Ninho<br></br>
                                    - Casadinho<br></br>
                                    - Beilinho<br></br>
                                    - Cajuzinho<br></br>
                                    - Morango<br></br>

                                </p>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Eventos