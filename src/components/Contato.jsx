import React from 'react'
import { MdOutlineWhatsapp } from 'react-icons/md'

const Contato = () => {
  return (
    <section class="text-gray-600 body-font relative" id='contato'>
        <div class="container px-5 pt-5 mx-auto">
            <div class="flex flex-col text-center w-full mb-12">
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Entre em contato</h1>
            <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Entre em contato diretamente pelo nosso whatsapp.</p>
            </div>
            <div class="lg:w-1/2 md:w-2/3 mx-auto">
            <div class="flex justify-center">
            <a href="https://api.whatsapp.com/message/BTCIPKF2VL32O1?autoload=1&app_absent=0">
                <button
                    className="inline-flex items-center bg-gradient-to-b from-[#16784D] via-[#2D8F64] to-[#158453] border-0 py-[7px] px-5 focus:outline-none hover:bg-green-500 duration-200 rounded-[20px] text-base text-white"
                >
                    <MdOutlineWhatsapp className='mr-2 text-2xl' />
                    Entre em Contato
                </button>
                </a>
            </div>
            </div>
        </div>
        </section>
  )
}

export default Contato