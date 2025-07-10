
import { AiFillStar } from 'react-icons/ai';
//Frente

import BlusaVermelha from './Components/assets/blusaVermelha.jpg';
import CalcaMoletom from './Components/assets/calçaPretaFrente.svg';
import CamisetaPolo from './Components/assets/camisetaPoloFrente.svg';
import RegataListrada from './Components/assets/regataListradaFrente.svg';
import SaiaLonga from './Components/assets/saiaLongaFrente.svg';
import VestidoLongo from './Components/assets/vestidoLongoFrente.svg';

import ItemExemplo from './Components/assets/itemExemplo.svg'

//Verso
import BlusaVermelhaV from './Components/assets/blusaVermelhaVerso.svg'
import CalcaMoletomV from './Components/assets/calçaPretaVerso.svg'
import CamisetaPoloV from './Components/assets/camisetaPoloVerso.svg'
import RegataListradaV from './Components/assets/regataListradaVerso.svg'
import SaiaLongaV from './Components/assets/saiaLongaVerso.svg'
import VestidoLongoV from './Components/assets/vestidoLongoVerso.svg'


const LANCAMENTOS = [
  {
    id: 1,
    img: BlusaVermelha,
    title: 'Blusinha Vermelha',
    star: <AiFillStar className="rating-star" />,
    reviews: '(102 reviews)',
    prevPrice: '100,00 R$',
    newPrice: '1,00 R$',
    company: 'Fashion Co',
    color: 'vermelha',
    category: 'blusa',
  },
  {
    id: 2,
    img: CalcaMoletom,
    title: 'Calça Moletom',
    star: <AiFillStar className="rating-star" />,
    reviews: '(99 reviews)',
    prevPrice: '100,00 R$',
    newPrice: '1,00 R$',
    company: 'Urban Style',
    color: 'cinza',
    category: 'calça',
  },
  {
    id: 3,
    img: CamisetaPolo,
    title: 'Camiseta Polo',
    star: <AiFillStar className="rating-star" />,
    reviews: '(112 reviews)',
    prevPrice: '100,00 R$',
    newPrice: '1,00 R$',
    company: 'Classic Polo',
    color: 'azul',
    category: 'camiseta',
  },
  {
    id: 4,
    img: RegataListrada,
    title: 'Regata Listrada',
    star: <AiFillStar className="rating-star" />,
    reviews: '(78 reviews)',
    prevPrice: '100,00 R$',
    newPrice: '1,00 R$',
    company: 'Trendy Stripes',
    color: 'listrada',
    category: 'regata',
  },
  {
    id: 5,
    img: SaiaLonga,
    title: 'Saia Longa',
    star: <AiFillStar className="rating-star" />,
    reviews: '(84 reviews)',
    prevPrice: '100,00 R$',
    newPrice: '1,00 R$',
    company: 'Fashion Skirts',
    color: 'vermelha',
    category: 'saia',
  },
  {
    id: 6,
    img: VestidoLongo,
    title: 'Vestido Longo',
    star: <AiFillStar className="rating-star" />,
    reviews: '(123 reviews)',
    prevPrice: '100,00 R$',
    newPrice: '1,00 R$',
    company: 'Glam Dress',
    color: 'verde',
    category: 'vestido',
  },
];

export default LANCAMENTOS;