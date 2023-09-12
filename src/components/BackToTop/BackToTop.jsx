import { useState, useEffect } from 'react';
import { BsFillArrowUpCircleFill } from 'react-icons/bs';
import { Link } from 'react-scroll';

const BackToTop = () => {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const showScroll = scroll >= 660;
  const scrollUpClass = showScroll ? 'scale-100' : 'scale-0'; 

  return (
    <Link
      to="home"
      smooth={true}
      offset={-145}
      duration={1100}
      id="scroll-up"
      className={`fixed bottom-4 right-4 w-16 h-16 p-4 rounded-full bg-[#16784D] text-white ${scrollUpClass} transform transition-transform duration-300 hover:scale-110`}
    >
      <BsFillArrowUpCircleFill className="w-8 h-8 mx-auto" />
    </Link>
  );
};

export default BackToTop;
