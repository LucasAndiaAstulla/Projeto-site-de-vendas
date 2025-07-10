//Frente
/*Todas as roupas*/
import BlusaVermelha from './Components/assets/blusaVermelha.jpg';
import BlusinhaBranca from './Components/assets/blusaBrancaFrente.svg';
import CalcaJeans from './Components/assets/calçaJeansFrente.svg';
import CalcaMoletom from './Components/assets/calçaPretaFrente.svg';
import CamisetaBranca from './Components/assets/camisetaBrancaFrente.svg';
import CamisetaPolo from './Components/assets/camisetaPoloFrente.svg';
import RegataBranca from './Components/assets/regataBrancaFrente.svg';
import RegataListrada from './Components/assets/regataListradaFrente.svg';
import SaiaCurta from './Components/assets/saiaCurtaFrente.svg';
import SaiaLonga from './Components/assets/saiaLongaFrente.svg';
import VestidoCurto from './Components/assets/vestidoCurtoFrente.svg';
import VestidoLongo from './Components/assets/vestidoLongoFrente.svg';
import RoupaGenerica from './Components/assets/camisetaGenerica.svg';

//camisetas simples
import camiseBranca from './Components/assets/camisetaBranca.svg';
import camisePink from './Components/assets/camisetaPink.svg';
import camiseMostarda from './Components/assets/camisetaMostarda.svg';
import camisePreta from './Components/assets/camisetaPreta.svg';
import camiseRosa from './Components/assets/camisetaRosa.svg';

import ItemExemplo from './Components/assets/itemExemplo.svg'





import { AiFillStar } from 'react-icons/ai';

