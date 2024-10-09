//Frente
/*Todas as roupas*/
import BlusaVermelha from './Components/assets/blusaVermelhaFrente.svg';
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



//Verso
import BlusaVermelhaV from './Components/assets/blusaVermelhaVerso.svg'
import BlusaBrancaV from './Components/assets/blusaBrancaVerso.svg'
import CalcaJeansV from './Components/assets/calçaJeansVerso.svg'
import CalcaMoletomV from './Components/assets/calçaPretaVerso.svg'
import CamisetaBrancaV from './Components/assets/camisetaBrancaVerso.svg'
import CamisetaPoloV from './Components/assets/camisetaPoloVerso.svg'
import RegataBrancaV from './Components/assets/regataBrancaVerso.svg'
import RegataListradaV from './Components/assets/regataListradaVerso.svg'
import SaiaCurtaV from './Components/assets/saiaCurtaVerso.svg'
import SaiaLongaV from './Components/assets/saiaLongaVerso.svg'
import VestidoCurtoV from './Components/assets/vestidoCurtoVerso.svg'
import VestidoLongoV from './Components/assets/vestidoLongoVerso.svg'




const PRODUCTS = [
    {
        id: 1,
        novo: 1,
        name: 'Blusinha Vermelha',
        price: '1,00 R$',
        desconto: '3x de R$ 11,63 no cartão s/ juros',
        image: BlusaVermelha,
        verso: BlusaVermelhaV,
        exemploImg: ItemExemplo,
        details:
            '',
    },
    {
        id: 2,
        name: 'Blusinha Branca',
        price: '1,00 R$',
        desconto: '3x de R$ 11,63 no cartão s/ juros',
        image: BlusinhaBranca,
        verso: BlusaBrancaV,
        exemploImg: ItemExemplo,
        details:
            '',
    },
    {
        id: 3,
        name: 'Calça Jeans',
        price: '1,00 R$',
        desconto: '3x de R$ 11,63 no cartão s/ juros',
        image: CalcaJeans,
        verso: CalcaJeansV,
        exemploImg: ItemExemplo,
        details:
            '',
    },
    {
        id: 4,
        novo: 2,
        name: 'Calça Moletom',
        price: '1,00 R$',
        desconto: '3x de R$ 11,63 no cartão s/ juros',
        image: CalcaMoletom,
        verso: CalcaMoletomV,
        exemploImg: ItemExemplo,
        details:
            '',
    },
    {
        id: 5,
        name: 'Camiseta Branca',
        price: '1,00 R$',
        desconto: '3x de R$ 11,63 no cartão s/ juros',
        image: CamisetaBranca,
        verso: CamisetaBrancaV,
        exemploImg: ItemExemplo,
        details:
            '',
    },
    {
        id: 6,
        name: 'Camiseta Polo',
        novo: 3,
        price: '1,00 R$',
        desconto: '3x de R$ 11,63 no cartão s/ juros',
        image: CamisetaPolo,
        verso: CamisetaPoloV,
        exemploImg: ItemExemplo,
        details:
            '',
    },
    {
        id: 7,
        name: 'Regata Branca',
        price: '1,00 R$',
        desconto: '3x de R$ 11,63 no cartão s/ juros',
        image: RegataBranca,
        verso: RegataBrancaV,
        exemploImg: ItemExemplo,
        details:
            '',
    },
    {
        id: 8,
        name: 'Regata Listrada',
        novo: 4,
        price: '1,00 R$',
        desconto: '3x de R$ 11,63 no cartão s/ juros',
        image: RegataListrada,
        verso: RegataListradaV,
        exemploImg: ItemExemplo,
        details:
            '',
    },
    {
        id: 9,
        name: 'Saia Curta',
        price: '1,00 R$',
        desconto: '3x de R$ 11,63 no cartão s/ juros',
        image: SaiaCurta,
        verso: SaiaCurtaV,
        exemploImg: ItemExemplo,
        details:
            '',
    },
    {
        id: 10,
        name: 'Saia Longa',
        novo: 5,
        price: '1,00 R$',
        desconto: '3x de R$ 11,63 no cartão s/ juros',
        image: SaiaLonga,
        verso: SaiaLongaV,
        exemploImg: ItemExemplo,
        details:
            '',
    },
    {
        id: 11,
        name: 'Vestido Curto',
        price: '1,00 R$',
        desconto: '3x de R$ 11,63 no cartão s/ juros',
        image: VestidoCurto,
        verso: VestidoCurtoV,
        exemploImg: ItemExemplo,
        details:
            '',
    },
    {
        id: 12,
        name: 'Vestido Longo',
        novo: 6,
        price: '1,00 R$',
        desconto: '3x de R$ 11,63 no cartão s/ juros',
        image: VestidoLongo,
        verso: VestidoLongoV,
        exemploImg: ItemExemplo,
        details:
            '',
    },
    {
        id: 13,
        name: 'Roupa Generica 1',
        price: '1,00 R$',
        desconto: '3x de R$ 11,63 no cartão s/ juros',
        image: RoupaGenerica,
        exemploImg: ItemExemplo,
        details:
            '',
    },
    {
        id: 14,
        name: 'Roupa Generica 2',
        price: '1,00 R$',
        desconto: '3x de R$ 11,63 no cartão s/ juros',
        image: RoupaGenerica,
        exemploImg: ItemExemplo,
        details:
            '',
    },
    {
        id: 15,
        name: 'Roupa Generica 3',
        price: '1,00 R$',
        desconto: '3x de R$ 11,63 no cartão s/ juros',
        image: RoupaGenerica,
        exemploImg: ItemExemplo,
        details:
            '',
    },
    {
        id: 16,
        name: 'Camiseta Branca Simples',
        price: '1,00 R$',
        desconto: '3x de R$ 11,63 no cartão s/ juros',
        image: camiseBranca,
        exemploImg: ItemExemplo,
        details:
            '',
    },
    {
        id: 17,
        name: 'Camiseta Mostarda',
        price: '1,00 R$',
        desconto: '3x de R$ 11,63 no cartão s/ juros',
        image: camiseMostarda,
        exemploImg: ItemExemplo,
        details:
            '',
    },
    {
        id: 18,
        name: 'Camiseta Pink',
        price: '1,00 R$',
        desconto: '3x de R$ 11,63 no cartão s/ juros',
        image: camisePink,
        exemploImg: ItemExemplo,
        details:
            '',
    },
    {
        id: 19,
        name: 'Camiseta Preta',
        price: '1,00 R$',
        desconto: '3x de R$ 11,63 no cartão s/ juros',
        image: camisePreta,
        exemploImg: ItemExemplo,
        details:
            '',
    },
    {
        id: 20,
        name: 'Camiseta Rosa Claro',
        price: '1,00 R$',
        desconto: '3x de R$ 11,63 no cartão s/ juros',
        image: camiseRosa,
        exemploImg: ItemExemplo,
        details:
            '',
    }
]

export default PRODUCTS;