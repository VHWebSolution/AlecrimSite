import Hero from './components/Hero'
import Sobre from './components/Sobre'
import SwiperHome from './components/SwiperHome'
import Cardapio from './components/Cardapio'
import Footer from './components/Footer'
import Content from './components/Content'
import ContentDummy from './components/ContentDummy'
import Tortas from './components/Tortas'
import TortasD from './components/TortasD'
import Eventos from './components/Eventos'
import RingRolls from './components/RingRolls'
import Encomenda from './components/Encomenda'
import Contato from './components/Contato'

function App() {

  return (
    <div className="mt-[130px]">
      <Hero />
      <div className='mt-8'>
       <Sobre />
      </div>
      <ContentDummy />
      <Content />
      <SwiperHome />
      <Cardapio />
      <Tortas />
      <TortasD />
      <RingRolls />
      <Eventos />
      <Encomenda />
      <Contato />
      <Footer />
    </div>
  )
}

export default App