const PRODUCTS = [
    {
        id: 1,
        img: BlusaVermelha,
        title: 'Blusinha Vermelha',
        star: <AiFillStar className="rating-star" />,
        reviews: '(102 reviews)',
        prevPrice: '140,00',
        newPrice: '1,00 R$',
        company: 'Fashion Co',
        color: 'vermelho',
        category: 'blusa',
    },
    {
        id: 2,
        img: BlusinhaBranca,
        title: 'Blusinha Branca',
        star: <AiFillStar className="rating-star" />,
        reviews: '(87 reviews)',
        prevPrice: '130,00',
        newPrice: '1,00 R$',
        company: 'Fashion Co',
        color: 'branco',
        category: 'blusa',
    },
    {
        id: 3,
        img: CalcaJeans,
        title: 'Calça Jeans',
        star: <AiFillStar className="rating-star" />,
        reviews: '(211 reviews)',
        prevPrice: '180,00',
        newPrice: '1,00 R$',
        company: 'Denim Wear',
        color: 'azul jeans',
        category: 'calça',
    },
    {
        id: 4,
        img: CalcaMoletom,
        title: 'Calça Moletom',
        star: <AiFillStar className="rating-star" />,
        reviews: '(99 reviews)',
        prevPrice: '160,00',
        newPrice: '1,00 R$',
        company: 'Urban Style',
        color: 'azul',
        category: 'calça',
    },
    {
        id: 5,
        img: CamisetaBranca,
        title: 'Camiseta Branca',
        star: <AiFillStar className="rating-star" />,
        reviews: '(156 reviews)',
        prevPrice: '110,00',
        newPrice: '1,00 R$',
        company: 'Basic Wear',
        color: 'branca',
        category: 'camiseta',
    },
    {
        id: 6,
        img: CamisetaPolo,
        title: 'Camiseta Polo',
        star: <AiFillStar className="rating-star" />,
        reviews: '(112 reviews)',
        prevPrice: '145,00',
        newPrice: '1,00 R$',
        company: 'Classic Polo',
        color: 'preto',
        category: 'camiseta',
    },
    {
        id: 7,
        img: RegataBranca,
        title: 'Regata Branca',
        star: <AiFillStar className="rating-star" />,
        reviews: '(64 reviews)',
        prevPrice: '90,00',
        newPrice: '1,00 R$',
        company: 'Sport Wear',
        color: 'branca',
        category: 'regata',
    },
    {
        id: 8,
        img: RegataListrada,
        title: 'Regata Listrada',
        star: <AiFillStar className="rating-star" />,
        reviews: '(78 reviews)',
        prevPrice: '100,00',
        newPrice: '1,00 R$',
        company: 'Trendy Stripes',
        color: 'listrada',
        category: 'regata',
    },
    {
        id: 9,
        img: SaiaCurta,
        title: 'Saia Curta',
        star: <AiFillStar className="rating-star" />,
        reviews: '(58 reviews)',
        prevPrice: '120,00',
        newPrice: '1,00 R$',
        company: 'Fashion Skirts',
        color: 'preta',
        category: 'saia',
    },
    {
        id: 10,
        img: SaiaLonga,
        title: 'Saia Longa',
        star: <AiFillStar className="rating-star" />,
        reviews: '(84 reviews)',
        prevPrice: '150,00',
        newPrice: '1,00 R$',
        company: 'Fashion Skirts',
        color: 'vermelha',
        category: 'saia',
    },
    {
        id: 11,
        img: VestidoCurto,
        title: 'Vestido Curto',
        star: <AiFillStar className="rating-star" />,
        reviews: '(97 reviews)',
        prevPrice: '170,00',
        newPrice: '1,00 R$',
        company: 'Glam Dress',
        color: 'rosa',
        category: 'vestido',
    },
    {
        id: 12,
        img: VestidoLongo,
        title: 'Vestido Longo',
        star: <AiFillStar className="rating-star" />,
        reviews: '(123 reviews)',
        prevPrice: '200,00',
        newPrice: '1,00 R$',
        company: 'Glam Dress',
        color: 'verde',
        category: 'vestido',
    },
    {
        id: 13,
        img: RoupaGenerica,
        title: 'Roupa Generica 1',
        star: <AiFillStar className="rating-star" />,
        reviews: '(31 reviews)',
        prevPrice: '100,00',
        newPrice: '1,00 R$',
        company: 'Genérica',
        color: 'azul',
        category: 'diversos',
    },
    {
        id: 14,
        img: RoupaGenerica,
        title: 'Roupa Generica 2',
        star: <AiFillStar className="rating-star" />,
        reviews: '(45 reviews)',
        prevPrice: '100,00',
        newPrice: '1,00 R$',
        company: 'Genérica',
        color: 'cinza',
        category: 'diversos',
    },
    {
        id: 15,
        img: RoupaGenerica,
        title: 'Roupa Generica 3',
        star: <AiFillStar className="rating-star" />,
        reviews: '(52 reviews)',
        prevPrice: '100,00',
        newPrice: '1,00 R$',
        company: 'Genérica',
        color: 'vermelha',
        category: 'diversos',
    },
    {
        id: 16,
        img: camiseBranca,
        title: 'Camiseta Branca Simples',
        star: <AiFillStar className="rating-star" />,
        reviews: '(88 reviews)',
        prevPrice: '90,00',
        newPrice: '1,00 R$',
        company: 'Basic Wear',
        color: 'branca',
        category: 'camiseta',
    },
    {
        id: 17,
        img: camiseMostarda,
        title: 'Camiseta Mostarda',
        star: <AiFillStar className="rating-star" />,
        reviews: '(73 reviews)',
        prevPrice: '95,00',
        newPrice: '1,00 R$',
        company: 'Basic Wear',
        color: 'mostarda',
        category: 'camiseta',
    },
    {
        id: 18,
        img: camisePink,
        title: 'Camiseta Pink',
        star: <AiFillStar className="rating-star" />,
        reviews: '(69 reviews)',
        prevPrice: '95,00',
        newPrice: '1,00 R$',
        company: 'Basic Wear',
        color: 'rosa pink',
        category: 'camiseta',
    },
    {
        id: 19,
        img: camisePreta,
        title: 'Camiseta Preta',
        star: <AiFillStar className="rating-star" />,
        reviews: '(80 reviews)',
        prevPrice: '95,00',
        newPrice: '1,00 R$',
        company: 'Basic Wear',
        color: 'preta',
        category: 'camiseta',
    },
    {
        id: 20,
        img: camiseRosa,
        title: 'Camiseta Rosa Claro',
        star: <AiFillStar className="rating-star" />,
        reviews: '(77 reviews)',
        prevPrice: '95,00',
        newPrice: '1,00 R$',
        company: 'Basic Wear',
        color: 'rosa claro',
        category: 'camiseta',
    },
];

export default PRODUCTS;
