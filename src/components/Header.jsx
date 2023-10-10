import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import Logo from '/Logo.png'
import {
    MdOutlineMenu,
    MdOutlineClose,
    MdOutlineWhatsapp,
} from 'react-icons/md'

import {
    FaTruck,
    FaEnvelope
} from 'react-icons/fa6'

import {
    ImPhone
} from 'react-icons/im'

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [paragraphIndex, setParagraphIndex] = useState(0);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    // Defina seus parágrafos e ícones correspondentes
    const paragraphs = [
        {
            text: "alecrim.saboresdomundo@gmail.com",
            icon: <FaEnvelope className="text-2xl mr-2" />
        },
        {
            text: "Realizamos entregas na região de Florianópolis!",
            icon: <FaTruck className="text-2xl mr-2" />
        },
        {
            text: "Ligue para o número: (48) 98829-8883",
            icon: <ImPhone className="text-xl mr-2 mt-[2px]" />
        }
    ];

    useEffect(() => {
        // Verifique se a largura da tela é menor ou igual a 768px (valor típico de dispositivos móveis)
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 1168);
        };

        handleResize(); // Defina o estado inicial com base na largura da tela

        window.addEventListener('resize', handleResize); // Atualize o estado ao redimensionar

        return () => {
            window.removeEventListener('resize', handleResize); // Remova o evento de redimensionamento ao desmontar o componente
        };
    }, []);

    useEffect(() => {
        // Verifique se a largura da tela é menor ou igual a 768px e inicie a troca de parágrafos
        if (isMobile) {
            const interval = setInterval(() => {
                // Avance para o próximo parágrafo ou volte ao início quando atingir o último
                setParagraphIndex((prevIndex) =>
                    prevIndex === paragraphs.length - 1 ? 0 : prevIndex + 1
                );
            }, 3000); // Troca a cada 3 segundos

            return () => clearInterval(interval); // Limpa o intervalo ao desmontar o componente
        }
    }, [isMobile]);

    return (
        <header className="text-gray-600 body-font justify-around fixed top-0 left-0 w-full z-10 bg-[#FEFEFE] backdrop-blur-md">
            {isMobile ? (
                <div className={`flex items-center justify-around flex-wrap bg-[#16784D] h-[40px] sm:h-auto ${isMobile ? 'text-slider' : ''}`}>
                    <p className="text-white text-[16px] flex">
                        {paragraphs[paragraphIndex].icon} {paragraphs[paragraphIndex].text}
                    </p>
                </div>
            ) : (
                <div className="flex items-center justify-around flex-wrap bg-[#16784D] h-[40px] px-12">
                    {paragraphs.map((paragraph, index) => (
                        <p key={index} className="text-white text-[16px] flex">
                            {paragraph.icon} {paragraph.text}
                        </p>
                    ))}
                </div>
            )}
            <div className="container mx-auto flex items-center justify-between py-5 md:flex-row flex-col">
                <div className="flex items-center">
                    <img src={Logo} alt="" srcSet="" />
                </div>
                <div className="md:hidden flex items-center mt-2">
                    <button
                        onClick={toggleMenu}
                        className="text-green cursor-pointer"
                    >
                        {menuOpen ? (
                            <MdOutlineClose className="text-3xl text-[#454]" />
                        ) : (
                            <MdOutlineMenu className="text-3xl text-[#454]" />
                        )}
                    </button>
                    
                </div>
                <nav className={`ml-4 md:ml-20 md:flex md:flex-wrap items-center text-base justify-center ${menuOpen ? 'block' : 'hidden'}`}>
                <Link to="home" smooth={true} offset={-150} duration={1100} className="mr-5 hover:text-gray-400 duration-200  cursor-pointer">
                Início
                </Link>
                <Link to="sobre" smooth={true} offset={-175} duration={1100} className="mr-5 hover:text-gray-400 duration-200 cursor-pointer">
                Sobre
                </Link>
                <Link to="cardapio" smooth={true} offset={-200} duration={1100} className="mr-5 hover:text-gray-400 duration-200 cursor-pointer">
                Cardápio
                </Link>
                <Link to="encomenda" smooth={true} offset={-145} duration={1100} className="mr-5 hover:text-gray-400 duration-200 cursor-pointer">
                Encomendas
                </Link>
                <Link to="contato" smooth={true} offset={-95} duration={1100} className="mr-5 hover:text-gray-400 duration-200 cursor-pointer">
                Contato
                </Link>
                </nav>

                <button
                        onClick={toggleMenu}
                        className={`md:hidden inline-flex items-center bg-gradient-to-b mt-4 from-[#16784D] via-[#2D8F64] to-[#158453] border-0 py-[7px] px-5 focus:outline-none hover:bg-green-500 duration-200 rounded-[20px] text-base text-white ml-4 ${menuOpen ? '' : 'hidden'}`}
                    >
                        <MdOutlineWhatsapp className='mr-2 text-2xl' />
                        Entre em Contato
                    </button>

                <a href="https://api.whatsapp.com/message/BTCIPKF2VL32O1?autoload=1&app_absent=0">
                <button
                    className="hidden md:inline-flex items-center bg-gradient-to-b from-[#16784D] via-[#2D8F64] to-[#158453] border-0 py-[7px] px-5 focus:outline-none hover:bg-green-500 duration-200 rounded-[20px] text-base text-white mt-4"
                >
                    <MdOutlineWhatsapp className='mr-2 text-2xl' />
                    Entre em Contato
                </button>
                </a>
            </div>
        </header>
    );
};

export default Header;
